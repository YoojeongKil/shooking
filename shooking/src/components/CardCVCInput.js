import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { MdHelpOutline } from "react-icons/md";

const CardCVCInput = ({ value, onChange, error }) => {
  const handleChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    onChange(val);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-0.5">
        <label className="text-xs font-medium text-neutral-600">
          보안 코드 (CVC/CVV)
        </label>
        <Tooltip
          title="카드 뒷면 3자리 숫자"
          placement="bottom-start"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -10],
                  },
                },
              ],
            },
          }}
        >
          <IconButton size="small">
            <MdHelpOutline />
          </IconButton>
        </Tooltip>
      </div>

      <input
        type="password"
        name="cvc"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        maxLength={3}
        className="bg-[#ECEBF1] w-[84px] h-[45px] rounded-lg text-lg text-center font-medium text-black"
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CardCVCInput;
