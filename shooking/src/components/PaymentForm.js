import { useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardValidThruInput from "./CardValidThruInput";
import CardHolderInput from "./CardHolderInput";
import CardCVCInput from "./CardCVCInput";

const PaymentForm = () => {
  const [form, setForm] = useState({
    cardNumber: "",
    expiry: "",
    cardHolder: "",
    cvc: "",
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
      default:
        return "";
    }
  };

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));

    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(form).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("결제가 완료되었습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
    </form>
  );
};

export default PaymentForm;
