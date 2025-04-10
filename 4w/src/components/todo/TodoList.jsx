import { useState } from 'react';
import './style.css';

export default function TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const changeInput = (str) => {
    setInput(str);
    console.log('[' + input + ']');
  };

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
  };

  const removeTodo = (indexToDelete) => {
    setTodos(todos.filter((_, idx) => idx !== indexToDelete));
  };

  return (
    <div className="container">
      <h2>할 일 목록</h2>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => changeInput(e.target.value)}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button onClick={() => removeTodo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
