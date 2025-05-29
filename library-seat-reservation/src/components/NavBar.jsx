import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav
      style={{
        padding: '10px',
        backgroundColor: '#f5f5f5',
        marginBottom: '20px',
      }}
    >
      <Link to="/" style={{ marginRight: '10px' }}>
        Home
      </Link>
      <Link to="/seat" style={{ marginRight: '10px' }}>
        좌석 예약
      </Link>
    </nav>
  );
}
