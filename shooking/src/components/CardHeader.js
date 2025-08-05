import { useNavigate } from "react-router-dom";
import { LuChevronLeft, LuX } from "react-icons/lu";

export default function CardHeader({ title, showBack, onClose }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-5 h-[69px] text-[#383838]">
      <div className="flex gap-4">
        {showBack && (
          <button onClick={() => navigate(-1)}>
            <LuChevronLeft className="w-4 h-4" />
          </button>
        )}

        <div className="text-sm font-medium">{title}</div>
      </div>

      <button onClick={onClose}>
        <LuX className="w-4 h-4" />
      </button>
    </div>
  );
}
