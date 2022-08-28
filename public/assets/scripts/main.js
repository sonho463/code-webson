

// Swiper.js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.3,
	centeredSlides: true,
  spaceBetween: 50,
  speed: 1000,
  autoplay: false,
  // effect: "fade",
  // breakpoints: {
  // 	768: {
  // 		slidesPerView: 3.5,
  // 		// spaceBetween: 020
  // 	},
  // },

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
