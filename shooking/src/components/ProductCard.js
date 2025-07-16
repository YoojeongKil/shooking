function ProductCard({ product }) {
  return (
    <div class="bg-white border border-gray-200 rounded-lg">
      <img
        class="rounded-t-lg w-full h-[120px] object-cover"
        src={product.image}
        alt={product.title}
      />
      <div class="p-4 flex flex-col gap-1">
        <div className="text-base font-medium">{product.title}</div>
        <div className="text-xs text-gray-500">{product.desc}</div>
        <div className="text-sm font-medium">
          {product.price.toLocaleString()}원
        </div>
        <button className="w-[43px] text-[10px] font-bold px-3 py-1 bg-black text-white rounded-full">
          담기
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
