import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])
  const [nouvelle, setNouvelle] = useState("")

  // Charger les tâches depuis le backend
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  // Ajouter une tâche
  const ajouter = () => {
    if (nouvelle !== "") {
      fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titre: nouvelle })
      })
        .then(res => res.json())
        .then(todo => {
          setTodos([...todos, todo])
          setNouvelle("")
        })
    }
  }

  // Supprimer une tâche
  const supprimer = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" })
      .then(() => setTodos(todos.filter(t => t.id !== id)))
  }

  // Terminer une tâche
  const terminer = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, { method: "PUT" })
      .then(() => setTodos(todos.map(t => t.id === id ? {...t, termine: 1} : t)))
  }

  return (
    <div className="app">
      <h1>📝 Todo App</h1>
      <p className="subtitle">Gestion de tâches Fullstack</p>

      <div className="input-zone">
        <input
          value={nouvelle}
          onChange={(e) => setNouvelle(e.target.value)}
          placeholder="Nouvelle tâche..."
        />
        <button onClick={ajouter}>Ajouter</button>
      </div>

      <div className="todos">
        {todos.length === 0 && <p className="vide">Aucune tâche pour l'instant !</p>}
        {todos.map(todo => (
          <div key={todo.id} className={`todo ${todo.termine ? "termine" : ""}`}>
            <span>{todo.titre}</span>
            <div className="actions">
              {!todo.termine && (
                <button className="btn-terminer" onClick={() => terminer(todo.id)}>✅</button>
              )}
              <button className="btn-supprimer" onClick={() => supprimer(todo.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App