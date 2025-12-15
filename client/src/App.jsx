import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])
  
  return (
    <div style={{ padding: "50px" }}>
      <h1>Frontend-Backend Connection</h1>
      {/* If data exists, show it. Otherwise show "Loading..." */}
      <h3>Result from API: {data.length ? data.length : "Loading..." }</h3>
        {data.map((user, index) => (
          <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
          </tr>
        ))}
    </div>
    )
}

export default App
