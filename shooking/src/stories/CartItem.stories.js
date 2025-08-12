import { useState } from "react";
import CartItem from "../components/CartItem";
import image1 from "../images/image1.jpg";

export default {
  title: "Components/CartItem",
  component: CartItem,
  tags: ["autodocs"],
};

const Template = (args) => {
  const [item, setItem] = useState(args.item);

  const handleIncrease = () => {
    setItem((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  };

  const handleDecrease = () => {
    setItem((prev) => ({
      ...prev,
      quantity: prev.quantity > 1 ? prev.quantity - 1 : 1,
    }));
  };

  return (
    <CartItem
      {...args}
      item={item}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  item: {
    id: 1,
    brand: "브랜드A",
    price: 35000,
    quantity: 1,
    image: image1,
  },
};
