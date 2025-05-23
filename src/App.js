import { useEffect, useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const newId = useRef(0);
  const [saveValue, setSaveValue] = useState(() => {
    const saveData = localStorage.getItem("ToDoList");
    return saveData ? JSON.parse(saveData) : [];
  });

  // 상태 변경 시 로컬 스토리지에 데이터 저장
  useEffect(() => {
    localStorage.setItem("ToDoList", JSON.stringify(saveValue));
  }, [saveValue]);

  const addValue = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: newId.current++,
      task: inputValue,
      completed: false,
    };
    setSaveValue([...saveValue, newTodo]);
    setInputValue("");
  };
  const clearTodoList = () => {
    localStorage.removeItem("ToDoList");
    setSaveValue([]);
  };
  const toggleComplete = (id) => {
    setSaveValue(
      saveValue.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  const selectRemove = () => {
    const saved = localStorage.getItem("ToDoList");
    if (!saved) return;
    const parsed = JSON.parse(saved);
    const filtered = parsed.filter((item) => !item.completed);
    localStorage.setItem("ToDoList", JSON.stringify(filtered));
    setSaveValue(filtered);
  };
  const KeyDown = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      addValue();
    }
  };

  const onChangeValue = (e) => {
    setInputValue(e.target.value);
  };
  const deleteClick = (id) => {
    setSaveValue(saveValue.filter((item) => item.id !== id));
  };

  return (
    <div className="whiteBox">
      <div className="grayBox">
        <div className="title">To Do List</div>
        <TodoInput
          inputValue={inputValue}
          onChangeValue={onChangeValue}
          KeyDown={KeyDown}
          addValue={addValue}
          clearTodoList={clearTodoList}
          selectRemove={selectRemove}
        />
        <TodoList
          saveValue={saveValue}
          toggleComplete={toggleComplete}
          deleteClick={deleteClick}
        />
      </div>
    </div>
  );
}

export default App;
