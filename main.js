document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const text = new SplitType("#target");

  let size = -29;
  let textMovement = gsap.timeline({ repeat: -1 });
  textMovement
    .to(".text-scroll", {
      delay: 1,
      y: size,
    })
    .to(".text-scroll", {
      delay: 1,
      y: size * 2,
    })
    .to(".text-scroll", {
      delay: 1,
      y: size * 3,
    })
    .to(".text-scroll", {
      delay: 1,
      y: size * 4,
    });

  gsap.to(".main-text", {
    scale: 0.6,
    opacity: 0,
    scrollTrigger: {
      trigger: ".second-page",
      end: "50%",
      scrub: true,
      markers: true,
    },
  });

  document.getElementById("abtBtn").addEventListener("click", () => {
    lenis.scrollTo(".second-page");
  });

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
