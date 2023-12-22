var swiper = new Swiper(".mySwiper", {
   speed: 400,
   parallax: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

const audio = new Audio('./assets/audio/추격전_bgm.wav');


document.querySelector('.bgm').addEventListener('click', function () {
   audio.play();
   audio.loop = true;
})