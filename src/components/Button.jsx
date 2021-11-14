const Button = ({
  text,
  bgColor = "black",
  textColor = "white",
  borderColor = "transparent",
}) => (
  <button
    style={{
      backgroundColor: bgColor,
      color: textColor,
      border: `2px solid ${borderColor}`,
    }}
  >
    {text}
  </button>
);

export default Button;
