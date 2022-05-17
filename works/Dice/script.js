const dice = () => {
    const countElement = document.querySelector('#status')
    const diceMission = document.getElementById("dice").value
    const words = diceMission.split('d');
    if (words.length === 2 && 
        Number.isInteger(Number(words[0])) && 
        Number.isInteger(Number(words[1]))) {
        let count = 0
        for (i = 0; i < Number(words[0]); i++) {
            count += Math.ceil(Math.random() * Number(words[1]))
        }
        countElement.innerText = String(count)
        return
    }
    countElement.innerText = '$d%の形式で入力してください'
}