import { useState, ChangeEvent } from 'react';

// 1. Todo 타입 정의
type Todo = {
  id: Date;
  text: string;
  checked: boolean;
};

export default function TodoList() {
  // 2. useState에 타입 명시
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  // 3. addTodo 함수 타입 안정화
  const addTodo = (): void => {
    if (input === '') return;

    const todo_item: Todo = {
      id: new Date(),
      text: input,
      checked: false,
    };

    setTodos([...todos, todo_item]);
    setInput('');
  };

  // 4. deleteTodo 함수 매개변수 타입 명시
  const deleteTodo = (id: Date): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 5. input onChange 이벤트 타입 명시
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
  };

  return (
    <div style={{ margin: 10 }}>
      <h2>할 일 목록</h2>
      <div>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={addTodo}>추가</button>
      </div>

      {todos.map((todo) => (
        <div key={todo.id.toString()} className="todo-item">
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)} style={{ margin: 5 }}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}
