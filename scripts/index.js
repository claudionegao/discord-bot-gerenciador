import { Api } from "./api.js";
let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
const text = document.getElementsByClassName('span')[0]
  if (touchendX < touchstartX) text.textContent = 'swiped left!'
  if (touchendX > touchstartX) text.textContent = 'swiped right!'
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})