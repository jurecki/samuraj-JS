const square = document.createElement("div");

document.body.appendChild(square);
let grow = true;
let size = 100;
square.style.width = size + "px";
square.style.height = size + "px";

window.addEventListener("scroll", function () {
  if (size < window.innerWidth / 2 && grow) {
    size += 10;
    square.style.width = size + "px";
    square.style.height = size + "px";
  } else {
    size -= 10;
    square.style.width = size + "px";
    square.style.height = size + "px";
  }

  if (size >= window.innerWidth / 2) grow = false;
  else if (size <= 3) grow = true;
});
