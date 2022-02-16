//import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Card from "./components/Card";
import { getDailyForecast } from "./utils/api";

const WeatherInfo = () => {
  //const [showCard, setShowCard] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const onClick = (event) => {
    // if the event.preventDefault() is not invoked the app is reloading
    event.preventDefault();

    const fetchdata = async () => {
      try {
        const ret = await getDailyForecast(value);
        console.log({ ret });
        setData(ret.DailyForecasts);
      } catch (e) {
        console.log(e);
      }
    };

    fetchdata();
  };
  const onSubmit = () => {};

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="field">
          <TextInput
            value={value}
            placeholder="Enter name of the city"
            onChange={onChange}
          />
        </div>
        <Button name="Show weather info" onClick={onClick} />
      </form>
      {data.map((item, index) => {
        const iconCode = item.Day.Icon;
        const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconCode}-s.png`;
        return <Card key={index} cardImageUrl={iconUrl} />;
      })}
    </div>
  );
};

export default WeatherInfo;
