import PropTypes from "prop-types";

const Card = (props) => {
  // place name
  // temperature big bold
  // icon
  // weathertext
  const country = "" + props.country + "  ";
  const city = props.city + " ";
  return (
    <div className="box is-pulled-left">
      <h5 className="title is-5">
        {city}
        <sup
          style={{
            verticalAlign: "super",
            fontSize: "smaller",
            color: "white",
            backgroundColor: "lightblue",
            borderStyle: "rounded",
            borderRadius: "3px",
          }}
        >
          {country}
        </sup>
      </h5>
      <h3 className="title is-3">{props.temperatue}</h3>
      <div className="media  is-centered">
        <figure className="image is-48x48">
          <img src={props.iconUrl} alt={props.weatherText} />
        </figure>
      </div>
      <h6 className="title is-6">{props.weatherText}</h6>
    </div>
  );
};

Card.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  temperatue: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  weatherText: PropTypes.string.isRequired,
};

export default Card;
