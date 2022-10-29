import { menuSwipe } from "./home.js";
export class swipe{
    
    static checkDirection(touchstartX,touchendX) {
        const text = document.getElementsByTagName('span')[0]
        if (touchendX < touchstartX && touchendX != touchstartX) {return false}
        if (touchendX > touchstartX && touchendX != touchstartX) {return true}
    }
    
    static init(element){
        let touchstartX = 0
        let touchendX = 0
        element.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
        })
        
        element.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        const retorno = swipe.checkDirection(touchstartX,touchendX)
        if (retorno && retorno != undefined) {
            const aside = menu.closest('aside')
            aside.classList.remove('mobile')
        } 
        else{
            const aside = menu.closest('aside')
            aside.classList.add('mobile')
        }
        })
    }
    
}