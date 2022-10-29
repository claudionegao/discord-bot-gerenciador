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
    const resp = await Api.reqPostBody(body,'login')
    if (resp.err == undefined && resp._id != undefined) {
        localStorage.setItem('token',resp._id)
        location.replace("./pages/home.html")
    }
    else{
        alert(resp.err)
    }
}
// Get the input field
var input = document.getElementById("password");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("login").click();
  }
});