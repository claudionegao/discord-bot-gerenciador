const logoutBtn = document.getElementById('logout')
const token = localStorage.getItem('token')
const menu = document.getElementById('menu')
if (token==null) {
    location.replace('../index.html')
}
logoutBtn.addEventListener('click',(a) =>{
    a.preventDefault()
    logout()
})
function logout() {
    localStorage.removeItem('token')
    location.replace('../index.html')
}
menu.addEventListener('click',()=>{
    const aside = menu.closest('aside')
    if (aside.classList.contains("mobile")){
        aside.classList.remove('mobile')
    }
    else{
        aside.classList.add('mobile')
    }
})