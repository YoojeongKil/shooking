import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import { useMemo, useState } from "react";
import Button from "../components/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { cartState } from "../recoil/atoms/cartAtom";
import { addToCart } from "../utils/cartUtils";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddToCart = () => {
    setCart(addToCart(cart, product, quantity));
    alert("장바구니에 담겼습니다.");
  };
  const product = products.find((p) => p.id.toString() === productId);

  const relatedProducts = useMemo(() => {
    return products.filter(
      (p) => p.brand === product.brand && p.id !== product.id
    );
  }, [product.brand, product.id]);

  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <div>
      <Header
        showBackButton={true}
        onBackClick={() => navigate("/shooking")}
        showCartButton={true}
        onCartClick={() => navigate("/cart")}
      />
      <div className="px-6 py-9">
        <img
          className="w-full h-[441px] rounded-[20px] object-cover mb-9"
          src={product.image}
          alt={product.brand}
        />

        <div className="mb-[26px]">
          <div className="flex justify-between items-center px-2 mb-[34px]">
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-extrabold">{product.brand}</div>
              <div className="text-base">{product.desc}</div>
              <div className="text-xl font-medium">
                {product.price.toLocaleString()}원
              </div>
            </div>

            <div className="flex items-center gap-[15px]">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-md"
              >
                <FaMinus />
              </button>
              <div className="font-semibold text-lg">{quantity}</div>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-md"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="bg-black text-white py-4 font-semibold text-xl"
          >
            장바구니 담기
          </Button>
        </div>

        <div className="flex flex-col gap-2 px-2">
          <div className="text-xl font-extrabold">관련 상품</div>
          <div className="text-base">
            {product.brand}의 다른 신발은 어떠신가요?
          </div>
          <div className="flex gap-3 overflow-x-auto">
            {relatedProducts.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.brand}
                className="w-[120px] aspect-square object-cover rounded-[20px] cursor-pointer"
                onClick={() => navigate(`/product/${item.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
