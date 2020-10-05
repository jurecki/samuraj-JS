// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1...', 'tekst2...', 'tekst3...']


// Implementacja

let activeletter = -15;
let activeText = 0;

const addLetter = () => {
    // Użyj w środku setTimeout
    if (activeletter >= 0) {
        spnText.textContent += txt[activeText][activeletter];
    }

    activeletter++;
    if (activeletter === txt[activeText].length) {

        activeText++;
        if (activeText === txt.length) return
        return setTimeout(() => {
            activeletter = -15;
            spnText.textContent = "";
            addLetter();
        }, 2000)

    };


    setTimeout(addLetter, 100);




}


addLetter(); //pierwsze wywołanie


// Animacja kursora(zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);