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
      className={`w-full rounded-full ${className}`}
    >
      {children}
    </button>
  );
}
