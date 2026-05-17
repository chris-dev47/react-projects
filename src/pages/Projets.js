function Projets() {
  const projets = [
    {
      id: 1,
      nom: "Calculatrice Python",
      description: "Calculatrice avec fonctions et gestion d'erreurs",
      langage: "Python",
      couleur: "#3776ab",
      github: "https://github.com/chris-dev47/portfolio"
    },
    {
      id: 2,
      nom: "Répertoire de contacts",
      description: "Application avec sauvegarde dans fichier",
      langage: "Python",
      couleur: "#3776ab",
      github: "https://github.com/chris-dev47/portfolio"
    },
    {
      id: 3,
      nom: "Calculatrice Web",
      description: "Calculatrice interactive HTML CSS JS",
      langage: "JavaScript",
      couleur: "#f7df1e",
      github: "https://github.com/chris-dev47/portfolio"
    },
    {
      id: 4,
      nom: "Portfolio Web",
      description: "Portfolio professionnel avec CSS avancé",
      langage: "HTML/CSS",
      couleur: "#e34c26",
      github: "https://github.com/chris-dev47/portfolio"
    },
    {
      id: 5,
      nom: "API REST",
      description: "API avec Express.js et base de données SQLite",
      langage: "Node.js",
      couleur: "#68a063",
      github: "https://github.com/chris-dev47/portfolio"
    },
    {
      id: 6,
      nom: "App React",
      description: "Application React avec Router et Hooks",
      langage: "React",
      couleur: "#61dafb",
      github: "https://github.com/chris-dev47/react-projects"
    }
  ]

  return (
    <div>
      <h1>Mes Projets 🚀</h1>
      <div className="projets-grid">
        {projets.map(projet => (
          <div key={projet.id} className="projet-card">
            <h3>{projet.nom}</h3>
            <p>{projet.description}</p>
            <span
              className="langage"
              style={{ backgroundColor: projet.couleur }}
            >
              {projet.langage}
            </span>
            <br/><br/>
            <a href={projet.github} target="_blank" rel="noreferrer" className="btn-github">
              🐙 Voir le code
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projets