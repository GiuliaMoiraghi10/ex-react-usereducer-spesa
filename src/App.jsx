import './App.css'

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  return (
    <>
      <h1>Lista della spesa</h1>
      <ul>
        {products.map((prodotto, i) => (
          <li key={i}>
            <h3>{prodotto.name}: {`${prodotto.price.toFixed(2)} €`}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
