function ProductCard({ product, onSelect }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <button onClick={() => onSelect(product)} className="detail-btn">
          Ver detalles
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
