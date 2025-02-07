import { useState } from 'react'
import './App.css'

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <h1>Vite + React + TypeScript</h1>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App 