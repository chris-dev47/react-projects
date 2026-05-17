function Accueil() {
  return (
    <div>
      <div className="hero">
        <h1>Bonjour, je suis <span>Kamguia Christel Aimé</span> 👋</h1>
        <h2>Développeur Web · Réseaux · Cybersécurité</h2>
        <p>Python • JavaScript • React • Node.js • Git</p>
        <div className="hero-buttons">
          <a href="/projets" className="btn-primary">Voir mes projets</a>
          <a href="/contact" className="btn-secondary">Me contacter</a>
        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <h3>6+</h3>
          <p>Projets</p>
        </div>
        <div className="stat">
          <h3>8+</h3>
          <p>Technologies</p>
        </div>
        <div className="stat">
          <h3>2026</h3>
          <p>Objectif Pro</p>
        </div>
      </div>
    </div>
  )
}

export default Accueil