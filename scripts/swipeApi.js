export class swipe{
    static touchstartX = 0
    static touchendX = 0
        
    static checkDirection() {
    const text = document.getElementsByTagName('span')[0]
    if (touchendX < touchstartX) console.log('swiped left!')
    if (touchendX > touchstartX) console.log('swiped right!')
    }

    static init(){
        document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
        })
        
        document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
        })
    }
    
}