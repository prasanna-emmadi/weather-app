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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired, //https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
};

export default HalfContainer;
