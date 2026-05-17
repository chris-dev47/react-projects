import { useState } from "react"

function Contact() {
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [envoye, setEnvoye] = useState(false)

  const envoyer = () => {
    if (nom !== "" && email !== "" && message !== "") {
      setEnvoye(true)
    } else {
      alert("Remplis tous les champs !")
    }
  }

  return (
    <div>
      <h1>Me Contacter 📧</h1>

      <div className="contact-grid">

        <div className="contact-infos">
          <h3>Mes coordonnées</h3>
          <p>📧 kamguiachris@gmail.com</p>
          <p>📱 +237 656 075 500</p>
          <p>🐙 github.com/chris-dev47</p>
          <p>📍 Douala, Cameroun</p>
        </div>

        <div className="contact-form">
          {envoye ? (
            <div className="succes">
              <h3>✅ Message envoyé !</h3>
              <p>Merci {nom}, je te réponds bientôt !</p>
            </div>
          ) : (
            <div>
              <input
                placeholder="Ton nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <input
                placeholder="Ton email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Ton message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
              />
              <button onClick={envoyer}>Envoyer 📨</button>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Contact