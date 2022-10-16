import { Api } from "./api.js"

const register = document.getElementById('register')
register.addEventListener('click',(a)=>{
    a.preventDefault()
    registrar()
})
async function registrar(){
    const nome = document.getElementById('nome').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const discordUser = document.getElementById('discordUser').value
    const obj ={
            nome:nome,
            username:username,
            password:password,
            discord:discordUser
        }
    const user = await Api.reqBody(obj,'register')
    console.log(user)
    localStorage.setItem('token',user._id)
}