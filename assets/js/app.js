// accordion

let acc = document.getElementsByClassName("answer__acco-question")
let i

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function () {
    this.classList.toggle("answer__active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });

};



const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

const minRight = 0;
const maxRight = 700;
const step = 33.3;
let currentRight = 0; //слайде при загрузке стр всегда вначале

items.style.right = currentRight;


right.addEventListener("click", function () {
  event.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step; //currentRight      +step
    items.style.right = currentRight + "%";
  } else {
    currentRight = 0 // постоянная прокрутка
    items.style.right = 0 //
  };
});
left.addEventListener("click", function () {
  event.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "%";
  } else {
    currentRight = maxRight;
    items.style.right = currentRight + "%";
  };
});