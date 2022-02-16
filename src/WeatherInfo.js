//import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
//import Card from "./components/Card";
import { getDailyForecast } from "./utils/api";

const WeatherInfo = () => {
  //const [showCard, setShowCard] = useState(false);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const onClick = (event) => {
    event.preventDefault();
    // /locations/v1/cities/search?apikey=NSZUoAzFLLzO6UOw8WzbKozEC7nWt9mr&q=oulu&language=en-us&details=true
    console.log("onClick clicked");

    const fetchdata = async () => {
      try {
        const ret = await getDailyForecast(value);
        console.log({ ret });
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
    </div>
  );
};

export default WeatherInfo;