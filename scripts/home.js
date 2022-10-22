const logoutBtn = document.getElementById('logout')
const token = localStorage.getItem('token')
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