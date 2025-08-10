const CardImage = ({ cardNumber, expiry, cardHolder }) => {
  const formatMaskedCardNumber = (number) => {
    const visibleDigits = number.slice(0, 8);
    const maskedDigits = number.slice(8).replace(/\d/g, "•");

    const combined = (visibleDigits + maskedDigits).padEnd(16, "•");

    return combined.replace(/(.{4})(?=.)/g, "$1 ");
  };

  const formattedNumber = cardNumber
    ? formatMaskedCardNumber(cardNumber)
    : "•••• •••• •••• ••••";

  const formattedHolder = cardHolder || "NAME";
  const formattedExpiry = expiry || "MM / YY";

  return (
    <div className="w-[213px] h-[133px] flex flex-col justify-end gap-2 bg-[#333333] text-white rounded-[5px] p-5 shadow-lg">
      <div className="w-8 h-6 bg-[#CBBA64] rounded" />

      <div className="text-xs font-medium tracking-widest">
        {formattedNumber}
      </div>

      <div className="flex justify-between text-xs font-medium">
        <div className="max-w-[100px] overflow-hidden whitespace-nowrap uppercase">
          {formattedHolder}
        </div>
        <div>{formattedExpiry}</div>
      </div>
    </div>
  );
};

export default CardImage;
