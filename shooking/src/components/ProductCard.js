import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartState } from "../recoil/atoms/cartAtom";
import { addToCart } from "../utils/cartUtils";

const ActionButton = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`w-[50px] text-[10px] font-bold px-3 py-1 rounded-full ${className}`}
  >
    {children}
  </button>
);

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const [cart, setCart] = useRecoilState(cartState);

  const handleAdd = () => {
    setCart(addToCart(cart, product));
  };

  const handleBuy = () => {
    navigate("/card");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <img
        className="rounded-t-lg w-full h-[120px] object-cover"
        src={product.image}
        alt={product.brand}
      />
      <div className="p-4 flex flex-col gap-1">
        <div className="text-base font-medium">{product.brand}</div>
        <div className="text-xs text-gray-500">{product.desc}</div>
        <div className="text-sm font-medium">
          {product.price.toLocaleString()}원
        </div>
        <div className="flex gap-[10px]">
          <ActionButton onClick={handleAdd} className="bg-black text-white">
            담기
          </ActionButton>
          <ActionButton onClick={handleBuy} className="bg-[#FFEF64] text-black">
            구매
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
