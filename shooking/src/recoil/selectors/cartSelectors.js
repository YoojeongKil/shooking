import { selector } from "recoil";
import { cartState } from "../atoms/cartAtom";

export const cartSummaryState = selector({
  key: "cartSummaryState",
  get: ({ get }) => {
    const cart = get(cartState);
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const productTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = productTotal >= 100000 ? 0 : 3000;
    const totalPrice = productTotal + shipping;
    return { totalQuantity, productTotal, shipping, totalPrice };
  },
});
