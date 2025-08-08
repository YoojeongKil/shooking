import Cart from "./Cart";
import { FaArrowLeft } from "react-icons/fa6";

export default function Header({
  showBackButton,
  showCartButton,
  onBackClick,
  onCartClick,
}) {
  return (
    <header className="flex justify-between items-center px-5 h-[69px] text-white bg-black cursor-pointer">
      {showBackButton ? (
        <FaArrowLeft onClick={onBackClick} className="w-5 h-5" />
      ) : (
        <div />
      )}
      {showCartButton ? <Cart onClick={onCartClick} /> : <div />}
    </header>
  );
}
