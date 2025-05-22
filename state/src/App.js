import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Error from './components/Error';
import TodoList from './components/TodoList';
import TodoViewer from './components/TodoViewer';

function Home() {
  return <h1> Home </h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/todolist">TodoList</Link>
      </nav>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/todolist/:id" element={<TodoViewer />} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
