import TodoItem from "./TodoItem";
function TodoList({ saveValue, toggleComplete, deleteClick }) {
  return (
    <div className="todoBox">
      {saveValue.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            toggleComplete={toggleComplete}
            deleteClick={deleteClick}
          />
        );
      })}
    </div>
  );
}
export default TodoList;
