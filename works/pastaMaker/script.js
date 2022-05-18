let spaghettiCount = 0n
let items = [0,0,0,0,0,0,0,0,0,0]
let itemsCost = [10,50,200,600,2000,10000,70000,500000,4000000,36000000]
window.onload = function(){
    updateS()
    setInterval(unearnedIncome,1000)
    setInterval(cursorIncome,5000)
}
//setInterval(unearnedIncome,1000)
const makeSpaghetti = () => {
    spaghettiCount++
    updateS()
}
const buyItems = (option) => {
    if(!(typeof option === "number")) {
        return
    }
    if(spaghettiCount < itemsCost[option]) {
        return
    }
    if(isNaN(items[option])) items[option] = 1
    else items[option]++
    spaghettiCount -= BigInt(itemsCost[option])
    itemsCost[option] = Math.ceil(itemsCost[option]
        * (1.05 + 0.005 * option))
    updateS()
    updateI(option)
}
const updateS = () => {
    const countElement = document.querySelector('#SCount')
    countElement.innerText = spaghettiCount + '$'
}
const updateI = (option) => {
    const countElementCount = document.querySelector('.item'+option)
    countElementCount.innerText = '' + items[option]
    const countElementCost = document.querySelector('.cost'+option)
    countElementCost.innerText = '' + itemsCost[option]
}
const unearnedIncome= () => {
    spaghettiCount += BigInt(items[1]) + 3n*BigInt(items[2]) + 8n*BigInt(items[3])
    + 20n*BigInt(items[4]) + 80n*BigInt(items[5]) + 480n*BigInt(items[6]) 
    + 2800n*BigInt(items[7]) + 20000n*BigInt(items[8]) + 160000n*BigInt(items[9])
    updateS()
}
const cursorIncome= () => {
    spaghettiCount += BigInt(items[0])
    updateS()
}