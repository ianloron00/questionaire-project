import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Questionário</h1>
      <form className="form">
        <select>
            <option value="undefined">escolha um...</option>
            <option value="frontend">Front-end</option>
            <option value="backend">Back-end</option>
            <option value="qa">QA</option>
            <option value="devops">DevOps</option>
            <option value="outro">Outro</option>
        </select>
        <textarea 
            placeholder="Dê sua sugestão"
            id="suggestions box"
            name="suggestions box"
            rows="15"
            cols="75">
        </textarea>
        <input type="submit" value="Submeter" />
      </form>
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
