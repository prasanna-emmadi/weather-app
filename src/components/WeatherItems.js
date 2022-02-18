import HalfContainer from "./HalfContainer";
import Card from "./Card";
import { capitalizeFirstLetter } from "../utils/stringUtil";

const WeatherItems = (props) => {
  const { data, city, country } = props;
  return data.map((item, index) => {
    let iconCode = item.WeatherIcon;
    if (iconCode < 10) {
      iconCode = "0" + iconCode;
    }
    const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconCode}-s.png`;
    const { Value, Unit } = item.Temperature.Metric;
    const weatherText = item.WeatherText;
    const temperature = `${Value} ${Unit}`;

    return (
      <div className="block" key={index}>
        <HalfContainer>
          <HalfContainer>
            <Card
              city={capitalizeFirstLetter(city)}
              country={country}
              temperatue={temperature}
              iconUrl={iconUrl}
              weatherText={weatherText}
            />
          </HalfContainer>
        </HalfContainer>
      </div>
    );
  });
};

export default WeatherItems;
