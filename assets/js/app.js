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



//Form
const myForm = document.querySelector("#myForm");
const send = document.querySelector("#send");

send.addEventListener("click", event => {
  event.preventDefault();

  if (validateForm(myForm)) {
    const data = {
      name: myForm.elements.email.value,
    };

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', ' https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(data));
    xhr.addEventListener('load', () => {
      if (xhr.response.status) {
        console.log('все ок');
      }
    });
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






// Слайдер


class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    position = 0,
    slidersToShow = 3,
    responsive = [],
  }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.sliders = document.querySelector(wrap).children;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.slidersToShow = slidersToShow;

    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidersToShow),
    };
    this.responsive = responsive;
  }

  init() {
    // console.log(this.sliders);
    this.addGloClass();
    this.addstyle();

    if (this.prev && this.next) {
      this.controlSlider();
    }
    if (this.responsive) {
      this.responsiveInit();
    }

  }

  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');

    for (const item of this.sliders) {
      item.classList.add('glo-slider__item');
    }
  }

  addstyle() {
    const style = document.createElement('style');
    style.id = 'sliderCarousel-style';

    style.textContent = `

      .glo-slider__wrap {
      display: flex;
      transition: transform 0.5s;
      will-change: transform;
      width: 100%;
    }
    .glo-slider__item {
      flex:0 0 ${this.options.widthSlide}% !important;
      margin auto 0 !important;
    }

`


    document.head.appendChild(style);
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      console.log(this.options.position);
      if (this.options.position < 0) {
        this.options.position = this.sliders.length - this.slidersToShow;
      }
      this.wrap.style.transform = `translateX(-${(this.options.position * this.options.widthSlide)}%)`;
    }
  }

  nextSlider() {
    if (this.options.infinity || this.options.position < this.sliders.length - this.slidersToShow) {
      ++this.options.position;
      console.log(this.options.position);
      if (this.options.position > this.sliders.length - this.slidersToShow) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${(this.options.position * this.options.widthSlide)}%)`;

    }
  }

  responsiveInit() {
    const slidersToShowDerault = this.slidersToShow;
    const allResponsive = this.responsive.map(item => item.breakpoint);
    const maxResponse = Math.max(...allResponsive);

    const checkResponsive = () => {
      const widthWindow = document.documentElement.clientWidth;

      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponsive.length; i++) {
          if (widthWindow < allResponsive[i]) {
            this.slidersToShow = this.responsive[i].slidersToShow;
            this.options.widthSlide = Math.floor(100 / this.slidersToShow);
            this.addstyle();
          }
        }
      };
    };

    checkResponsive();
    window.addEventListener('resize', checkResponsive);

  }

}