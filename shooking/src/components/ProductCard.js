import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ActionButton = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`w-[50px] text-[10px] font-bold px-3 py-1 rounded-full ${className}`}
  >
    {children}
  </button>
);

export default function ProductCard({ product, setCartCount }) {
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!added) {
      setAdded(true);
      setCartCount((count) => count + 1);
    }
  };

  const handleBuy = () => {
    navigate("/card");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <img
        className="rounded-t-lg w-full h-[120px] object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="p-4 flex flex-col gap-1">
        <div className="text-base font-medium">{product.title}</div>
        <div className="text-xs text-gray-500">{product.desc}</div>
        <div className="text-sm font-medium">
          {product.price.toLocaleString()}원
        </div>
        <div className="flex gap-[10px]">
          <ActionButton
            onClick={handleAdd}
            className={added ? "bg-gray-300 text-black" : "bg-black text-white"}
          >
            {added ? "담김!" : "담기"}
          </ActionButton>
          <ActionButton onClick={handleBuy} className="bg-[#FFEF64] text-black">
            구매
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
