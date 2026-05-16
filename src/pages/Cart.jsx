import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <header>
        <button onClick={() => navigate('/')} className="nav-btn">← Volver al Catálogo</button>
        <h1>Tu Carrito</h1>
      </header>

      <main className="cart-content">
        {cart.length === 0 ? (
          <div className="welcome-card">
            <h3>Tu carrito está vacío</h3>
            <p>Explora el catálogo y añade algunos productos.</p>
            <button onClick={() => navigate('/')} className="buy-btn">Ir a Comprar</button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p className="item-price">${item.price} x {item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">Eliminar</button>
                  </div>
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary welcome-card">
              <h3>Resumen</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Envío</span>
                <span className="free-shipping">Gratis</span>
              </div>
              <hr />
              <div className="summary-row total">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button className="buy-btn checkout-btn">Finalizar Compra</button>
              <button onClick={clearCart} className="detail-btn clear-btn">Vaciar Carrito</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Cart;
