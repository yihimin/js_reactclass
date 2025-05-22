import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Error from './components/Error';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
