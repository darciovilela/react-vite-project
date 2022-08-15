import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <a href="https://github.com/darciovilela" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/9962604?v=4" className="logo darcio" alt="darcio" />
        </a>
      </div>
      <h1>Darcio Vilela</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </div>
      
    </div>
  )
}

export default App
