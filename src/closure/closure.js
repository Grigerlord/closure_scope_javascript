const moneyBox = () => {
    let saveCoins = 0
    return (nun) => {
        saveCoins += nun
        console.log(`moneyBox: $${saveCoins}`)
    }
}

let ahoraSiEsVerdad = moneyBox()

ahoraSiEsVerdad(1) //1
ahoraSiEsVerdad(5) //6
ahoraSiEsVerdad(20) //26


//________________________________________________________
const moneyBox2 = () => {
    var saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`moneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox2()

myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)

//________________________________________________________

var saveCoins = 0;

const moneyBox3 = (coins) => {
    saveCoins += coins;
    console.log(saveCoins);
}

moneyBox3(5); //5
moneyBox3(10); //15

//________________________________________________________

const miCasa = () => {
    let muebles = 0
    return (nuevoMueble) => {
        muebles += nuevoMueble
        console.log(`En la casa hay ${muebles} muebles`)
    }
}

let agregarMueble = miCasa()

agregarMueble(5)
agregarMueble(25)


//________________________________________________________


function saludar(){
    let saludo1 = 'Hola'
    let saludo2 = ' Mundo'

    return (signo) => {
        let saludo3 = saludo1 + saludo2 + signo
        console.log(saludo3)
    }

}

let recibirSaludo = saludar()

recibirSaludo('!!')