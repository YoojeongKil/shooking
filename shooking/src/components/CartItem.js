import { LuMinus, LuPlus } from "react-icons/lu";

export default function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <div className="flex p-5 gap-14 items-center">
      <img
        src={item.image}
        alt={item.brand}
        className="w-36 h-36 object-cover rounded-[30px]"
      />
      <div>
        <div className="text-base font-medium mb-2">{item.brand}</div>
        <div className="text-2xl font-bold">
          {item.price.toLocaleString()}원
        </div>
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={() => onDecrease(item.id)}
            className="w-6 h-6 flex items-center justify-center bg-[#e6e6e6] rounded-[10px]"
          >
            <LuMinus />
          </button>
          <div>{item.quantity}</div>
          <button
            onClick={() => onIncrease(item.id)}
            className="w-6 h-6 flex items-center justify-center bg-[#e6e6e6] rounded-[10px]"
          >
            <LuPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
