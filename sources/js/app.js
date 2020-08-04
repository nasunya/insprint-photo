// const accordElement = document.querySelector('.answer');
// const accordLink = document.querySelectorAll('.answer__acco-item');

// let accoLinkLength = accordLink.length;

// accordElement.addEventListener('click', function (e) {
//   for (let i = 0; i < accoLinkLength; i++) {
//     accordLink[i].classList.remove('answer__acco-item--active');

//   }
// });

// for (let i = 0; i < accoLinkLength; i++) {
//   accordLink[i].addEventListener('click', function(e) {
//       e.preventDefault();
//       e.stopPropagation();

//       if (accordLink [i].classList.contains('answer__acco-item--active')){
//         accordLink [i].classList.remove('answer__acco-item--active');

//       } else {
//           for (let i=0; i < accoLinkLength; i++) {
//             accordLink[i].classList.remove('answer__acco-item--active'); 
//           }
//           accordLink[i].classList.add('answer__acco-item--active');

//       }
//   })

// }