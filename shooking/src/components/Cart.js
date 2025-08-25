import { LiaShoppingBagSolid } from "react-icons/lia";
import Badge from "@mui/material/Badge";
import { useRecoilValue } from "recoil";
import { cartState } from "../recoil/atoms/cartAtom";

export default function Cart({ onClick }) {
  const cart = useRecoilValue(cartState);

  return (
    <Badge
      badgeContent={cart.length}
      overlap="circular"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: "white",
          width: 15,
          height: 15,
          minWidth: 0,
          fontWeight: "bold",
          color: "black",
          fontSize: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        },
      }}
      onClick={onClick}
    >
      <LiaShoppingBagSolid className="w-5 h-6" aria-label="cart-icon" />
    </Badge>
  );
}
