import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />

          {/* 404 처리는 제일 밑에 있어야 함 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//=== 디렉토리 구조 ===
// src/
//  ㄴ components : 페이지 안에 반복되는 컴포넌트
//  ㄴ pages : 페이지 단위 컴포넌트
//  ㄴ styles : css

// csr
// -> seo 필요 x, 유저와 상호작용이 많지 않다.

// ssr
// -> seo 필요, 유저와 상호작용이 많다.

// 같이 쓸 수도 있음
