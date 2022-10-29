export function Aside(){
    const logoutBtn = document.getElementById('logout')
    const token = localStorage.getItem('token')
    const menu = document.getElementById('menu')
    if (token==null) {
        location.replace('../index.html')
    }
    logoutBtn.addEventListener('click',(a) =>{
        a.preventDefault()
        localStorage.removeItem('token')
        location.replace('../index.html')
    })
    const aside = menu.closest('aside')
    menu.addEventListener('click',()=>{
        if (aside.classList.contains("mobile")){
            aside.classList.remove('mobile')
        }
        else{
            aside.classList.add('mobile')
        }    
    })
}