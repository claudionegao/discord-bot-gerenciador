import { Api } from "./api.js";
const loginBtn = document.getElementsByTagName('button')[0]
loginBtn.addEventListener('click',(a)=>{
    a.preventDefault()
    login()
})
function login() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const obj = {
        email:email,
        password:password
    }
    const resp = Api.reqBody(obj,'login')
    console.log(resp)
}