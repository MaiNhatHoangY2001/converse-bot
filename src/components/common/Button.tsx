import PropTypes from "prop-types";

function Button({className, text}) {
  return (
    <button
      className={`${className} font-roboto text-white font-bold p-1 rounded-full`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.node,
  text: PropTypes.node,
};

export default Button;
