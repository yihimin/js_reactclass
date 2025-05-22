import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:category/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
