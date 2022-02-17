import { useState } from "react";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Card from "./components/Card";
import { getDailyForecast } from "./utils/api";
import HalfContainer from "./components/HalfContainer";
import { capitalizeFirstLetter } from "./utils/stringUtil";

const WeatherInfo = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const onClick = (event) => {
    // Note: if the event.preventDefault() is not invoked the app is reloading
    event.preventDefault();

    const fetchdata = async () => {
      try {
        const ret = await getDailyForecast(value);
        console.log({ ret });
        setData(ret.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchdata();
  };
  const onSubmit = () => {};

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="block">
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
      </form>
      {data.map((item, index) => {
        let iconCode = item.WeatherIcon;
        if (iconCode < 10) {
          iconCode = "0" + iconCode;
        }
        const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconCode}-s.png`;
        const { Value, Unit } = item.Temperature.Metric;
        const weatherText = item.WeatherText;
        const place = capitalizeFirstLetter(value);

        const temperature = `${Value} ${Unit}`;

        return (
          <div className="block" key={index}>
            <HalfContainer>
              <HalfContainer>
                <Card
                  place={place}
                  temperatue={temperature}
                  iconUrl={iconUrl}
                  weatherText={weatherText}
                />
              </HalfContainer>
            </HalfContainer>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherInfo;
