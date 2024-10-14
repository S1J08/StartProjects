import { useState } from "react";
import Button from "../components/Ui/Button/Button";
import Input from "../components/Ui/Input/Input";
import TodoItem from "../components/TodoItem/TodoItem";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  }

  function addTodo() {
    if (value.trim()) {
      setTodo((prev) => [...prev, { id: value, text: value }]);
      setValue("");
    }
  }

  function deleteTodo(id) {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <section className="TodoSSection">
        <h2 className="Todo__H">Список заметок</h2>
        <Input
          value={value}
          setValue={setValue}
          handleKeyDown={handleKeyDown}
        />

        <Button type="primary" click={addTodo}>
          Добавить
        </Button>
        <ul>
          {todo.map((item) => (
            <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} />
          ))}
        </ul>
      </section>
    </>
  );
};
export default Todo;
