import { useState } from "react";
import {
  Container,
  Title,
  InputContainer,
  Input,
  AddButton,
  TodoList as StyledList,
  TodoItem,
  TodoText,
  DeleteButton,
} from "./StyledComponents";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const changeInput = (str) => {
    setInput(str);
    console.log("[" + str + "]");
  };

  const addTodo = () => {
    if (input.trim() === "") return;
    const todo_item = {
      id: new Date().getTime(), // id는 숫자형이 더 좋음
      text: input,
      checked: false,
    };
    setTodos([...todos, todo_item]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const remainingTodos = todos.filter((todo) => !todo.checked).length;

  return (
    <Container>
      <Title>할 일 목록</Title>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => changeInput(e.target.value)}
        />
        <AddButton onClick={addTodo}>추가</AddButton>
      </InputContainer>
      <p>남은 할 일: {remainingTodos}</p>
      <StyledList>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleComplete(todo.id)}
            />
            <TodoText checked={todo.checked}>{todo.text}</TodoText>
            <DeleteButton onClick={() => removeTodo(todo.id)}>
              삭제
            </DeleteButton>
          </TodoItem>
        ))}
      </StyledList>
    </Container>
  );
}
