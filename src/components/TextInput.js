import PropTypes from "prop-types";

const TextInput = (props) => {
  return (
    <input
      className="input"
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
