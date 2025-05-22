import { useParams, useNavigate } from 'react-router-dom';

export default function TodoViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const decodedId = decodeURIComponent(id); // 중요!

  const todos = JSON.parse(localStorage.getItem('my-todos') || '[]');
  const todo = todos.find((item) => item.id === decodedId); // 비교 대상 일치!

  return (
    <div style={{ margin: '20px' }}>
      <p>- ID : {id}</p>
      <p>- 할일 내용 : {todo?.text || '(없음)'}</p>
      <p>- 할일 여부 : {todo?.checked ? '완료' : '미완료'}</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}
