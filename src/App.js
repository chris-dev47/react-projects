import { useState } from "react"
import "./App.css"

function App() {
  const [competences, setCompetences] = useState(["Python", "HTML/CSS", "JavaScript", "React"])
  const [nouvelle, setNouvelle] = useState("")

  const ajouter = () => {
    if (nouvelle !== "") {
      setCompetences([...competences, nouvelle])
      setNouvelle("")
    }
  }

  const supprimer = (competence) => {
    setCompetences(competences.filter(c => c !== competence))
  }

  return (
    <div>
      <h1>Mes Compétences</h1>

      <input
        value={nouvelle}
        onChange={(e) => setNouvelle(e.target.value)}
        placeholder="Nouvelle compétence"
      />
      <button onClick={ajouter}>Ajouter</button>

      <ul>
        {competences.map((competence, index) => (
          <li key={index}>
            {competence}
            <button onClick={() => supprimer(competence)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App