import style from "./input.module.css";

const Input = ({ value, setValue,handleKeyDown, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        className={style.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
