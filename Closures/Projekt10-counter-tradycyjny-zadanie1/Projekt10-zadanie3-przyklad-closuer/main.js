const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? "Mozesz kupić piwo" : "Nie mozesz kupic piwa"}`)
    }

    return showName
}



const mieszko = user('Mieszko', 20)
const jagienka = user('Jagienka', 17)

mieszko()
jagienka()
