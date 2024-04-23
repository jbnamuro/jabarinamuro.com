document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const text = new SplitType("#my-text");

  gsap.set(".intro-container h1", {
    y: 75,
  });

  gsap.to(".intro-container h1", {
    y: 0,
    duration: 0.7,
    stagger: 0.1,
  });

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
    },
  });

  let clicked = false;
  let barsTL = gsap.timeline({ paused: true });
  barsTL.to("#bar1", {
    rotate: 45,
    y: 3,
    duration: 0.25,
    ease: "none",
  });
  barsTL.to(
    "#bar2",
    {
      rotate: -45,
      y: -3,
      duration: 0.25,
      ease: "none",
    },
    "<"
  );

  gsap.to(".nav-bars", {
    scale: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".second-page",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  document.querySelector(".nav-bars").addEventListener("click", () => {
    if (!clicked) {
      barsTL.play();
      clicked = true;
    } else {
      barsTL.reverse();
      clicked = false;
    }
  });

  document.querySelector(".nav-bars").addEventListener("click", () => {
    if (clicked) {
      gsap.set(".offClick", {
        display: "block",
      });
      gsap.to(".menu-items", {
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "power2.out",
      });
    } else {
      gsap.set(".offClick", {
        display: "none",
      });
      gsap.to(".menu-items", {
        clipPath: "polygon(100% 0%, 100% 0, 100% 100%, 100% 100%)",
        ease: "power2.out",
      });
    }
  });

  document.querySelector(".offClick").addEventListener("click", () => {
    barsTL.reverse();
    clicked = false;
    gsap.set(".offClick", {
      display: "none",
    });
    gsap.to(".menu-items", {
      clipPath: "polygon(100% 0%, 100% 0, 100% 100%, 100% 100%)",
      ease: "power2.out",
    });
  });

  gsap.set(".scroller-wrapper #first-part", {
    xPercent: -60,
  });
  gsap.set(".scroller-wrapper #second-part", {
    xPercent: 60,
  });

  gsap.to(".scroller-wrapper #first-part, .scroller-wrapper #second-part", {
    xPercent: 0,
    scrollTrigger: {
      trigger: ".portfolio",
      start: "top+=650",
      end: "+=1300",
      // markers: true,
      scrub: true,
    },
  });

  gsap.to(".deleting h1", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".portfolio",
      start: "top+=750",
      end: "+=1200",
      // markers: true,
      scrub: true,
    },
  });

  gsap.to(".pseudo h1", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".portfolio",
      start: "top+=750",
      end: "+=1200",
      // markers: true,
      scrub: true,
    },
  });

  let abtMenu = document.querySelectorAll(".abtBtn");
  abtMenu.forEach((e) => {
    e.addEventListener("click", () => {
      lenis.scrollTo(".second-page", { duration: 2 });
    });
  });

  let portMenu = document.querySelectorAll(".portBtn");
  portMenu.forEach((e) => {
    e.addEventListener("click", () => {
      lenis.scrollTo(".portfolio", { duration: 2 });
    });
  });

  let contactMenu = document.querySelectorAll(".contactBtn");
  contactMenu.forEach((e) => {
    e.addEventListener("click", () => {
      lenis.scrollTo(".contact-page", { duration: 2 });
    });
  });

  let logoClick = document.querySelector(".video-logo");
  logoClick.addEventListener("click", () => {
    lenis.scrollTo(".links", { offset: -200 });
  });

  [(abtMenu[1], portMenu[1], contactMenu[1], logoClick)].forEach((e) => {
    e.addEventListener("click", () => {
      barsTL.reverse();
      clicked = false;
      gsap.set(".offClick", {
        display: "none",
      });
      gsap.to(".menu-items", {
        clipPath: "polygon(100% 0%, 100% 0, 100% 100%, 100% 100%)",
        ease: "power2.out",
      });
    });
  });

  gsap.set(".info-wrapper", {
    position: "absolute",
  });

  gsap.to(".info-wrapper", {
    top: 0,
    stagger: 0.5,
    opacity: 1,
    scrollTrigger: {
      trigger: ".full-wrap",
      start: "top 12%",
      scrub: true,
      pin: ".full-wrap",
      end: "+=1500",
    },
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
