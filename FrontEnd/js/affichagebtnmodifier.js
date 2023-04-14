
// faire appel au token pour le display des bouttons 

export const token = localStorage.getItem("token")
export const loginBtn = document.querySelector(".boutton-login")
export const logoutBtn = document.querySelector(".boutton-logout")
export const modifBtn = document.querySelector(".boutton-modifier")
export const modifBtn2 = document.querySelector(".boutton-modifier2")
export const bandeModif = document.querySelector(".bande-modif")
export const btnmodifier = document.querySelector(".btnmodifier")

if(token){
    loginBtn.style.display = ('none')
    logoutBtn.style.display = null
    modifBtn.style.display = null
    modifBtn2.style.display = null
    bandeModif.style.display = null
    btnmodifier.style.display = null
} else{
    logoutBtn.classList.add('none')
    modifBtn.style.display = ('none')
    modifBtn2.style.display = ('none')
    bandeModif.style.display = ('none')
    btnmodifier.style.display = ('none')
}

logoutBtn.addEventListener('click', () => {
    window.localStorage.removeItem("token")
    logoutBtn.classList.add('none')
    window.location.reload()
})
