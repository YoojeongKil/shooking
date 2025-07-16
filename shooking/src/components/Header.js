import Cart from "./Cart";

export default function Header({ cartCount }) {
  return (
    <header className="flex justify-end bg-black px-8 py-4">
      <Cart cartCount={cartCount} />
    </header>
  );
}
