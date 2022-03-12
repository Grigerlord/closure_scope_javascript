
const person = () => {

    var saveName = 'Name'

    return {
        getName: () => {
            return saveName
        },
        setName: (name) => {
            saveName = name
        }
    }

}

newPerson = person()
console.log(person().getName()) //Name   //pude haber usado newPerson tambien
newPerson.setName('Griger')
console.log(newPerson.getName()) //Griger