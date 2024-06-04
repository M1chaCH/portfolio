gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const SMALL_BREAKPOINT = 1000;
const useSmallDesign = window.innerWidth <= SMALL_BREAKPOINT;

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", event => {
  const isNowSmall = event.currentTarget.innerWidth <= SMALL_BREAKPOINT;
  if (isNowSmall !== useSmallDesign) {
    location.reload();
  }
})

let themeToggleButton;
let themeToggleIcon;
let main;
let htmlText;

function init() {
  disableUnusedStyles(useSmallDesign);

  themeToggleButton = document.getElementById("theme-toggle-button");
  themeToggleIcon = document.getElementById("theme-toggle-icon");
  main = document.getElementById("main");
  htmlText = document.getElementById("html-text");

  themeToggleIcon.src = prefersDark() ? "assets/icons/dark_mode.svg" : "assets/icons/light_mode.svg";
  htmlText.innerHTML = prefersDark() ? htmlTextDark : htmlTextLight;
  main.style.backgroundImage = prefersDark() ? 'url("assets/images/wave_dark.png")' : 'url("assets/images/wave_bright.png")';

  themeToggleButton.addEventListener("click", toggleColorPressed);

  if (useSmallDesign) {
    createMobileWorkAnimations("#work-teachu");
    createMobileWorkAnimations("#work-room");
    createMobileWorkAnimations("#work-prayer");
    createMobileWorkAnimations("#work-budget");
    createMobileWorkAnimations("#work-controller");
    createMobileWorkAnimations("#work-other");
  } else {
    createWorkAnimations(); // changes website structure => needs to be done first
  }
  createLoadingAnimation();
  createBannerScrollTrigger("#home-banner", "#home-banner-container", useSmallDesign);
  createBannerScrollTrigger("#work-banner", "#work-banner-container", useSmallDesign, useSmallDesign ? -50 : -200);
  createOverlayEndTrigger();
}

function disableUnusedStyles(useSmall = true) {
  for (let styleSheet of document.styleSheets) {
    if (styleSheet.href?.includes("desktop")) {
      styleSheet.disabled = useSmall;
    } else if (styleSheet.href?.includes("mobile")) {
      styleSheet.disabled = !useSmall;
    }
  }
}

function toggleColorPressed() {
  const dark = toggleDarkTheme();
  themeToggleIcon.src = dark ? "assets/icons/dark_mode.svg" : "assets/icons/light_mode.svg";
  htmlText.innerHTML = dark ? htmlTextDark : htmlTextLight;
  main.style.backgroundImage = dark ? 'url("assets/images/wave_dark.png")' : 'url("assets/images/wave_bright.png")';
}

function createLoadingAnimation() {
  gsap.to("#loading-text", {
    duration: 1.2,
    text: "LOADING...",
    ease: "power1.in",
  });

  const tl = gsap.timeline({
    delay: 2,
    defaults: {
      duration: 1.7,
      ease: "power3.inOut"
    }
  });

  tl.to(".loading", {
    top: "3vw",
    left: "3vw",
    transform: "translate(0, 0)"
  }, 0);

  tl.to("#home-icon", {
    width: 42,
    height: 42,
  }, 0);

  tl.to("#loading-text", {
    scale: 0.4,
    opacity: 0,
    display: "none",
    width: 0,
    height: 0,
  }, 0);

  tl.from("main", {
    opacity: 0,
  }, "<0.5");

  tl.from("footer", {
    opacity: 0,
  }, "<1");

  return tl;
}

function createBannerScrollTrigger(banner, container, havingSmallScreen, top) {
  const calculatedTop = top ? top : havingSmallScreen ? -150 : -300;

  gsap.to(banner, {
    top: calculatedTop,
    ease: "power1.out",
    scrollTrigger: {
      trigger: container,
      scrub: 0.7,
    }
  });
}

function createOverlayEndTrigger() {
  gsap.to("#html-text", {
    ease: "power1.out",
    y: -200,
    opacity: 0,
    scrollTrigger: {
      start: "bottom bottom",
      end: "bottom 75%",
      trigger: "main",
      scrub: 0.7,
    }
  });

  gsap.to("#binary-text", {
    ease: "power1.out",
    y: -200,
    opacity: 0,
    scrollTrigger: {
      start: "bottom center",
      end: "bottom 20%",
      trigger: "main",
      scrub: 0.7,
    }
  });
}

function createWorkAnimations() {
  const yOffset = window.innerHeight;
  const workItemCount = document.getElementsByClassName("work-item").length;

  gsap.fromTo(
      ".work-item:not(:first-child)",
      {
        y: yOffset,
      },
      {
        y: 0,
        stagger: 0.7,
        scrollTrigger: {
          pin: "#work",
          scrub: 0.5,
          start: "top top",
          end: () => `+=${ yOffset * workItemCount }`,
        },
      },
  );
}

// TODO
// - a lot of this code can be reused
// - try do use the exact same animations for desktop,
//    different scroll trigger is probably required
function createMobileWorkAnimations(workItemId) {
  const defaultFlyInAnimation = {
    y: 40,
    opacity: 0.3,
  }

  const upperTimeline = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: "power1.out",
    },
    scrollTrigger: {
      trigger: workItemId,
      start: "top 90%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
  });

  // alle können vielleicht mit document.getElementsByClass...
  upperTimeline.from(workItemId + " h4", {
    ...defaultFlyInAnimation,
  }, "<");

  upperTimeline.from(workItemId + " .subtitle", {
    ...defaultFlyInAnimation,
  }, "<0.1");

  upperTimeline.from(workItemId + " .image-container", {
    ...defaultFlyInAnimation,
    scale: 0.9,
  }, "<0.1");

  const lowerTimeline = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: "power1.out",
    },
    scrollTrigger: {
      trigger: workItemId,
      start: "top 40%",
      end: "top top",
      toggleActions: "play none none reverse",
    },
  });

  lowerTimeline.from(workItemId + " .description", {
    ...defaultFlyInAnimation,
  }, "<");

  lowerTimeline.from(workItemId + " .tag", {
    y: 20,
    opacity: 0,
    scale: 0.75,
    stagger: 0.1,
  }, "<0.15");
}

const htmlTextDark =
    `
  &lt;HTML&gt;
COLOR-THEME=
 “DARK“&gt;
  &lt;META&gt;
  &lt;SCALE=1“&gt;
`;

const htmlTextLight =
    `
  &lt;HTML&gt;
COLOR-THEME=
 “BRIGHT“&gt;
  &lt;META&gt;
  &lt;SCALE=1“&gt;
`;
