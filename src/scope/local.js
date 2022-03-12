const helloWorld = () => {
    const hello = 'Hello World'
    console.log(hello);
}

helloWorld()


console.log(hello)





var scope = 'i am global'

const functionScope = () => {
    var scope = 'i am just a local'
    const func = () => {
        return scope
    }
    console.log(func())
}

functionScope()




//_____________________________________________________________

if(true){
    let a = 7
    console.log(a)
}
console.log(a + '0 Veces')




let x = 3

function nun (){
    console.log(x)
}

nun()