import { useState, useEffect } from "react"

function App() {
  const [utilisateurs, setUtilisateurs] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUtilisateurs(data))
  }, [])

  return (
    <div>
      <h1>Les 10 Utilisateurs</h1>
      {utilisateurs.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>📧 {user.email}</p>
          <p>📍 {user.address.city}</p>
          <hr/>
        </div>
      ))}
    </div>
  )
}

export default App