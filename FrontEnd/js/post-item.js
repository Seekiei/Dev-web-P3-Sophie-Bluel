import { fetchData } from "./displayGallery.js"
import { checkFormFields } from "./input.js"

// function pour poster un nouveau projet et l'envoi de données de formulaire à l'API 

export function postProjet () {
    document.querySelector('#btn-valid').addEventListener('click', async function (event) { 
      event.preventDefault()
      console.log(event)
  
      const champsValide = checkFormFields() // vérifie si tous les champs de formulaire requis sont valide
      if (!champsValide) {
        alert('Veuillez remplir tous les champs.')
        return
      }
  
      const title = document.querySelector('#title').value
      const category = document.querySelector('#category').value
      const container = document.querySelector('#photo')
  
      const formData = new FormData()  // la fonction crée un objet FormData et y ajoute les valeurs des champs de formulaire pour le titre et la catégorie en utilisant la méthode append().
      formData.append('title', title)
      formData.append('category', category)
  
      const image = document.getElementById('fichier-input').files[0]
      if (image) {
        formData.append('image', image)  // Si un fichier d'image a été sélectionné l'image est également ajoutée à l'objet FormData
      }
  
      const token = localStorage.getItem('token')  // je récupère ensuite un jeton d'authentification à partir du stockage local en appelant localStorage.getItem('token')
  
      try {
        const response = await fetch('http://localhost:5678/api/works', { 
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}` // pour envoyer les données du formulaire à l'URL et elle inclut le jeton d'authentification dans les en-têtes de la requête
          },
          body: formData
        })
  
        if (response.status === 201) {
          alert('Image ajoutée avec succès !')
        } else if (response.status === 400) {
          const error = await response.json() // en fonction de la réponse de la requête la fonction affiche un message d'alerte approprié
          alert(`Erreur : ${error.message}`)
        } else if (response.status === 401) {
          alert('Non autorisé.')
        } else {
          alert('Une erreur inattendue s\'est produite.')
        }

  
      } catch (error) { console.error('There was an error:', error) }

      container.innerHTML = ''
        fetchData();
    })
  }
