import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button className="button is-info is-small" onClick={props.onClick}>
      {props.name}
    </button>
  );
};

Button.props = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
