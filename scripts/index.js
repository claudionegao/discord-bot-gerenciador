import { Api } from "./api.js";
const loginBtn = document.getElementsByTagName('button')[0]
loginBtn.addEventListener('click',(a)=>{
    a.preventDefault()
    login()
})
 async function login() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const obj = {
        username:username,
        password:password
    }
    const resp = await Api.reqBody(obj,'login')
    console.log(resp)
}