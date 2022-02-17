import PropTypes from "prop-types";

const Card = (props) => {
  // place name
  // temperature big bold
  // icon
  // weathertext
  return (
    <div className="box is-pulled-left">
      <h5 class="title is-5">{props.place}</h5>
      <h3 class="title is-3">{props.temperatue}</h3>
      <div class="media  is-centered">
        <figure className="image is-48x48">
          <img src={props.iconUrl} alt="Placeholder image" />
        </figure>
      </div>
      <h6 class="title is-6">{props.weatherText}</h6>
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
