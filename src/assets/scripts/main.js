/**
 * Import dependencies from node_modules
 * see commented examples below
 */

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,

  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  touchRatio: 1,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
  },
});

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
  const clickElement = document.querySelector(".click");
  const listaElement = document.querySelector(".lista");
  const chevronIcon = document.querySelector(".chevron");

  clickElement.addEventListener("click", () => {
    listaElement.classList.toggle("open");
    chevronIcon.classList.toggle("open-chevron"); // Rota el chevron
  });
})();
