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

  const updateProductQuantity = (name, quantity) => {// deve modificare setAddedProduct, deve cambiare la quantità
    setAddedProducts(curr =>
      curr.map(p => p.name === name ? { ...p, quantity } : p))
  }

  const addToCart = product => { // questa funzione deve capire se c'è già un prodotto uguale aggiunto al carrello
    // const isProductAlreadyAdded = addedProducts.some(p => p.name === product.name);

    const alreadyAddedProduct = addedProducts.find(p => p.name === product.name)
    if (alreadyAddedProduct) {
      updateProductQuantity(alreadyAddedProduct.name, alreadyAddedProduct.quantity + 1)
      return;
    }
    const productToAdd = { // aggiungo il prodotto, tutto il prodotto corrente + la quantità
      ...product,
      quantity: 1
    }
    setAddedProducts(curr => [...curr, productToAdd])
  }

  const removeFromCart = product => {
    setAddedProducts(curr => curr.filter(p => p.name !== product.name)) // mantengo all'interno del carrello tutti gli elementi che non hanno lo stesso nome
  }

  const totalToPay = addedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0)

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
              <button onClick={() => removeFromCart(p)}>Rimuovi dal carrello</button>
            </li>
          ))}
        </ul>
        <h2>Totale da pagare: {totalToPay.toFixed(2)}€</h2>
      </>)}
    </>
  )
}

export default App
