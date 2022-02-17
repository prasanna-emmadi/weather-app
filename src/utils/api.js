const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const getDailyForecast = (city, lat, lng) => {
  const url = `/.netlify/functions/node-fetch?city=${city}&apikey=${apiKey}&lat=${lat}&lng=${lng}`;
  return fetch(url, { headers: { accept: "Accept: application/json" } }).then(
    (x) => x.json()
  );
};
