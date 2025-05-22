import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>home</h1>;
}

function About() {
  return <h1>about</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"> Home </Link>&nbsp;
        <Link to="/about"> About </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
