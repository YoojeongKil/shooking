import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import CardPage from "./pages/CardPage";
import AddCardPage from "./pages/AddCardPage";
import { CardProvider } from "./context/CardContext";
import CartPage from "./pages/CartPage";
import { RecoilRoot } from "recoil";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <RecoilRoot>
      <CardProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/shooking" element={<ProductListPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/add-card" element={<AddCardPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CardProvider>
    </RecoilRoot>
  );
}

export default App;
