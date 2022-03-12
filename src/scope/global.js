var hello = 'Hello' // Si asigno nuevas variables, lo permite en la funcion anotherFunction
let world = 'Hello World' // Si asigno nuevas variables, nolo permite en la funcion anotherFunction
const helloWorld = 'Hello World'

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld);
}

anotherFunction()


//_________________________________________________________
//Mala Practica no usar la palabra reservada para las variables


const helloWorld2 = () => {
    globalVar = 'im global'
}

helloWorld2()
console.log(globalVar)


//_________________________________________________________
//Mala Practica reasignar las variables de esta forma


const anotherFunction2 = () => {
    var localVar = globalVar = 'Im Global'
}

anotherFunction2()
console.log(globalVar)




//__________________________________________________________

let a = 7
{
    console.log(a);
}
