// creation du login via l'api backend

const Email = document.getElementById('e-mail')
const Password = document.getElementById('password')
const loginForm = document.getElementById('loginForm')
localStorage.setItem('user', false)  // la valeur initiale de la clé "user" dans le stockage local comme étant "false"

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const email = Email.value
  const password = Password.value
  const data = { email, password } // crée un objet "data" qui contient les valeurs de l'adresse e-mail et du mot de passe

  fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    body: JSON.stringify(data),       //  envoient une requête POST à l'API avec les données de connexion de l'utilisateur
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json()) // envoie les données du formulaire sous forme de chaîne JSON
    .then(data => {
      // Si l'identifiant est présent, cela signifie que l'utilisateur a réussi à se connecter,
      // donc le script stocke le jeton de connexion (data.token) et la valeur "true" pour la clé "user" dans le stockage local et redirige l'utilisateur vers la page "index.html"
      if (data.userId) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', true)
        window.location.href = 'index.html'
      } else {
        alert("Erreur dans l'identifiant ou le mot de passe") //  Sinon, une alerte s'affiche indiquant que l'identifiant ou le mot de passe est incorrect
      }
    })
    .catch(error => console.error('Error:', error)) // capture les erreurs qui pourraient survenir pendant l'exécution du script et les affiche dans la console du navigateur.
})