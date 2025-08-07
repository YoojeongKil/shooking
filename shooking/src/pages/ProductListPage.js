import Header from "../components/Header";
import ProductList from "../components/ProductList";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

export default function ProductListPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Header showCartButton={true} onCartClick={() => navigate("/cart")} />
      <div className="p-5">
        <div className="mb-5">
          <div className="text-[30px] font-extrabold">신발 상품 목록</div>
          <div className="text-base">
            현재 {products.length}개의 상품이 있습니다.
          </div>
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
}
