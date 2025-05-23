function TodoItem({ item, toggleComplete, deleteClick }) {
  return (
    <div className="todoLists">
      <div className="checkBox">
        <input
          type="checkbox"
          id={item.id}
          checked={item.completed}
          onChange={() => {
            toggleComplete(item.id);
          }}
        ></input>
      </div>
      <div className={`todoList ${item.completed ? "completed" : ""}`}>
        {item.task}
      </div>
      <div className="delate">
        <button
          type="button"
          onClick={() => {
            deleteClick(item.id);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
