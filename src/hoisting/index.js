a = 1
var a          //Esta variable se eleva (Hoisting) Javascript lo hace solo. Por eso a es = 2 aunque la inicializamos despues de asignarle el valor
console.log(a) //2


var b
b = 2
console.log(b) //2


var c
console.log(c) //undefined   //estoquiere decir que al momento de imprimir c aun no se le ha asignado el valor (No se ha asignado)
c = 3


console.log(d) //undefined   //Aqui el Hoisting se ha ejecutado, es decir, var d se posiciona por encima del console.log(d), pero la asignacion d = 4 no se ha movido de su lugar. El console.log(d) solo dice que la variable de no ha sido definida
var d
d = 4


nameOfDog('Buddy')

function nameOfDog(name){  //Las funciones se guardan en memoria antes que cualquier otra cosa. Cuando ejecutamos nameOfDog() antes de las lineas de codigo de la funcion, ya JavaScript ha guardado la funcion y sabe exactamente que hacer al ejecutarla.
    console.log(name)
}