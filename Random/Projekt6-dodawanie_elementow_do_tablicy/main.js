const names = [];

const btn = document.querySelector('button');
const input = document.querySelector('input');
const div = document.querySelector('div')

const addName = (e) => {
    e.preventDefault()
    const name = input.value;

    if (input.value.length) {
        for (let item of names) {
            if (item === name) {
                return alert('To imię juz istnieje w bazie')
            }

        }
        names.push(name);
        input.value = "";
        div.textContent += name + ", "
    }


    // console.log(names)

}

btn.addEventListener('click', addName)