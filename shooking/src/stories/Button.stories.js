import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    className: { control: "text" },
    children: { control: "text" },
  },
};

export const Submit = {
  args: {
    type: "submit",
    children: "작성 완료",
    className: "bg-black text-white py-3 text-sm font-bold",
  },
};

export const Payment = {
  args: {
    children: "결제하기",
    className: "bg-[#FFEF64] text-black py-4 text-xl font-medium",
  },
};

export const AddToCart = {
  args: {
    children: "장바구니 담기",
    className: "bg-black text-white py-4 font-semibold text-xl",
    onClick: () => alert("장바구니에 담겼습니다."),
  },
};
