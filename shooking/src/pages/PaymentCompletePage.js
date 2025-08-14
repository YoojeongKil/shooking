import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { cartState } from "../recoil/atoms/cartAtom";
import { cartSummaryState } from "../recoil/selectors/cartSelectors";

export default function PaymentCompletePage() {
  const navigate = useNavigate();
  const { totalQuantity, totalPrice } = useRecoilValue(cartSummaryState);
  const resetCart = useResetRecoilState(cartState);

  const backToList = () => {
    resetCart();
    navigate("/shooking");
  };

  return (
    <div>
      <Header />

      <div className="p-5 flex flex-col items-center justify-center min-h-screen">
        <div className="text-3xl font-extrabold mb-2">결제 완료!</div>
        <div className="text-base mb-[18px]">
          총 {totalQuantity}개의 상품을 구매하셨습니다.
        </div>

        <div className="text-base font-bold mb-2">총 결제 금액</div>
        <div className="text-2xl font-bold mb-8">
          {totalPrice.toLocaleString()}원
        </div>

        <Button
          className="bg-[#FFEF64] text-black py-4 text-xl font-medium"
          onClick={backToList}
        >
          상품 목록 보기
        </Button>
      </div>
    </div>
  );
}
