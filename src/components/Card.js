import PropTypes from "prop-types";

const Card = (props) => {
  // place name
  // temperature big bold
  // icon
  // weathertext
  return (
    <div className="box is-pulled-left">
      <h5 className="title is-5">{props.place}</h5>
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
  place: PropTypes.string.isRequired,
  temperatue: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  weatherText: PropTypes.string.isRequired,
};

export default Card;
