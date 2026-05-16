import { memo } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = memo(({ product, onSelect }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image" onClick={() => onSelect(product)}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3 onClick={() => onSelect(product)} style={{ cursor: 'pointer' }}>{product.title}</h3>
        <p className="price">${product.price}</p>
        <div className="card-actions">
          <button onClick={() => onSelect(product)} className="detail-btn">
            Detalles
          </button>
          <button onClick={() => addToCart(product)} className="buy-btn">
            🛒 Añadir
          </button>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
