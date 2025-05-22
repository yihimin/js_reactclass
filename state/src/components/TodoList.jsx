import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    // localStorage에서 기존 데이터를 가져옴
    const saved = localStorage.getItem('my-todos');
    return saved ? JSON.parse(saved) : [];
  });

  // todos가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('my-todos', JSON.stringify(todos));
  }, [todos]);

  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const addTodo = () => {
    if (input == '') return;
    const todo_item = {
      id: new Date(),
      text: input,
      checked: false,
    };
    setTodos([...todos, todo_item]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    const new_todos = [...todos];
    for (let idx = 0; idx < todos.length; idx++) {
      if (new_todos[idx].id != id) continue;
      new_todos[idx].checked = !new_todos[idx].checked;
    }
    setTodos(new_todos);
    console.log(new_todos);
  };

  const remainingTodos = todos.filter((todo) => !todo.checked).length;

  return (
    <div style={{ margin: 10 }}>
      <h2>할 일 목록</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <p>남은 할 일 : {remainingTodos} 개</p>

      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => toggleComplete(todo.id)}
          />

          <span
            style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>
          <button onClick={(e) => deleteTodo(todo.id)} style={{ margin: 5 }}>
            삭제
          </button>
          <button
            onClick={() => navigate(`/todolist/${encodeURIComponent(todo.id)}`)}
            style={{ margin: 5 }}
          >
            상세보기
          </button>
        </div>
      ))}
    </div>
  );
}
