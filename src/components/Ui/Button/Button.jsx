import style from "./button.module.css";

const Button = ({ children, click, type }) => {
  const buttonClass = [style.button, style[type]].join(" ");
  return (
    <>
      <button onClick={click} className={buttonClass}>
        {children}
      </button>
    </>
  );
};
export default Button;
