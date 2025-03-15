import './App.css'

import { useState } from 'react'

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]) // variabile di stato x aggiungere el nel carrello
  console.log(addedProducts)

  const addToCart = product => { // questa funzione deve capire se c'è già un prodotto uguale aggiunto al carrello
    const isProductAlreadyAdded = addedProducts.some(p => p.name === product.name);
    if (isProductAlreadyAdded) {
      return;
    }
    const productToAdd = { // aggiungo il prodotto, tutto il prodotto corrente + la quantità
      ...product,
      quantity: 1
    }
    setAddedProducts(curr => [...curr, productToAdd])
  }

  return (
    <>
      <h1>Lista della spesa</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <h3>{p.name}: ({p.price.toFixed(2)}€)</h3>
            <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>
      {addedProducts.length > 0 && (<>
        <h2>Carrello</h2>
        <ul>
          {addedProducts.map((p, i) => (
            <li key={i}>
              <h4>{p.quantity} x {p.name} ({p.price.toFixed(2)}€)</h4>
            </li>
          ))}
        </ul>
      </>)}
    </>
  )
}

export default App
