import PropTypes from "prop-types";

// pure functional component
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.cardImageUrl} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
          <a href="#">#responsive</a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardImageUrl: PropTypes.string.isRequired,
  content: PropTypes.string,
  mediaContent: PropTypes.string,
};

export default Card;
