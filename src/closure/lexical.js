const buildCount = (i) => {

    let count = i
    const displayCount = () => {
        console.log(count++)
    }

    return displayCount
}

const myCount = buildCount(0)

myCount() //1
myCount() //2
myCount() //3


const myOtherCount = buildCount(10)

myOtherCount() //10
myOtherCount() //11
myOtherCount() //12


//____Esta funcion siempre dara el mismo resultado, pues no existe el closure que recuerde el resultado de su ultima llamada y cambio de variables_______________________________________

const construirContador = (i) => {
    var contador = i
    contador++
    return console.log(contador);
}

construirContador(1) //2
construirContador(1) //2
construirContador(1) //2
