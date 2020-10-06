const div = document.createElement('div');
document.body.appendChild(div);



function addToCounter(start = 0) {
    let counter = start;

    function add() {
        counter++;
        div.textContent = "";
        div.textContent += counter;
    }

    return add

}

const counter = addToCounter()


window.addEventListener('click', counter)