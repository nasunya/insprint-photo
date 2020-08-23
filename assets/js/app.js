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

// // Слайдер
// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const items = document.querySelector("#items");
// const elements = document.querySelectorAll('.photo__item');
// const size = elements.length - 3;
// const maxRight = size * 33.3;


// const minRight = 0;
// const step = 33.3;
// let currentRight = 0; //слайде при загрузке стр всегда вначале

// items.style.right = currentRight;


// right.addEventListener("click", function () {
//   event.preventDefault();
//   if (currentRight < maxRight) {
//     currentRight += step; //currentRight      +step
//     items.style.right = currentRight + "%";
//   } else {
//     currentRight = 0 // постоянная прокрутка
//     items.style.right = 0
//   };
// });
// left.addEventListener("click", function () {
//   event.preventDefault();
//   if (currentRight > minRight) {
//     currentRight -= step;
//     items.style.right = currentRight + "%";
//   } else {
//     currentRight = maxRight;
//     items.style.right = currentRight + "%";
//   };
// });


//Video
const video = document.querySelector(".works__video-play");
const videoBtn = document.querySelector(".works__play-btn");

video.addEventListener("click", function () {
  if (video.paused) {
    videoBtn.style.display = 'none'
    video.removeAttribute("poster", "assets/img/bg-video.jpg");
  } else {
    videoBtn.style.display = 'block'
    video.setAttribute("poster", "assets/img/bg-video.jpg");
  }
}, false);

videoBtn.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    videoBtn.style.display = 'none';

  } else {
    video.pause();
    videoBtn.style.display = 'block';

  }
}, false);

// video.addEventListener('click', function () {
//   if (video.paused) {
//     video.removeAttribute("poster");

//   } else {
//     video.setAttribute("poster", "assets/img/bg-video.jpg");

//   }
// }, false);


//works 


const greyButtons = document.querySelectorAll(".works__points--grey");

for (const button of greyButtons) {
  button.addEventListener('click', function () {
    greyButtons.forEach(i => i.classList.remove('works__points--active'));
    this.classList.toggle('works__points--active');

  });
};


const photogBtn = document.querySelector(".works__point-photog");
const amateurBtn = document.querySelector(".works__point-amateur");
const amateurBlock = document.querySelector(".works__amateur");
const photogBlock = document.querySelector(".works__photog");



amateurBtn.addEventListener("click", function () {
  amateurBlock.style.display = "flex";
  photogBlock.style.display = "none";
});


photogBtn.addEventListener("click", function () {
  amateurBtn.classList.remove('works__points-active', 'works__active-amateur');
  photogBlock.style.display = "flex";
  amateurBlock.style.display = "none";
});


const jsMenu = document.querySelector(".burger__btn")
const nav = document.querySelector(".burger__menu")


jsMenu.onclick = function () {
  this.classList.toggle('burger__opened');
  this.classList.contains('burger__opened');
  nav.classList.toggle("burger__menu--active");
};



const myForm = document.querySelector("#myForm");
const send = document.querySelector("#send");

send.addEventListener("click", event => {
  event.preventDefault();

  if (validateForm(myForm)) {
    console.log('все ок')
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.email)) {
    valid = false;
  }

  return valid;
};


function validateField(field) {
  if (!field.checkValidity()) {
    field.nextElementSibling.textContent = field.validationMessage;

    return false;
  } else {
    field.nextElementSibling.textContent = "";

    return true;
  }

}