import { useState } from "react";

function ProductCard({ product, setCartCount }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    if (!added) {
      setAdded(true);
      setCartCount((count) => count + 1);
    }
  };

  return (
    <div class="bg-white border border-gray-200 rounded-lg">
      <img
        class="rounded-t-lg w-full h-[120px] object-cover"
        src={product.image}
        alt={product.title}
      />
      <div class="p-4 flex flex-col gap-1">
        <div className="text-base font-medium">{product.title}</div>
        <div className="text-xs text-gray-500">{product.desc}</div>
        <div className="text-sm font-medium">
          {product.price.toLocaleString()}원
        </div>
        <button
          onClick={handleClick}
          className={`w-[50px] text-[10px] font-bold px-3 py-1 rounded-full ${
            added ? "bg-gray-300 text-black" : "bg-black text-white"
          }`}
        >
          {added ? "담김!" : "담기"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
