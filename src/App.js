import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])
  const [nouvelle, setNouvelle] = useState("")
  const [recherche, setRecherche] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  const addTask = () => {
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

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" })
      .then(() => setTodos(todos.filter(t => t.id !== id)))
  }

  const completeTask = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, { method: "PUT" })
      .then(() => setTodos(todos.map(t => t.id === id ? {...t, termine: 1} : t)))
  }

  const todosFiltres = todos.filter(todo =>
    todo.titre.toLowerCase().includes(recherche.toLowerCase())
  )

  const total = todos.length
  const termines = todos.filter(t => t.termine === 1).length
  const enCours = total - termines

  return (
    <div className="app">
      <h1>📝 Todo App</h1>
      <p className="subtitle">Fullstack Task Manager</p>

      <div className="stats">
        <div className="stat">
          <h3>{total}</h3>
          <p>Total</p>
        </div>
        <div className="stat">
          <h3>{enCours}</h3>
          <p>En cours</p>
        </div>
        <div className="stat">
          <h3>{termines}</h3>
          <p>Terminées</p>
        </div>
      </div>

      <div className="input-zone">
        <input
          value={nouvelle}
          onChange={(e) => setNouvelle(e.target.value)}
          placeholder="New task..."
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <input
        className="search"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        placeholder="🔍 Search a task..."
      />

      <div className="todos">
        {todosFiltres.length === 0 && (
          <p className="vide">No tasks found !</p>
        )}
        {todosFiltres.map(todo => (
          <div key={todo.id} className={`todo ${todo.termine ? "termine" : ""}`}>
            <span>{todo.titre}</span>
            <div className="actions">
              {!todo.termine && (
                <button className="btn-terminer" onClick={() => completeTask(todo.id)}>✅</button>
              )}
              <button className="btn-supprimer" onClick={() => deleteTask(todo.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App