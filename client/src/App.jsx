import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8081/')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])

  return (
      <div style={{ padding: "50px" }}>
        <h1>Frontend-Backend Connection</h1>
        {/* If data exists, show it. Otherwise show "Loading..." */}
        <h3>Result from API: {data ? data : "Loading..."}</h3>
      </div>
    )
}

export default App
