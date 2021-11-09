import "./Button.css";

const Button = ({ text, secondary }) => (
  <button className={secondary ? "btn-secondary" : ""}>{text}</button>
);

export default Button;
