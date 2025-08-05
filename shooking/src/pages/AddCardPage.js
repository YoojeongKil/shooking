import { useNavigate } from "react-router-dom";
import CardHeader from "../components/CardHeader";
import PaymentForm from "../components/PaymentForm";

export default function AddCardPage() {
  const navigate = useNavigate();

  return (
    <div>
      <CardHeader
        title="카드 추가"
        showBack={true}
        onClose={() => navigate("/shooking")}
      />

      <PaymentForm />
    </div>
  );
}
