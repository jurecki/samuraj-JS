const slideList = [{
    img: "images/img1.jpg",
    text: 'Pierwszy tekst',
},
{
    img: "images/img2.jpg",
    text: 'Drugi tekst',
},
{
    img: "images/img3.jpg",
    text: 'Trzeci tekst',
}];

//Interfejs
const time = 2000;
let active = 0;

//implementacja

const dots = [...document.querySelectorAll('.dots span')]

const changeDot = () => {
    console.log('zmiana kropki')
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'))
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = (param) => {
    active++

    if (active === slideList.length) active = 0;

    document.querySelector('img').setAttribute('src', slideList[active].img)
    document.querySelector('h1').textContent = slideList[active].text;

    changeDot();
}

let indexSlide = setInterval(changeSlide, time)


window.addEventListener('keydown', function (e) {

    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexSlide);
        e.keyCode == 37 ? active-- : active++;
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }

        document.querySelector('img').setAttribute('src', slideList[active].img)
        document.querySelector('h1').textContent = slideList[active].text;

        changeDot();

        indexSlide = setInterval(changeSlide, time)
    }
})