var a = 'Hello'

function hello(){
    let b = 'Hello World'
    const c = 'Hello World!'
    if(true){
        let d = 'Hello World!!'
        debugger
    }
}


hello()







const moneyBox2 = () => {
    debugger
    var saveCoins = 0
    const countCoins = (coins) => {
        debugger
        saveCoins += coins
        console.log(`moneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox2()

myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)