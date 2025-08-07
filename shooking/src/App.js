import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import CardPage from "./pages/CardPage";
import AddCardPage from "./pages/AddCardPage";
import { CardProvider } from "./context/CardContext";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/shooking" element={<ProductListPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/add-card" element={<AddCardPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;
