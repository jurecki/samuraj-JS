let advices = ['walcz', 'przemyś to jeszcze raz'];

const btnAdd = document.querySelector('.add');
const input = document.querySelector('input');
const btnClean = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnshowOptions = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');

const ul = document.createElement('ul');
document.body.appendChild(ul);

const addPossibility = (e) => {
    e.preventDefault();

    const value = input.value;
    if (value.length !== 0) {
        advices.push(value);
        alert(`Mozliwość ${value} została dodana `)
    }

}

const showAdvice = (e) => {
    e.preventDefault();
    ul.textContent = "";
    const index = Math.floor(Math.random() * advices.length);

    h1.textContent = advices[index]
}

const showOptions = (e) => {
    e.preventDefault();
    h1.textContent = "";
    ul.textContent = "";

    advices.forEach(advice => {
        const li = document.createElement('li');
        ul.appendChild(li)
        li.textContent = advice;
    })
}

const cleanAdvices = (e) => {
    e.preventDefault()
    advices = [];
    alert('Tablica wyczyszczona')
    h1.textContent = "";
    ul.textContent = "";
}

btnAdd.addEventListener('click', addPossibility);
btnShowAdvice.addEventListener('click', showAdvice);
btnshowOptions.addEventListener('click', showOptions);
btnClean.addEventListener('click', cleanAdvices)