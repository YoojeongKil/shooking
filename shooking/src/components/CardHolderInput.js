const CardHolderInput = ({ value, onChange, error }) => {
  const maxLength = 30;

  const handleChange = (e) => {
    const val = e.target.value.slice(0, maxLength);
    onChange(val);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center text-xs font-medium text-neutral-600">
        <label>카드 소유자 이름</label>
        <span>
          {value.length}/{maxLength}
        </span>
      </div>
      <input
        type="text"
        name="cardHolder"
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        className="bg-[#ECEBF1] w-full h-[45px] rounded-lg text-lg text-center font-medium text-black uppercase"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CardHolderInput;
