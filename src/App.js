import { useState } from "react"
import MenuContainer from "./components/MenuContainer"
import BuyCart from "./components/BuyCart"
import './App.css'

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ])

  const [filteredProducts, setFilteredProducts] = useState(products)
  const [currentSale, setCurrentSale] = useState([])
  const [input, setInput] = useState("")

  const showProducts = (input) => {

    const teste = products.filter((item) => item.name.toLocaleLowerCase() === input.toLocaleLowerCase())

    typeof teste[0] === "undefined" ? (
      setFilteredProducts(products)
    ) : (
      setFilteredProducts(teste)
    )
  }

  const handleClick = (productId) => {
    const cart = products.find((item) => item.id === productId)
    if (!currentSale.includes(cart)) {
      setCurrentSale([...currentSale, cart])
    }
  }

  return (
    <section className="App">

      <div id="page">

        <h1 className="titleName">
          KZ Hamburgueria
        </h1>

        <form id="search">
          <input
            className="searchInput"
            placeholder="Procurar por..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={() => showProducts(input)}>
            Buscar
          </button>
        </form>

        <MenuContainer
          products={filteredProducts}
          handleClick={handleClick}
        />

      </div>

      <div className="cart">
        <BuyCart
          currentSale={currentSale}
        />
      </div>

    </section>
  )
}

export default App