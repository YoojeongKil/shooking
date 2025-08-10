import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useRecoilState } from "recoil";
import { cartState } from "../recoil/atoms/cartAtom";
import { decreaseQuantity, increaseQuantity } from "../utils/cartUtils";

export default function CartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useRecoilState(cartState);

  const handleIncrease = (id) => {
    setCart((prevCart) => increaseQuantity(prevCart, id));
  };

  const handleDecrease = (id) => {
    setCart((prevCart) => decreaseQuantity(prevCart, id));
  };

  const productTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = productTotal >= 100000 ? 0 : 3000;
  const total = productTotal + shipping;

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
                <div key={item.id} className="flex p-5 gap-14 items-center">
                  <img
                    src={item.image}
                    alt={item.brand}
                    className="w-36 h-36 object-cover rounded-[30px]"
                  />
                  <div>
                    <div className="text-base font-medium mb-2">
                      {item.brand}
                    </div>
                    <div className="text-2xl font-bold">
                      {item.price.toLocaleString()}원
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="w-6 h-6 flex items-center justify-center bg-[#e6e6e6] rounded-[10px]"
                      >
                        <LuMinus />
                      </button>
                      <div>{item.quantity}</div>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="w-6 h-6 flex items-center justify-center bg-[#e6e6e6] rounded-[10px]"
                      >
                        <LuPlus />
                      </button>
                    </div>
                  </div>
                </div>
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
                <div>{total.toLocaleString()}원</div>
              </div>

              <Button
                type="submit"
                className="bg-[#FFEF64] text-black py-4 text-xl font-medium"
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
