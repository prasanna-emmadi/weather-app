import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button className="button is-info" onClick={props.onClick}>
      {props.name}
    </button>
  );
};

Button.propsTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
