const CITY_URL =
  "http://dataservice.accuweather.com/locations/v1/cities/search";
const DAILY_URL = "http://dataservice.accuweather.com/forecasts/v1/daily/1day";

const getResponseJson = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {},
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.log("error in fetch");
      console.log(e);
    });
};

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
console.log({ apiKey });

const getCityLocationKey = (city) => {
  const url = `${CITY_URL}?apikey=${apiKey}&q=${city}&language=en-us&details=true`;
  return getResponseJson(url).then((responseJson) => {
    const locationKey = responseJson[0].Details.CanonicalLocationKey;
    return Promise.resolve(locationKey);
  });
};

export const getDailyForecast = (city) => {
  return getCityLocationKey(city).then((locationKey) => {
    const url = `${DAILY_URL}/${locationKey}?apikey=${apiKey}`;
    return getResponseJson(url).then((responseJson) => {
      return Promise.resolve(responseJson.DailyForecasts);
    });
  });
};
