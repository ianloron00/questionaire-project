import { useState } from 'react'
import Forms from './Forms'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Questionário</h1>
      <Forms />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          número de colaboradores é {count}
        </button>
      </div>
      <p className="read-the-docs">
        Projeto para aprendizagem
      </p>
    </div>
  )
}

export default App
