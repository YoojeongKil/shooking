const CardPasswordInput = ({ value, onChange, error }) => {
  const handleChange = (e, index) => {
    const val = e.target.value;
    if (!/^\d?$/.test(val)) return;

    const newValue = value.split("");
    newValue[index] = val;
    onChange(newValue.join(""));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-neutral-600">
        카드 비밀번호
      </label>

      <div className="flex items-center gap-2">
        {[0, 1].map((index) => (
          <input
            key={index}
            type="password"
            maxLength={1}
            inputMode="numeric"
            value={value[index] || ""}
            onChange={(e) => handleChange(e, index)}
            className="w-[43px] h-[45px] text-lg text-center font-medium rounded-lg bg-[#ECEBF1] text-black"
          />
        ))}

        {[0, 1].map((index) => (
          <div
            key={index}
            className="w-[43px] h-[45px] flex items-center justify-center"
          >
            <span className="text-lg text-black">•</span>
          </div>
        ))}
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CardPasswordInput;
