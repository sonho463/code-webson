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
	const trigger =
  gsap.from(target, {
		scrollTrigger: {
			trigger: target.parentNode,
			start: "center bottom",
		},
    x: -400,
    opacity: 0,
    duration: .5,
    ease: "sine",
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
