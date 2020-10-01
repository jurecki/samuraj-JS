const btn = document.querySelector('button');
const div = document.querySelector('div')
const names = ['Jagienka', 'Dobrawa', 'Asia', 'Marysia', 'Anastazja']
const prefix = ['Wydaje mi się,', 'Mam wrazenie', 'Szczerze uwazam', 'Na 100% twierdzę']

const nameGenetator = () => {

    const randomName = Math.floor(Math.random() * names.length)
    const randomPrefix = Math.floor(Math.random() * prefix.length)

    div.textContent = `${prefix[randomPrefix]} ze, najfajniejsze imię to: ${names[randomName]}`
}

btn.addEventListener('click', nameGenetator)