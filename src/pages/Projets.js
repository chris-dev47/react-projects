function Projets() {
  const projets = [
    { id: 1, nom: "Calculatrice Python", langage: "Python" },
    { id: 2, nom: "Portfolio Web", langage: "HTML/CSS" },
    { id: 3, nom: "API REST", langage: "Node.js" }
  ]

  return (
    <div>
      <h1>Mes Projets 🚀</h1>
      {projets.map(projet => (
        <div key={projet.id}>
          <h3>{projet.nom}</h3>
          <p>{projet.langage}</p>
        </div>
      ))}
    </div>
  )
}

export default Projets