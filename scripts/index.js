import { Api } from "./api.js";
const token = localStorage.getItem('token')
if (token != null) {
    location.replace("./pages/home.html")
}
const username = document.getElementById('username')
const password = document.getElementById('password')
const loginBtn = document.getElementById('login')
const registerBtn = document.getElementById('cadastro')
registerBtn.addEventListener('click',(a)=>{
    a.preventDefault()
    location.replace('./pages/registro.html')
})
loginBtn.addEventListener('click',(a)=>{
    a.preventDefault()
    login(username.value,password.value)
})
async function login(username,password) {
    const body = {
        username:username,
        password:password
    }
    const resp = await Api.reqBody(body,'login')
    if (resp.err == undefined) {
        localStorage.setItem('token',resp._id)
        console.log(resp.err)
        location.replace("./pages/home.html")
    }
    else{
        alert(resp.err)
    }
}