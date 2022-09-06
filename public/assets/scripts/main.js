// Swiper.js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.1,
  centeredSlides: true,
  spaceBetween: 30,
  speed: 1000,
  autoplay: false,
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    769: {
      slidesPerView: 1.3,
      spaceBetween: 50,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

// サービスブロックのアイテムオープン

const servicesItem = document.getElementsByClassName("js-services__item");
console.log(servicesItem);
for (let i = 0; i < servicesItem.length; i++) {
  servicesItem[i].addEventListener("click", function () {
    console.log(servicesItem[i].classList.contains("open"));
    servicesItem[i].classList.contains("open")
      ? servicesItem[i].classList.remove("open")
      : servicesItem[i].classList.add("open");

    servicesItem[i].scrollIntoView();
  });
}
