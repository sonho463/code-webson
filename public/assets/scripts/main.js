// iphone用bodyFix関数
const body = document.getElementsByTagName("body")[0];
let scrollTop = 0;
const noScroll = () => {
  if (body.classList.contains("no_scroll")) {
    // スクロール開放
    body.style.top = "";
    body.classList.remove("no_scroll");
    window.scrollTo(0, scrollTop);
  } else {
    // スクロール禁止
    scrollTop = window.scrollY;
    body.style.top = scrollTop * -1 + "px";
    body.classList.add("no_scroll");
  }
};
// サービスブロックのアイテムオープン
const snapContainer = document.querySelector(".l-snap-container");
const servicesItem = document.getElementsByClassName("js-services__item");
// const servicesItemDescInner = document.getElementsByClassName(
//   "p-services__item__desc__inner"
// );
const servicesOverlay = document.querySelector(".c-overlay--services");
const cOverlay = document.querySelector(".c-overlay");

console.log(document);
const bodyFix = () => {
  document.body.classList.add("u-oy-hidden");
  snapContainer.classList.add("u-oy-hidden");
};
const removeBodyFix = () => {
  document.body.classList.remove("u-oy-hidden");
  snapContainer.classList.remove("u-oy-hidden");
};

const closeServiceItem = (target, activeCont, buttonText) => {
  console.log(`${activeCont} is close`);
	const targetInner = target.querySelector('.p-services__item__desc__inner')
	console.log(targetInner)
	targetInner.scrollTo(0,0);
  target.classList.remove("open");
  buttonText.textContent = "詳しく";
  removeBodyFix();
  servicesOverlay.classList.remove("visible");
  cOverlay.classList.remove("visible");
  // bodyScrollLock. enableBodyScroll(target)
};
const openServiceItem = (target, activeCont, buttonText) => {
  console.log(`${activeCont} is open`);
  target.classList.add("open");
  buttonText.textContent = "閉じる";
  bodyFix();
  cOverlay.classList.add("visible");
  servicesOverlay.classList.add("visible");

  // bodyScrollLock.disableBodyScroll(target)
};

for (let i = 0; i < servicesItem.length; i++) {
  const button = servicesItem[i].querySelector(".js-services-button");
  const buttonText = servicesItem[i].querySelector(".js-services-button__text");
  button.addEventListener("click", function () {
    const activeCont = servicesItem[i].querySelector(
      ".p-services__item__heading"
    ).textContent;
    // toggleServiceCard
    if (servicesItem[i].classList.contains("open")) {
      closeServiceItem(servicesItem[i], activeCont, buttonText);
    } else {
      openServiceItem(servicesItem[i], activeCont, buttonText);
    }
    servicesItem[i].scrollIntoView();
  });
  servicesOverlay.addEventListener("click", (activeCont) => {
    console.log(`${activeCont} is close`);
    servicesItem[i].classList.remove("open");
    buttonText.textContent = "詳しく";
    removeBodyFix();
    servicesOverlay.classList.remove("visible");
    cOverlay.classList.remove("visible");
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
const modalContents = document.querySelector(".p-modal__contents");
// const modalContents = document.querySelector("#modal");
const buttonCloseModal = document.querySelector(".p-modal__close");
const buttonOpenModal = document.querySelector(".p-about__open");
const aboutArrowNext = document.querySelector(".p-about > .c-arrow");

const closeModal = () => {
  console.log("modal close");
  modal.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  modal.classList.remove("open");
  cOverlay.classList.remove("visible");
  removeBodyFix();
  // if (w > 1024) {
  //   aboutArrowNext.style.display = "block";
  // }
};
const openModal = () => {
  modal.classList.add("open");
  aboutArrowNext.style.display = "none";
  cOverlay.classList.add("visible");
  // const w = window.innerWidth;
  bodyFix();
  // bodyFixWhenIphone(modalContents)
  modal.scrollIntoView(true);
};

// works-detail open
const workDetail = document.querySelector(".p-work-detail");
const moreInfoList = document.querySelectorAll(".c-more-info > a");
const closeWorkDetailArray = document.querySelectorAll(".close-work-detail");

const workDetailOpen = (target) => {
  target.classList.add("open");
  target.classList.add("u-z-index999");
  document.body.classList.add("u-oy-hidden");
};

// work-detailページ内のスクロールアイコンがスクロールしたら消えるアニメーション
const addScrollIconAnimation = (parent) => {
  console.log(parent);
  const target = parent.querySelector(".p-work-detail__arrow");
  const trigger = parent.querySelector(".c-view-site");
  gsap.to(target, {
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
      toggleActions: "play pause resume reset",
      scroller: parent,
    },
    opacity: 0,
    duration: 1,
  });
};

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
    const targetId = ele.parentElement.id;
    const target = document.querySelector(`#${targetId}`);
    console.log("close", target);
    target.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const closeAction = () => {
      target.classList.remove("open");
      target.classList.remove("u-z-index999");
      document.body.classList.remove("u-oy-hidden");
    };
    setTimeout(closeAction, 500);
  });
});

const modalContainer = document.querySelector(".modal__container");
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

// openButton.addEventListener('click',()=>{
// 	modalContainer.classList.add('open');
// 	document.body.style.overflow="hidden";
// })
// closeButton.addEventListener('click',()=>{
// 	modalContainer.classList.remove('open');
// 	document.body.style.overflow="auto";
// })

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
