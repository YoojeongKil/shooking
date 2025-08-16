import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../recoil/atoms/cartAtom";
import { decreaseQuantity, increaseQuantity } from "../utils/cartUtils";
import CartItem from "../components/CartItem";
import { cartSummaryState } from "../recoil/selectors/cartSelectors";

export default function CartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useRecoilState(cartState);
  const { productTotal, shipping, totalPrice } =
    useRecoilValue(cartSummaryState);

  const handleIncrease = (id) => {
    setCart((prevCart) => increaseQuantity(prevCart, id));
  };

  const handleDecrease = (id) => {
    setCart((prevCart) => decreaseQuantity(prevCart, id));
  };

  return (
    <div>
      <Header showBackButton={true} onBackClick={() => navigate("/shooking")} />

      <div>
        <div className="ml-5 mt-5">
          <div className="text-[30px] font-extrabold">장바구니</div>
          <div className="text-base">
            현재 {cart.length}개의 상품이 담겨있습니다.
          </div>
        </div>

        {cart.length > 0 && (
          <>
            <div className="divide-y">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                />
              ))}
            </div>

            <div className="p-5 border-t font-bold text-base">
              <div className="flex justify-between mb-2">
                <div>상품 금액</div>
                <div>{productTotal.toLocaleString()}원</div>
              </div>
              <div className="flex justify-between">
                <div>배송비</div>
                <div>
                  {shipping === 0 ? "무료" : `${shipping.toLocaleString()}원`}
                </div>
              </div>
            </div>

            <div className="p-5 border-t">
              <div className="flex justify-between font-bold text-base mb-11">
                <div>총 금액</div>
                <div>{totalPrice.toLocaleString()}원</div>
              </div>

              <Button
                className="bg-[#FFEF64] text-black py-4 text-xl font-medium"
                onClick={() => navigate("/card")}
              >
                결제하기
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
