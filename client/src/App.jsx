import { useEffect, useState } from 'react'
import "./App.css"

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
    <h3>Result from API: {data.length ? data.length : "Loading..." }</h3>
    <table>
      <tbody>
        {data.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

export default App
