const swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 0,
   touchRatio: 0,
   pagination: {
      el: ".swiper-pagination",
      clickable: false,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   slideActiveClass: 'swiper-slide-active',
});
const audio = new Audio('./assets/audio/ending_bgm.wav');
const body = document.querySelector('body');
const tom = document.querySelector('.tom');
const jerry = document.querySelector('.jerry');
const endingBtn = document.querySelector('.ending-btn');
const ending = document.querySelector('.ending');
const next = document.querySelector('.swiper-button-next');
let cnt = 0;


next.addEventListener('click', function () {

   cnt += 1;

   if (cnt === 6) {
      tom.src = './assets/img/crash.png';
      tom.alt = '장애물과 부딪힌 톰';
      next.style.visibility = 'hidden';

      setTimeout(() => {
         tom.src = './assets/img/tom2.gif'
         tom.alt = '찌그러진 톰이 뛰어가는 모습'
      }, 1500);
      setTimeout(() => next.style.visibility = 'visible', 2000);
   }

   if (cnt === 8) {
      tom.src = './assets/img/tom.gif';
      tom.alt = '톰이 뛰어가는 모습';
   }
})


endingBtn.addEventListener('click', function () {

   next.style.visibility = 'hidden';
   endingBtn.style.display = 'none';
   tom.src = '';
   tom.alt = '';

   setTimeout(() => {
      tom.src = './assets/img/총1.png'
      tom.alt = '총을 집어든 톰'
   }, 1000);
   setTimeout(() => {
      jerry.src = './assets/img/넘어짐2.png'
      jerry.alt = '넘어진 채로 뒤돌아보는 제리'
   }, 2000);
   setTimeout(() => {
      tom.src = './assets/img/총2.png';
      tom.alt = '제리를 총으로 조준하는 톰';
      audio.play();
   }, 3000);
   setTimeout(() => {
      ending.style.opacity = 1;
      ending.style.zIndex = 50;
      body.style.filter = 'grayscale(100%)';
   }, 4000);
   setTimeout(() => {
      ending.src = './assets/img/범쌤.png'
      ending.alt = '범쌤 로고'
   }, 7000);
   setTimeout(() => {
      ending.src = './assets/img/ending2.png'
      ending.alt = '톰과 제리 로고'
      ending.title = '다시 보기'
      ending.classList.add('reload');
   }, 11000);
})

ending.addEventListener('click', function (e) {
   if (e.target.classList.contains('reload')) location.reload();
})