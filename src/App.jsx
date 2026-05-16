import { useState, useEffect } from 'react'
import { getProducts } from './services/api'
import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar'
import ProductDetail from './components/ProductDetail'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
        setFilteredProducts(data)
      } catch (error) {
        console.error("Error cargando productos:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredProducts(filtered)
  }, [searchQuery, products])

  return (
    <div className="container">
      <header>
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
                  onSelect={setSelectedProduct} 
                />
              ))}
            </div>
          </>
        )}
      </main>

      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      <footer>
        <p className="read-the-docs">
          Desarrollado por Melani Padilla Olivares
        </p>
      </footer>
    </div>
  )
}

export default App
