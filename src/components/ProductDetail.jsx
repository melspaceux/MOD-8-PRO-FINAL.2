import { useCart } from '../context/CartContext';

function ProductDetail({ product, onClose }) {
  const { addToCart } = useCart();
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="detail-grid">
          <div className="detail-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="detail-info">
            <span className="category-tag">{product.category}</span>
            <h2>{product.title}</h2>
            <p className="description">{product.description}</p>
            <div className="purchase-info">
              <span className="detail-price">${product.price}</span>
              <div className="rating">
                ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
              </div>
            </div>
            <button onClick={() => { addToCart(product); onClose(); }} className="buy-btn">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
