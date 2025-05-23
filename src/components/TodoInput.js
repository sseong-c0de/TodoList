function TodoInput({
  inputValue,
  onChangeValue,
  KeyDown,
  addValue,
  clearTodoList,
  selectRemove,
}) {
  return (
    <div className="todoInput">
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={inputValue}
        onChange={onChangeValue}
        onKeyDown={KeyDown}
      ></input>
      <button type="button" onClick={addValue}>
        +
      </button>
      <button type="button" onClick={selectRemove}>
        ÷
      </button>
      <button type="button" onClick={clearTodoList}>
        -
      </button>
    </div>
  );
}
export default TodoInput;
