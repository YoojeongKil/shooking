import { LiaShoppingBagSolid } from "react-icons/lia";
import Badge from "@mui/material/Badge";

export default function Cart({ cartCount }) {
  return (
    <Badge
      badgeContent={cartCount}
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
    >
      <LiaShoppingBagSolid className="text-white w-5 h-6" />
    </Badge>
  );
}
