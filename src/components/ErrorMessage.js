import PropTypes from "prop-types";

const ErrorMessage = (props) => {
  return (
    <article className="message is-danger">
      <div className="message-header">
        <p>Danger</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.message}</div>
    </article>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
