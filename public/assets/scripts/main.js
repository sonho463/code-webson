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
const snapContainer = document.querySelector(".l-snap-container");
const servicesItem = document.getElementsByClassName("js-services__item");

for (let i = 0; i < servicesItem.length; i++) {
  const button = servicesItem[i].querySelector(".js-services-button");
  const buttonText = servicesItem[i].querySelector(".js-services-button__text");
  button.addEventListener("click", function () {
    const activeCont = servicesItem[i].querySelector(
      ".p-services__item__heading"
    ).textContent;
    if (servicesItem[i].classList.contains("open")) {
      console.log(`${activeCont} is close`);
      servicesItem[i].classList.remove("open");
      buttonText.textContent = "詳しく";
      snapContainer.style.overflow = "auto";
    } else {
      console.log(`${activeCont} is open`);
      servicesItem[i].classList.add("open");
      buttonText.textContent = "閉じる";
      const w = window.innerWidth;
      // if(w>1024){
      snapContainer.style.overflow = "hidden";
      // }
    }
    servicesItem[i].scrollIntoView();
  });
}

// ページ内リンクの設定
const setLinkInPage = (targetItemList) => {
  targetItemList.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(event);
      event.preventDefault();
      const targetId = event.target.hash;
      console.log(targetId);
      const target = document.querySelector(targetId);
      console.log(target);
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
};

const navItems = document.querySelectorAll(".p-g-nav__item > a");
const navNext = document.querySelectorAll(".c-arrow__next");
const linkButton = document.querySelectorAll(".js-c-button");
const footerLink = document.querySelectorAll(".js-footer__link");

setLinkInPage(navItems);
setLinkInPage(navNext);
setLinkInPage(linkButton);
setLinkInPage(footerLink);


// アバウトページのモーダル開閉

const modal = document.querySelector(".p-about__modal");
const buttonCloseModal = document.querySelector(".p-modal__close");
const buttonOpenModal = document.querySelector(".p-about__open");
const aboutArrowNext = document.querySelector(".p-about > .c-arrow");
const cOverlay = document.querySelector(".c-overlay");

const closeModal = () => {
  modal.classList.remove("open");
  cOverlay.classList.remove("visible");
  snapContainer.style.overflow = "auto";
  if (w > 1024) {
    aboutArrowNext.style.display = "block";
  }
};
const openModal = () => {
  modal.classList.add("open");
  aboutArrowNext.style.display = "none";
  cOverlay.classList.add("visible");
  const w = window.innerWidth;
  // if(w>1024){
  snapContainer.style.overflow = "hidden";
  // }
  modal.scrollIntoView(true);
};

// works-detail open
const workDetail = document.querySelector(".p-work-detail");
const moreInfoList = document.querySelectorAll(".c-more-info > a");
const closeWorkDetailArray = document.querySelectorAll(".close-work-detail");

const workDetailOpen = (target) => {
  target.classList.add("open");
};

// work-detailページ内のスクロールアイコンがスクロールしたら消えるアニメーション
const addScrollIconAnimation = (parent) => {
	console.log(parent)
	const target = parent.querySelector('.p-work-detail__arrow')
	const trigger = parent.querySelector('.p-work-detail__article')
	gsap.to(target, {
		scrollTrigger: {
			trigger: trigger,
			start:'top bottom',
			toggleActions: "play pause resume reset",
			scroller: parent,
		},
		opacity: 0,
		duration: 1,
	});
}

// さらに詳しくボタンクリック時にwork-detailを開くアクション
moreInfoList.forEach((ele) => {
  ele.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(ele);
    const url = ele.href;
    const targetArray = url.split("/");
    const targetName = targetArray.slice(-1)[0];
    console.log(targetName);
    const target = document.querySelector(`#${targetName}`);
		workDetailOpen(target);
		addScrollIconAnimation(target);
  });
});

// console.log(closeWorkDetailArray);

closeWorkDetailArray.forEach((ele) => {
  ele.addEventListener("click", () => {
    const targetId = ele.parentElement.parentElement.id;
    const target = document.querySelector(`#${targetId}`);
    console.log(target);
    target.classList.remove("open");
  });
});
