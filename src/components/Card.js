import PropTypes from "prop-types";

// pure functional component
const Card = (props) => {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
          <a href="#">#responsive</a>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
};

Card.props = {
  content: PropTypes.string.isRequired,
  mediaContent: PropTypes.string.isRequired,
};

export default Card;
