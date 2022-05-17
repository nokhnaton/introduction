let count = 0
const fire = () => {
  if(Math.random()*(6 - count) < 1){
    const countElement = document.querySelector('#status')
    countElement.innerText = 'you died!'
  }
  count++
}
const reload = () => {
    count = 0
    const countElement = document.querySelector('#status')
    countElement.innerText = 'Not dead yet...'
  }