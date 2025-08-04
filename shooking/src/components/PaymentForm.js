import { useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardValidThruInput from "./CardValidThruInput";
import CardHolderInput from "./CardHolderInput";
import CardCVCInput from "./CardCVCInput";
import CardPasswordInput from "./CardPasswordInput";
import CardImage from "./CardImage";
import { useNavigate } from "react-router-dom";
import { useCard } from "../context/CardContext";

const PaymentForm = () => {
  const [form, setForm] = useState({
    cardNumber: "",
    expiry: "",
    cardHolder: "",
    cvc: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateExpiry = (value) => {
    const cleaned = value.replace(/\s/g, "");
    const match = cleaned.match(/^(\d{2})\/(\d{2})$/);
    if (!match) return "MM / YY 형식으로 입력하세요.";

    const month = parseInt(match[1], 10);
    const year = parseInt(match[2], 10);

    if (month < 1 || month > 12) {
      return "월은 01에서 12 사이여야 합니다.";
    }

    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return "만료일이 지났습니다.";
    }

    return "";
  };

  const validateField = (name, value) => {
    switch (name) {
      case "cardNumber":
        return /^\d{16}$/.test(value) ? "" : "16자리 숫자를 입력하세요.";
      case "expiry":
        return validateExpiry(value);
      case "cardHolder":
        return value.trim() ? "" : "이름을 입력하세요.";
      case "cvc":
        return /^\d{3}$/.test(value) ? "" : "3자리 숫자를 입력하세요.";
      case "password":
        return /^\d{2}$/.test(value) ? "" : "앞 2자리 숫자를 입력하세요.";
      default:
        return "";
    }
  };

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));

    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const { addCard } = useCard();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(form).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      addCard(form);
      navigate("/card");
    }
  };

  const isFormValid = () => {
    return (
      form.cardNumber.length === 16 &&
      !validateField("cardNumber", form.cardNumber) &&
      !validateField("expiry", form.expiry) &&
      !validateField("cardHolder", form.cardHolder) &&
      !validateField("cvc", form.cvc) &&
      form.password.length === 2 &&
      !validateField("password", form.password)
    );
  };

  return (
    <div className="flex flex-col items-center gap-5 p-5">
      <CardImage
        cardNumber={form.cardNumber}
        expiry={form.expiry}
        cardHolder={form.cardHolder}
      />

      <form onSubmit={handleSubmit} className="w-full space-y-5">
        <CardNumberInput
          value={form.cardNumber}
          onChange={(val) => handleChange("cardNumber", val)}
          error={errors.cardNumber}
        />

        <CardValidThruInput
          value={form.expiry}
          onChange={(val) => handleChange("expiry", val)}
          error={errors.expiry}
        />

        <CardHolderInput
          value={form.cardHolder}
          onChange={(val) => handleChange("cardHolder", val)}
          error={errors.cardHolder}
        />

        <CardCVCInput
          value={form.cvc}
          onChange={(val) => handleChange("cvc", val)}
          error={errors.cvc}
        />

        <CardPasswordInput
          value={form.password}
          onChange={(val) => handleChange("password", val)}
          error={errors.password}
        />

        {isFormValid() && (
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full text-sm font-bold"
          >
            작성 완료
          </button>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
