const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const getDailyForecast = (city) => {
  const url = `/.netlify/functions/node-fetch?city=${city}&apikey=${apiKey}`;
  return fetch(url, { headers: { accept: "Accept: application/json" } }).then(
    (x) => x.json()
  );
};
