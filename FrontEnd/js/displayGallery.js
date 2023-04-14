import  { token } from "./affichagebtnmodifier.js"

export function fetchData(categoryIds) {  // fonction pour afficher les travaux de l'architecte via l'api en utilisant la methode fetch 
    fetch("http://localhost:5678/api/works") 
      .then((response) => response.json()) // conversion en JSON
      .then((data) => {
        console.log(data);
        const gallery = document.getElementById("photo");
        gallery.innerHTML = "";
  
        data.forEach((element) => {
          // l'instruction suivante ne sera exécutée que si categoryIds est vide ou si l'identifiant de catégorie de l'élément element est inclus dans le tableau categoryIds
          if (!categoryIds || categoryIds.includes(element.categoryId)) { 
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            const fg = document.createElement("figcaption");

            img.src = element.imageUrl;
            img.crossOrigin = "anonymous"; // j'ai mis anonymous pour que l'image soit publique pour tout le monde
  
            
            fg.textContent = element.title;
            figure.appendChild(img);
            figure.appendChild(fg);
            gallery.appendChild(figure);
          }
        });
      });
  }

// affichage des images via l'api pour la modal

fetch("http://localhost:5678/api/works") // récupérer les données depuis l'API
.then((response) => response.json()) // conversion en format JSON
.then((data) => {
  console.log(data);
  const gallery = document.getElementById("container-img");

// creation des element html 

  data.forEach((element) => { // méthode forEach pour parcourir chaque élément de l'objet JSON renvoyé
      const figure = document.createElement("figure"); // création de la balise <figure>
      figure.id = element.id //  ajout d'un id à la balise figure en utilisant l'id de l'élément JSON.
      const btnIcon = document.createElement('button'); // <button>
      const container = document.getElementById('photo')
      const icon = document.createElement('i'); // <i>
      const edit = document.createElement('p'); // <p>
      const img = document.createElement("img"); // <img>
      
      img.src = element.imageUrl;
      img.crossOrigin = "anonymous";
      btnIcon.className = ('btn-delete'); // ajout d'une classe dans <button>
      icon.className = ("fa-solid fa-trash-can"); // ajout d'une classe dans <i>
      edit.innerText = 'éditer'; // ajout d'un text a la balise <p>
      
      gallery.appendChild(figure); // la balise div de son id #gallery a pour enfant la balise <figure> et aisin de suite ...
      figure.appendChild(btnIcon);
      btnIcon.appendChild(icon);
      figure.appendChild(img);
      figure.appendChild(edit);
      console.log(element.id);
      // ajout de l'evenement au moment du click sur le bouton supprimer et la function pour delete une img

      btnIcon.addEventListener('click', function(e) { // ajoute un eventlistener au bouton supprimer qui appelle la fonction deleteImg lorsqu'il est cliqué
        e.preventDefault();
        console.log(e.target)
        deleteImg(figure)

        container.innerHTML = '' // met à jour l'affichage des images en appelant la fonction fetchData
        fetchData();
      })
  });
});


// function pour delete une image
function deleteImg(figure){
  const id = figure.id
  fetch("http://localhost:5678/api/works/"+ id,{
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => figure.remove())
    
}

