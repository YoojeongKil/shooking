const CardValidThruInput = ({ value, onChange, error }) => {
  const handleChange = (e) => {
    let val = e.target.value.replace(/[^0-9]/g, "");

    if (val.length >= 3) {
      val = val.slice(0, 2) + " / " + val.slice(2);
    }

    if (val.length > 7) {
      val = val.slice(0, 7);
    }

    onChange(val);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-neutral-600">만료일</label>
      <input
        type="text"
        name="expiry"
        value={value}
        onChange={handleChange}
        maxLength={7}
        placeholder="MM / YY"
        className=" bg-[#ECEBF1] w-[137px] h-[45px] rounded-lg text-lg text-center font-medium text-black"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CardValidThruInput;
