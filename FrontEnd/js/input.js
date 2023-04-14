
// ajout d'un event dès le click sur le btn "ajout photo" alors l'input type file s'affiche correctement 

document.getElementById("Ajout-photo").addEventListener("click", function(e){
    e.preventDefault()
    document.getElementById("fichier-input").click()
})


// function pour afficher l'image selectionné dans l'input 

export function afficherImage() {
    const input = document.getElementById("fichier-input");
    const preview = document.getElementById("preview"); //élément HTML de type "img" qui affichera l'image sélectionnée par l'utilisateur

    input.addEventListener("change", function () { 
      const file = input.files[0]; // extrait le premier fichier sélectionné par l'utilisateur et le stocke dans la variable "file"
      const reader = new FileReader();  // crée une nouvelle instance de l'objet FileReader, qui est utilisé pour lire le contenu du fichier sélectionné

      reader.addEventListener("load", function () { //ajoute un autre eventlistener à l'objet FileReader. Cet événement sera déclenché lorsque le contenu du fichier aura été entièrement lu
        preview.src = reader.result; // définit l'attribut "src" de l'élément "preview", cela permet d'afficher l'image sélectionnée sur la page web
        preview.style.display = null;
      }, false);

      if (file) {
        reader.readAsDataURL(file); // Cette méthode lit le fichier en tant qu'URL de données, ce qui permet de l'afficher sur la page web.
      }
    }, false);
  }

  afficherImage();

  //  

  export const imgInput = document.querySelector('#fichier-input')
  export const titleInput = document.querySelector('#title')
  export const categoryInput = document.querySelector('#category')
  export const validBtn = document.querySelector('#btn-valid')

 export function checkFormFields(){
  if (imgInput.value.trim() !== '' && titleInput.value.trim() !== '' && categoryInput.value.trim() !== '0'){ //Cette ligne vérifie si les champs de formulaire requis (image, titre et catégorie) ont été remplis correctement
    //trim() est utilisée pour supprimer les espaces blancs au début et à la fin des chaînes de caractères
      validBtn.style.backgroundColor = '#1D6154' 
      return true // Si les champs sont remplis correctement, la couleur de fond du bouton de validation est modifiée en vert et la fonction renvoie true.
  } else {
      validBtn.style.backgroundColor = '#A7A7A7'
      return false
  }
}

// la fonction est appelée lorsque l'utilisateur remplit chaque champs du formulaire

  imgInput.addEventListener('input', checkFormFields);
  titleInput.addEventListener('input', checkFormFields);
  categoryInput.addEventListener('input', checkFormFields);

