const swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   // loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   slideActiveClass: 'swiper-slide-active'
});


const audio = new Audio('./assets/audio/ending_bgm.wav');
const body = document.querySelector('body');
const crash = document.querySelector('.crash');
const tom = document.querySelector('.tom');
const jerry = document.querySelector('.jerry');
const endingBtn = document.querySelector('.ending-btn');
const ending = document.querySelector('.ending');
const next = document.querySelector('.swiper-button-next');


let cnt = 0;
next.addEventListener('click', function (e) {

   cnt += 1;
   if (cnt === 6) {
      tom.src = './assets/img/crash.png';

      setTimeout(() => {
         tom.src = './assets/img/tom2.gif'
      }, 1500);

      setTimeout(() => {
         tom.src = './assets/img/tom.gif';
      }, 5000)
   }
})


endingBtn.addEventListener('click', function () {

   endingBtn.style.display = 'none';
   tom.src = ''

   setTimeout(() => {
      tom.src = './assets/img/총1.png'
   }, 1000);

   setTimeout(() => {
      jerry.src = './assets/img/넘어짐2.png'
   }, 2000);

   setTimeout(() => {
      tom.src = './assets/img/총2.png'
      audio.play();
   }, 3000);

   setTimeout(() => {
      ending.style.opacity = 1;
      ending.style.zIndex = 50;
      body.style.filter = 'grayscale(100%)'
   }, 4000);

   setTimeout(() => {
      ending.src = './assets/img/ending3.png'
   }, 7000);

   setTimeout(() => {
      ending.src = './assets/img/ending2.png'
   }, 9000);
})