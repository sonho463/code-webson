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
  const button = servicesItem[i].querySelector(".js-services-button");
  const buttonText = servicesItem[i].querySelector(".js-services-button__text");
  button.addEventListener("click", function () {
    console.log(servicesItem[i].classList.contains("open"));

    if (servicesItem[i].classList.contains("open")) {
      servicesItem[i].classList.remove("open");
      buttonText.textContent = "詳しく";
    } else {
      servicesItem[i].classList.add("open");
      buttonText.textContent = "閉じる";
    }
    servicesItem[i].scrollIntoView();
  });
}
// const servicesItem = document.getElementsByClassName("js-services__item");
// console.log(servicesItem);
// for (let i = 0; i < servicesItem.length; i++) {
//   servicesItem[i].addEventListener("click", function () {
//     console.log(servicesItem[i].classList.contains("open"));
//     servicesItem[i].classList.contains("open")
//       ? servicesItem[i].classList.remove("open")
//       : servicesItem[i].classList.add("open");

//     servicesItem[i].scrollIntoView();
//   });
// }

// ページ内リンクの設定

const setLinkInPage = (targetItemList) => {
	targetItemList.forEach((item) => {
		item.addEventListener("click", (event) => {
			console.log(event);
			event.preventDefault();
			const targetId = event.target.hash;
			const target = document.querySelector(targetId);
			console.log(target)
			target.scrollIntoView({ behavior: "smooth" });
		});
	});
}

const navItems = document.querySelectorAll(".p-g-nav__item > a");
const navNext = document.querySelectorAll('.c-arrow__next');
const linkButton = document.querySelectorAll('.js-c-button');
setLinkInPage(navItems);
setLinkInPage(navNext);
setLinkInPage(linkButton);
// navItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     console.log(event);
//     event.preventDefault();
//     const targetId = event.target.hash;
//     const target = document.querySelector(targetId);
// 		console.log(target)
//     target.scrollIntoView({ behavior: "smooth" });
//   });
// });

// navNext.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     console.log(event);
//     event.preventDefault();
//     const targetId = event.target.hash;
//     const target = document.querySelector(targetId);
// 		console.log(target)
//     target.scrollIntoView({ behavior: "smooth" });
//   });
// });
// linkButton.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     console.log(event);
//     event.preventDefault();
//     const targetId = event.target.hash;
//     const target = document.querySelector(targetId);
// 		console.log(target)
//     target.scrollIntoView({ behavior: "smooth" });
//   });
// });

// アバウトページのモーダル開閉

const modal = document.querySelector('.p-about__modal')
const buttonCloseModal = document.querySelector('.p-modal__close')
const buttonOpenModal = document.querySelector('.p-about__open')
const aboutArrowNext = document.querySelector('.p-about > .c-arrow')

const closeModal = () => {
	modal.classList.remove('open')
	aboutArrowNext.style.display="block"
}
const  openModal = () => {
	modal.classList.add('open')
	aboutArrowNext.style.display="none"
}
