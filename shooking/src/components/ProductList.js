import ProductCard from "./ProductCard";

function ProductList({ products, setCartCount }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} setCartCount={setCartCount}/>
      ))}
    </div>
  );
}

export default ProductList;
