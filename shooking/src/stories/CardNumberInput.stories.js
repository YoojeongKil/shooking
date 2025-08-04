import { useState } from "react";
import CardNumberInput from "../components/CardNumberInput";

export default {
  title: "Components/CardNumberInput",
  component: CardNumberInput,
  tags: ["autodocs"],
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || "");
  return <CardNumberInput {...args} value={value} onChange={setValue} />;
};

export const Default = {
  render: Template,
  args: {
    value: "",
    error: "",
  },
};

export const WithError = {
  render: Template,
  args: {
    value: "12345678",
    error: "16자리 숫자를 입력하세요.",
  },
};
