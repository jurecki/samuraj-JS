// const ul = document.querySelector('ul');
// const items = document.querySelectorAll('li button');


// const removeTask = (e) => {

//     // e.target.parentNode.remove();

//     const index = e.target.dataset.key;
//     // console.log(index)
//     document.querySelector(`[data-key="${index}"]`).remove()
// }

// items.forEach(item => {
//     item.addEventListener('click', removeTask)
// })

const input = document.querySelector('input.search');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');
const taskName = document.querySelector('input.addElement')
const form = document.querySelector('form')
let removeBtn = document.querySelectorAll('button.remove')
let taskNumber = document.querySelector('h1 span')
let allTasks = [...liElements];

taskNumber.textContent = document.querySelectorAll('li').length;


const searchTask = (e) => {

    let tasks = allTasks;

    const searchText = e.target.value.toLowerCase();
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))

    ul.innerHTML = "";
    console.log(tasks)
    tasks.forEach(item => ul.appendChild(item));


}


const addElement = (e) => {
    e.preventDefault();

    const titleTask = taskName.value
    const li = document.createElement('li');

    li.innerHTML = `${titleTask}<button class="remove">Usuń</button>`;
    console.log(li)
    allTasks.push(li);

    allTasks.forEach(item => ul.appendChild(item));
    taskName.value = "";
    removeBtn = document.querySelectorAll('button.remove')
    console.log('removebtn', removeBtn);

    removeBtn.forEach(btn => btn.addEventListener('click', removeElement));
    taskNumber.textContent = document.querySelectorAll('li').length;
}

function removeElement() {
    console.log('removeBtn')
    const li = this.parentElement;

    allTasks = allTasks.filter(item => item !== li);

    li.remove()

    taskNumber.textContent = document.querySelectorAll('li').length;

}

form.addEventListener('submit', addElement)

input.addEventListener('input', searchTask)

removeBtn.forEach(btn => btn.addEventListener('click', removeElement));