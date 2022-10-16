import { Api } from "./api.js";
const loginBtn = document.getElementsByTagName('button')[0]
loginBtn.addEventListener('click',(a)=>{
    a.preventDefault()
    login()
})
function login() {
    const obj = {
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
    }
    console.log(JSON.parse(Api.reqBody(obj,login)))
}