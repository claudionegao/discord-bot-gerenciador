import { Api } from "./api.js"
const token = localStorage.getItem('token')
if (token != undefined) {
    location.replace('../index.html')
}
const nome = document.getElementById('nome')
const username = document.getElementById('username')
const password = document.getElementById('password')
const discord = document.getElementById('discord')
const userPic = document.getElementById('userPic')
const cadastrar = document.getElementById('cadastro')
const voltar = document.getElementById('voltar')
voltar.addEventListener('click',(a)=>{
    a.preventDefault()
    location.replace('../index.html')
})
cadastrar.addEventListener('click',(a)=>{
    a.preventDefault()
    registrar()
})
async function registrar(){
    const obj = {
        nome:nome.value,
        username:username.value,
        password:password.value,
        discord:discord.value,
        picUrl:userPic.value.replaceAll(" ",""),
        sessionValid:false,
        ficha:{
            Pontos:0,
            nome:"",
            Atributos:{
                Forca:0,
                Habilidade:0,
                Resistencia:0,
                Armadura:0,
                PoderDeFogo:0,
            },
            Hp:0,
            Mp:0,
            EXP:5,
            Vantagens:[],
            Desvantagens:[],
            Magias:[],
            Inventario:[],
        },
        formasAlternativas:[],
        familiares:[]
    }
    const resp = await Api.reqPostBody(obj,'register')
    if (!resp._id) {
        alert('Cadastro Concluido com Sucesso')
        console.log(resp)
        localStorage.setItem('token',resp._id)
        location.replace('../index.html')
    }
    else{
        alert(resp.err)
    }
}