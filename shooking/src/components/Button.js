export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-black text-white py-3 rounded-full text-sm font-bold ${className}`}
    >
      {children}
    </button>
  );
}
