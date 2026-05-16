import { useState, useEffect, useMemo, useCallback } from 'react'
import { getProducts } from '../services/api'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import ProductDetail from '../components/ProductDetail'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

function Catalog() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  
  const navigate = useNavigate()
  const { token } = useAuth()
  const { cartCount } = useCart()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error("Error cargando productos:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Optimización: useMemo para evitar filtrar en cada render si no cambia el query o los productos
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, products])

  // Optimización: useCallback para que la función no cambie en cada render y ProductCard (memo) no se re-renderice
  const handleSelectProduct = useCallback((product) => {
    setSelectedProduct(product)
  }, [])

  const handleCloseDetail = useCallback(() => {
    setSelectedProduct(null)
  }, [])

  return (
    <>
      <header>
        <div className="nav-actions">
          <button onClick={() => navigate('/cart')} className="nav-btn cart-btn">
            🛒 Carrito <span className="cart-badge">{cartCount}</span>
          </button>
          {token ? (
            <button onClick={() => navigate('/profile')} className="nav-btn">👤 Mi Perfil</button>
          ) : (
            <button onClick={() => navigate('/login')} className="nav-btn">🔑 Iniciar Sesión</button>
          )}
        </div>
        <h1>Catálogo Interactivo</h1>
        <p className="subtitle">Explora nuestra selección exclusiva de productos</p>
        <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      </header>
      
      <main>
        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
            <p>Cargando catálogo premium...</p>
          </div>
        ) : (
          <>
            <div className="results-info">
              {filteredProducts.length} productos encontrados
            </div>
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onSelect={handleSelectProduct} 
                />
              ))}
            </div>
          </>
        )}
      </main>

      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={handleCloseDetail} 
        />
      )}
    </>
  )
}

export default Catalog;
