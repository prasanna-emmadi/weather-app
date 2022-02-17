import PropTypes from "prop-types";

const HalfContainer = (props) => {
  return (
    <div className="columns">
      <div className="column">{props.children}</div>
      <div className="column" />
    </div>
  );
};

HalfContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HalfContainer;
