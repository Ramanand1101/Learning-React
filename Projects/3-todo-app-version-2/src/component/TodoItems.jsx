import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css"
const TodoItems = ({ todoItem }) => {
  return (
    <div className={`${style["items-container"]}`}>
      {todoItem.map((item, index) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name} />
      ))}
    </div>
  );
};

export default TodoItems;
