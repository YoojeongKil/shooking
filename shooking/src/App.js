import ProductList from "./components/ProductList";
import products from "./data/products";

function App() {
  return (
    <div className="max-w-md mx-auto p-5 min-h-screen">
        <ProductList products={products}/>
    </div>
  );
}

export default App;
