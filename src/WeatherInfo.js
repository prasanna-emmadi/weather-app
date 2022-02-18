import { useEffect, useState } from "react";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import { getDailyForecast } from "./utils/api";
import ErrorMessage from "./components/ErrorMessage";
import WeatherItems from "./components/WeatherItems";

const WeatherInfo = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [latLng, setLatLng] = useState({
    lat: 0.0,
    lng: 0.0,
    isLoaded: false,
  });
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log({ position });
          setLatLng({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            isLoaded: true,
          });
        },
        (error) => {
          alert(error);
        }
      );
    }
  }, [setLatLng]);

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const onClick = (event) => {
    // Note: if the event.preventDefault() is not invoked the app is reloading
    event.preventDefault();

    const fetchdata = async () => {
      try {
        const ret = await getDailyForecast(value, latLng.lat, latLng.lng);
        console.log({ ret });
        if (Array.isArray(ret.data) && ret.data.length > 0) {
          /*
          api result is of the following format
          {
            data: array[items],
            city: string,
            country: string
          }
          */
          setError(false);
          setData(ret.data);
          setCity(ret.city);
          setCountry(ret.country);
        } else {
          setError(true);
        }
      } catch (e) {
        console.log(e);
        setError(true);
      }
    };

    fetchdata();
  };

  return (
    <div className="container">
      <div className="block">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field has-addons">
                <p className="control">
                  <TextInput
                    value={value}
                    placeholder="Enter name of the city"
                    onChange={onChange}
                  />
                </p>
                <p className="control">
                  <Button name="Show weather info" onClick={onClick} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {error ? (
        <ErrorMessage message="City not found" />
      ) : (
        <WeatherItems data={data} city={city} country={country} />
      )}
    </div>
  );
};

export default WeatherInfo;
