# Weather Widget

![Weather app success case](/screenshots/Weather_app.png)
![Weather app error case](/screenshots/Weather_app_error.png)

## Developer steps

- npm install -g netlify-cli
- netlify dev
  - application would be started at http://localhost:8888

## Cors issue solution

- https://www.digitalocean.com/community/tutorials/nodejs-solve-cors-once-and-for-all-netlify-dev

## Packages used

## bulma css

- https://blog.logrocket.com/how-to-use-bulma-css-with-react/#:~:text=Once%20the%20React%20app%20is,browser%20window%20via%20localhost%3A3000%20.

## Troubleshooting

- https://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories-on-rebase

- https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search
  - locationkey
  - GET /locations/v1/cities/search?apikey=NSZUoAzFLLzO6UOw8WzbKozEC7nWt9mr&q=oulu&language=en-us&details=true HTTP/1.1
    - response[0].Details.CanonicalLocationKey
- http://dataservice.accuweather.com/forecasts/v1/daily/1day/

- accuweather icon - https://developer.accuweather.com/sites/default/files/22-s.png

- weather icon - var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon

- Cors issues solution = https://www.digitalocean.com/community/tutorials/nodejs-solve-cors-once-and-for-all-netlify-dev
