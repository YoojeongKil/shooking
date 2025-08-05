const formatCardNumber = (value) => {
  let formatted = "";
  for (let i = 0; i < value.length; i++) {
    const digit = value[i];
    if (i > 0 && (i === 4 || i === 8 || i === 12)) {
      formatted += " - ";
    }
    if (i >= 8) {
      formatted += "•";
    } else {
      formatted += digit;
    }
  }
  return formatted;
};

const CardNumberInput = ({ value, onChange, error }) => {
  const handleChange = (e) => {
    const newDisplayedValue = e.target.value;
    const oldDisplayedValue = formatCardNumber(value);

    if (newDisplayedValue.length < oldDisplayedValue.length) {
      onChange(value.slice(0, -1));
      return;
    }

    if (value.length >= 16) {
      return;
    }

    const addedChar = newDisplayedValue.slice(-1);

    if (/^\d$/.test(addedChar)) {
      onChange(value + addedChar);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-neutral-600">카드 번호</label>
      <input
        type="text"
        name="cardNumber"
        inputMode="numeric"
        value={formatCardNumber(value)}
        onChange={handleChange}
        placeholder="0000 - 0000 - •••• - ••••"
        className=" bg-[#ECEBF1] w-full h-[45px] rounded-lg text-lg text-center font-medium text-black"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CardNumberInput;
