import Header from "./components/Header";
import ProductList from "./components/ProductList";
import products from "./data/products";

function App() {
  return (
    <div className="max-w-md mx-auto min-h-screen">
      <Header />
      <div className="p-5">
        <div className="mb-5">
          <div className="text-[30px] font-extrabold">신발 상품 목록</div>
          <div className="text-base">현재 {products.length}개의 상품이 있습니다.</div>
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
