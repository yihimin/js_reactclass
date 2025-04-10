import { useState } from 'react';
import {
  Container,
  Title,
  InputContainer,
  Input,
  AddButton,
  TodoList as StyledList,
  TodoItem,
  DeleteButton,
} from './StyledComponents';

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

  const removeTodo = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

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
      <StyledList>
        {todos.map((todo, index) => (
          <TodoItem key={index}>
            {todo}
            <DeleteButton onClick={() => removeTodo(index)}>삭제</DeleteButton>
          </TodoItem>
        ))}
      </StyledList>
    </Container>
  );
}
