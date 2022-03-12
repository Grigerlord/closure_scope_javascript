const anotherFuntion = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}

anotherFuntion()

//__________________________________

const anotherFuntion2 = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
}

anotherFuntion2()

//Podemos crear closures mal escritos. Por ejemplo, en la primera funcion estamos usando var, pero para que sea correcto el resultado debemos usar let