import Header from "../components/Header";
import ProductList from "../components/ProductList";
import products from "../data/products";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";

export default function ProductListPage() {
  const navigate = useNavigate();

  const BATCH_SIZE = 6;
  const [visibleProducts, setVisibleProducts] = useState(
    products.slice(0, BATCH_SIZE)
  );
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  const loadMore = useCallback(() => {
    setTimeout(() => {
      const start = page * BATCH_SIZE;
      const end = start + BATCH_SIZE;
      const more = products.slice(start, end);

      if (more.length > 0) {
        setVisibleProducts((prev) => [...prev, ...more]);
        setPage((prev) => prev + 1);
      }
    }, 1000);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    const loaderElement = loaderRef.current;
    if (loaderElement) {
      observer.observe(loaderElement);
    }

    return () => {
      if (loaderElement) {
        observer.unobserve(loaderElement);
      }
    };
  }, [loadMore]);

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

        <ProductList products={visibleProducts} />

        {visibleProducts.length < products.length && (
          <div
            ref={loaderRef}
            className="flex justify-center items-center mt-4"
          >
            <div className="w-5 h-5 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
}
