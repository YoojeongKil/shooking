import Cart from "./Cart";
import { FaArrowLeft } from "react-icons/fa6";

export default function Header({
  showBackButton,
  showCartButton,
  onBackClick,
  onCartClick,
  cartCount,
}) {
  return (
    <header className="flex justify-between items-center px-5 h-[69px] text-white bg-black">
      {showBackButton ? (
        <FaArrowLeft onClick={onBackClick} className="w-6 h-6" />
      ) : (
        <div />
      )}
      {showCartButton ? (
        <Cart onClick={onCartClick} cartCount={cartCount} />
      ) : (
        <div />
      )}
    </header>
  );
}
