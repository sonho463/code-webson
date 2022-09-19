gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
  scroller: ".l-snap-container",
});

const sectionHeading = document.getElementsByClassName(
  "c-section__heading-block"
);

Object.keys(sectionHeading).forEach((key) => {
  console.log(sectionHeading[key]);
  target = sectionHeading[key];
  gsap.from(target, {
    scrollTrigger: target.parentNode,
    duration: 1,
    y: -200,
    opacity: 0,
    duration: 2,
    ease: "expo",
  });
});

const tl = gsap.timeline();

tl.to("h1.p-fv__left__heading > span:first-of-type", {
  duration: 1,
  text: "そのコーディング業務",
  ease: "none",
});
tl.to(
  "h1.p-fv__left__heading > span:nth-of-type(2)",
  {
    duration: 1,
    text: "WEBSON・そんほんすに",
    ease: "none",
  },
  "2"
);
tl.to(
  "h1.p-fv__left__heading > span:last-of-type",
  {
    duration: 1,
    text: "おまかせください！",
    ease: "none",
  },
  "3"
);
