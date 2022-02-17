// const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiKey = "AeNuNpsoag0hcml1pSBUgnl2SWmTiBc1";
console.log({ apiKey });

export const getDailyForecast = (city) => {
  const url = `/.netlify/functions/node-fetch?city=${city}&apikey=${apiKey}`;
  return fetch(url, { headers: { accept: "Accept: application/json" } }).then(
    (x) => x.json()
  );
};
