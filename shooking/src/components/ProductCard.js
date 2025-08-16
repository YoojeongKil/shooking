import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartState } from "../recoil/atoms/cartAtom";
import { addToCart } from "../utils/cartUtils";
import { useState } from "react";
import { buyState } from "../recoil/atoms/buyAtom";

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
  const [added, setAdded] = useState(false);
  const setBuy = useSetRecoilState(buyState);

  const handleAdd = () => {
    setCart(addToCart(cart, product, 1));
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  const handleBuy = () => {
    setBuy({ product, quantity: 1 });
    navigate("/card");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <Link to={`/product/${product.id}`}>
        <img
          className="rounded-t-lg w-full h-[120px] object-cover"
          src={product.image}
          alt={product.brand}
        />
      </Link>
      <div className="p-4 flex flex-col gap-1">
        <div className="text-base font-medium">{product.brand}</div>
        <div className="text-xs text-gray-500">{product.desc}</div>
        <div className="text-sm font-medium">
          {product.price.toLocaleString()}원
        </div>
        <div className="flex gap-[10px]">
          <ActionButton
            onClick={handleAdd}
            className={
              added ? "bg-[#D8D8D8] text-black" : "bg-black text-white"
            }
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
