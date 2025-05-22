import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    //navigate(-1); 뒤로가기 이동
  };

  return (
    <>
      <h1>접속할 수 없는 url입니다</h1>
      <button onClick={handleClick}>홈으로 이동</button>
    </>
  );
}
