var textarea = document.querySelector(".textarea");
textarea.scrollTop = 1;

window.addEventListener("touchmove", function (event) {
  if (
    event.target === textarea &&
    textarea.scrollTop !== 0 &&
    textarea.scrollTop + textarea.clientHeight !== textarea.scrollHeight
  ) {
    event.stopPropagation();
  } else {
    event.preventDefault();
  }
});

textarea.addEventListener("scroll", function (event) {
  if (textarea.scrollTop === 0) {
    textarea.scrollTop = 1;
  } else if (
    textarea.scrollTop + textarea.clientHeight ===
    textarea.scrollHeight
  ) {
    textarea.scrollTop = textarea.scrollTop - 1;
  }
});

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

// const servicesOverlay = document.querySelector(".c-overlay--services");
const cOverlayService = document.querySelector(".c-overlay.--services");
const cOverlayAbout = document.querySelector(".c-overlay.--about");

// console.log(document);
const bodyFix = () => {
  document.body.classList.add("u-oy-hidden");
  snapContainer.classList.add("u-oy-hidden");
};

const removeBodyFix = () => {
  document.body.classList.remove("u-oy-hidden");
  snapContainer.classList.remove("u-oy-hidden");
};

// サービスブロックのアイテムオープン
const serviceItemList = document.querySelectorAll(".js-services__item");
const serviceButtonList = document.querySelectorAll(".js-services-button");
const serviceModalList = document.querySelectorAll(".p-services__modal");
const snapContainer = document.querySelector(".l-snap-container");

// 詳しくボタンに開く動作を追加
serviceItemList.forEach((item) => {
  const button = item.querySelector(".js-services-button");
  const parent = item.querySelector(".p-services__item__heading");
  const targetName = parent.textContent.trim();

  serviceModalList.forEach((sModal) => {
    sModalName = sModal
      .querySelector(".p-services__modal__heading")
      .textContent.trim();
    // console.log(`${sModalName}-${targetName}`)
    // console.log(sModalName === targetName);
    if (sModalName === targetName) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        sModal.classList.add("open");
        // servicesOverlay.classList.add("visible");
        cOverlayService.classList.add("visible");
        bodyFix();
      });
    }
  });
});

// サービスモーダルの閉じるボタンの動作
serviceModalList.forEach((modal) => {
  const buttonClose = modal.querySelector(".js-s-modal-button");
  console.log(modal);

  const setCloseAction = (target) => {
    target.addEventListener("click", function () {
      modal.scrollTo(0, 0);
      modal.classList.contains("open") ? modal.classList.remove("open") : "";
      // servicesOverlay.classList.remove("visible");
      cOverlayService.classList.remove("visible");
      removeBodyFix();
    });
  };

  setCloseAction(buttonClose);
  setCloseAction(cOverlayService);
});

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
  modalContents.scrollTo(0, 0);
  modal.classList.remove("open");
  cOverlayAbout.classList.remove("visible");
  removeBodyFix();
  // if (w > 1024) {
  //   aboutArrowNext.style.display = "block";
  // }
};
const openModal = () => {
  modal.classList.add("open");
  aboutArrowNext.style.display = "none";
  cOverlayAbout.classList.add("visible");
  // const w = window.innerWidth;
  bodyFix();
  // bodyFixWhenIphone(modalContents)
  modal.scrollIntoView(true);
};

cOverlayAbout.addEventListener('click', closeModal)


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

// サービスブロックのモーダル

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
