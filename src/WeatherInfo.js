//import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Card from "./components/Card";
import { getDailyForecast } from "./utils/api";
import HalfContainer from "./components/HalfContainer";

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
      <form onSubmit={onSubmit}>
        <HalfContainer>
          <div className="columns is-mobile">
            <div className="column  field">
              <TextInput
                value={value}
                placeholder="Enter name of the city"
                onChange={onChange}
              />
            </div>
            <div className="column is-narrow">
              <Button
                name="Show weather info"
                onClick={onClick}
                style={{ paddingTop: "10px" }}
              />
            </div>
          </div>
        </HalfContainer>
      </form>
      {data.map((item, index) => {
        let iconCode = item.WeatherIcon;
        if (iconCode < 10) {
          iconCode = "0" + iconCode;
        }
        const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconCode}-s.png`;
        return (
          <HalfContainer key={index}>
            <Card cardImageUrl={iconUrl} />
          </HalfContainer>
        );
      })}
    </div>
  );
};

export default WeatherInfo;
