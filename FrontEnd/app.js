import { fetchData } from "./js/displayGallery.js"
import { modal1, modal2 } from "./js/modal.js"
import { afficherImage, checkFormFields, imgInput, titleInput, categoryInput } from "./js/input.js";
import { postProjet } from "./js/post-item.js";
import { token, loginBtn, logoutBtn, modifBtn, modifBtn2, bandeModif, btnmodifier } from "./js/affichagebtnmodifier.js";

fetchData()

// Filtres Btn

const bouttonAll = document.getElementById("boutton-All");
const bouttonObjet = document.getElementById("boutton-Objet");
const bouttonAppartement = document.getElementById("boutton-App");
const bouttonHotels = document.getElementById("boutton-Hotels");

bouttonAll.addEventListener("click", () => {
  fetchData([1, 2, 3]);
  bouttonAll.style.color = "white";
  bouttonAll.style.backgroundColor = "#1D6154";
  bouttonObjet.style.color = "#1D6154";
  bouttonObjet.style.backgroundColor = "white";
  bouttonAppartement.style.color = "#1D6154";
  bouttonAppartement.style.backgroundColor = "white";
  bouttonHotels.style.color = "#1D6154";
  bouttonHotels.style.backgroundColor = "white";
});

bouttonObjet.addEventListener("click", () => {
  fetchData([1]);
  bouttonAll.style.color = "#1D6154";
  bouttonAll.style.backgroundColor = "white";
  bouttonObjet.style.color = "white";
  bouttonObjet.style.backgroundColor = "#1D6154";
  bouttonAppartement.style.color = "#1D6154";
  bouttonAppartement.style.backgroundColor = "white";
  bouttonHotels.style.color = "#1D6154";
  bouttonHotels.style.backgroundColor = "white";
});

bouttonAppartement.addEventListener("click", () => {
  fetchData([2]);
  bouttonAll.style.color = "#1D6154";
  bouttonAll.style.backgroundColor = "white";
  bouttonObjet.style.color = "#1D6154";
  bouttonObjet.style.backgroundColor = "white";
  bouttonAppartement.style.color = "white";
  bouttonAppartement.style.backgroundColor = "#1D6154";
  bouttonHotels.style.color = "#1D6154";
  bouttonHotels.style.backgroundColor = "white";
});

bouttonHotels.addEventListener("click", () => {
  fetchData([3]);
  bouttonAll.style.color = "#1D6154";
  bouttonAll.style.backgroundColor = "white";
  bouttonObjet.style.color = "#1D6154";
  bouttonObjet.style.backgroundColor = "white";
  bouttonAppartement.style.color = "#1D6154";
  bouttonAppartement.style.backgroundColor = "white";
  bouttonHotels.style.color = "white";
  bouttonHotels.style.backgroundColor = "#1D6154";
});

// suppression des bouttons filtres pendant aprés le login

const displayFiltres = document.getElementById('filtresbtn')
const titreGallery = document.getElementById('titre-gallery')

if (token){
  displayFiltres.style.display = ('none')
  titreGallery.style.paddingBottom = '80px'
} else{
  displayFiltres.style.display = null
}

// display des bouttons login logout et les btn modifer ainsi que la bande noir pour le mode edition aprés la connexion 

if(token){
    loginBtn.style.display = ('none')
    logoutBtn.style.display = null
    modifBtn.style.display = null
    modifBtn2.style.display = null
    bandeModif.style.display = null
} else{
    logoutBtn.classList.add('none')
    modifBtn.style.display = ('none')
    modifBtn2.style.display = ('none')
    bandeModif.style.display = ('none')
}

logoutBtn.addEventListener('click', () => {
    window.localStorage.removeItem("token")
    logoutBtn.classList.add('none')
    window.location.reload()
})


// ajout du boutton Esc pour fermer la modal

window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    };
});

// ajout d'un event pour l'ouverture de la modal2

document.querySelector('.btn-choix-photo').addEventListener('click', () =>{
    modal1.style.display = "none"
    modal2.style.display = null
})

// evenement sur la croix pour la fermeture de la modal2

document.querySelector('.js-modal2-close').addEventListener('click', (e) =>{
    modal1.style.display = "none"
    modal2.style.display = "none"
})

// ajout d'un event pour le boutton retour de la modal2

document.querySelector('.js-modal2-return').addEventListener('click', (e) =>{
    modal1.style.display = null
    modal2.style.display = "none"
})

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // empêche la soumission du formulaire de rafraîchir la page
  });

// file input
afficherImage()
checkFormFields()

imgInput.addEventListener('input', checkFormFields);
titleInput.addEventListener('input', checkFormFields);
categoryInput.addEventListener('input', checkFormFields);

// post item
postProjet()