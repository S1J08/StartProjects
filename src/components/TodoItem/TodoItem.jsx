import Button from "../Ui/Button/Button";
import style from "./todoitem.module.css";

const TodoItem = ({ item, deleteTodo }) => {
  return (
    <>
      <div>
        <span className={style.span}>
          {item.text}
          <Button  type={'danger'} click={() => deleteTodo(item.id)}>Удалить</Button>
        </span>
      </div>
    </>
  );
};
export default TodoItem;
