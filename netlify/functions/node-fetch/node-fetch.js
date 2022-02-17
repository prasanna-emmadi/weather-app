const fetch = require("node-fetch");

const BASE_URL = "https://dataservice.accuweather.com";
const CITY_URL = `${BASE_URL}/locations/v1/cities/search`;
const CURRENT_COND_URL = `${BASE_URL}/currentconditions/v1`;
const LOCATION_SEARCH_URL = `${BASE_URL}/locations/v1/cities/geoposition/search`;

const fetchData = async (url) => {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    // NOT res.status >= 200 && res.status < 300
    return { statusCode: response.status, body: response.statusText };
  } else {
    return response.json();
  }
};

const getLocationKeyFromLatLng = async (apikey, lat, lng) => {
  try {
    const q = encodeURIComponent(`${lat},${lng}`);
    const url = `${LOCATION_SEARCH_URL}?apikey=${apikey}&q=${q}&details=true`;
    console.log("locationUrl " + url);
    const data = await fetchData(url);
    console.log({ locationData: data });
    console.log(
      "data.Details.CanonicalLocationKey " + data.Details.CanonicalLocationKey
    );
    return {
      locationKey: data.Details.CanonicalLocationKey,
      city: data.LocalizedName,
      country: data.Country.ID,
    };
  } catch {
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: "Location search not working" }),
    };
  }
};

const getWeatherData = async (apikey, locationInfo) => {
  try {
    const currUrl = `${CURRENT_COND_URL}/${locationInfo.locationKey}?apikey=${apikey}`;
    const weatherdata = await fetchData(currUrl);
    console.log({ weatherdata });
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: weatherdata,
        city: locationInfo.city,
        country: locationInfo.country,
      }),
    };
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: "Weather data functionality not working" }),
    };
  }
};

const getCityData = async (apikey, city) => {
  try {
    const url = `${CITY_URL}?apikey=${apikey}&q=${city}&language=en-us&details=true`;
    const citydata = await fetchData(url);
    if (citydata.length == 0) {
      return { statusCode: 400, body: "No cities found" };
    }

    return {
      locationKey: citydata[0].Details.CanonicalLocationKey,
      city: citydata[0].LocalizedName,
      country: citydata[0].Country.ID,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: "City functionality not working" }),
    };
  }
};

const handler = async function (event, context) {
  const lat = event.queryStringParameters.lat;
  const lng = event.queryStringParameters.lng;
  const city = event.queryStringParameters.city || "";
  const apikey = event.queryStringParameters.apikey || "";
  console.log({ city, apikey });

  try {
    let locationInfo;
    if (city !== "") {
      console.log("searching city");
      locationInfo = await getCityData(apikey, city);
    } else if (lat !== 0.0 || lng !== 0.0) {
      console.log("searching location");
      locationInfo = await getLocationKeyFromLatLng(apikey, lat, lng);
    }

    return await getWeatherData(apikey, locationInfo);
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };
