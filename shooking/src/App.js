import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import products from "./data/products";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="max-w-md mx-auto min-h-screen">
      <Header cartCount={cartCount}/>
      <div className="p-5">
        <div className="mb-5">
          <div className="text-[30px] font-extrabold">신발 상품 목록</div>
          <div className="text-base">현재 {products.length}개의 상품이 있습니다.</div>
        </div>
        <ProductList products={products} setCartCount={setCartCount} />
      </div>
    </div>
  );
}

export default App;
