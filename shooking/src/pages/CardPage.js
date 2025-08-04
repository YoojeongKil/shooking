import { useNavigate } from "react-router-dom";
import CardHeader from "../components/CardHeader";
import { useCard } from "../context/CardContext";
import CardImage from "../components/CardImage";

export default function CardPage() {
  const { cards } = useCard();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-card");
  };
  const handlePayment = (card) => {
    console.log("선택한 카드로 결제:", card);
    // navigate("/payment", { state: card });
    alert(`"${card.cardHolder}" 님의 카드로 결제합니다.`);
  };

  return (
    <div>
      <CardHeader
        title="보유카드"
        showBack={false}
        onClose={() => navigate("/shooking")}
      />

      <div className="flex flex-col items-center gap-4 mt-5">
        {cards.length > 0 ? (
          cards.map((card, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <CardImage
                cardNumber={card.cardNumber}
                expiry={card.expiry}
                cardHolder={card.cardHolder}
              />
              <button
                onClick={() => handlePayment(card)}
                className="w-[213px] bg-[#FFEF64] text-black text-[10px] font-bold px-6 py-3 rounded-full"
              >
                이 카드로 결제하기
              </button>
            </div>
          ))
        ) : (
          <div className="opacity-90 text-zinc-600 text-sm font-bold">
            새로운 카드를 등록해주세요.
          </div>
        )}
        <div
          onClick={handleClick}
          className="w-52 h-[123px] bg-neutral-200 rounded-[5px] flex items-center justify-center text-3xl text-[#575757] cursor-pointer"
        >
          +
        </div>
      </div>
    </div>
  );
}
