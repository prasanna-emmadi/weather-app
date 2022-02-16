const fetch = require("node-fetch");

const BASE_URL = "https://dataservice.accuweather.com";
const CITY_URL = `${BASE_URL}/locations/v1/cities/search`;
const CURRENT_COND_URL = `${BASE_URL}/currentconditions/v1`;

const fetchData = async (url) => {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    // NOT res.status >= 200 && res.status < 300
    return { statusCode: response.status, body: response.statusText };
  }
};

const handler = async function (event, context) {
  const city = event.queryStringParameters.city || "Oulu";
  const apikey = event.queryStringParameters.apikey || "";
  console.log({ city, apikey });

  try {
    const url = `${CITY_URL}?apikey=${apikey}&q=${city}&language=en-us&details=true`;

    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      console.log("response fail 1");
      return { statusCode: response.status, body: response.statusText };
    }
    const citydata = await response.json();
    const locationKey = citydata[0].Details.CanonicalLocationKey;
    const currUrl = `${CURRENT_COND_URL}/${locationKey}?apikey=${apikey}`;
    const response1 = await fetch(currUrl, {
      headers: { Accept: "application/json" },
    });
    console.log({ currUrl });
    if (!response1.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }

    const weatherdata = await response1.json();
    console.log({ weatherdata });
    return {
      statusCode: 200,
      body: JSON.stringify({ data: weatherdata }),
    };
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
