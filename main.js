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
    },
  });
  gsap.to(".second-page", {
    clipPath: "inset(0 0px round 28px 28px 0 0)",
    scrollTrigger: {
      trigger: ".second-page",
      end: "10%",
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

  document.getElementById("abtBtn").addEventListener("click", () => {
    lenis.scrollTo(".second-page");
  });

  document.querySelector(".nav-bars").addEventListener("click", () => {
    if (clicked) {
      gsap.to(".menu-items", {
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "power2.out",
      });
      gsap.set(".clickOff", {
        display: "block",
      });
    } else {
      gsap.to(".menu-items", {
        clipPath: "polygon(100% 0%, 100% 0, 100% 100%, 100% 100%)",
        ease: "power2.out",
        onComplete: () => {
          gsap.set(".clickOff", {
            display: "none",
          });
        },
      });
    }
  });

  document.querySelector(".clickOff").addEventListener("click", () => {
    gsap.to(".menu-items", {
      clipPath: "polygon(100% 0%, 100% 0, 100% 100%, 100% 100%)",
      ease: "power2.out",
      onComplete: () => {
        gsap.set(".clickOff", {
          display: "none",
        });
      },
    });
    barsTL.reverse();
    clicked = false;
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
