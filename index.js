gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const SMALL_BREAKPOINT = 1000;
let useSmallDesign = window.innerWidth <= SMALL_BREAKPOINT;

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

  createWorkAnimations(); // changes website structure => needs to be done first
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
    duration: 0.2,
    text: "LOADING...",
    ease: "power1.in",
  });

  const tl = gsap.timeline({
    delay: 0,
    defaults: {
      duration: 0.3,
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

  /*
  gsap.fromTo(
      ".work-item:not(:first-child)",
      {
        y: () => window.innerHeight / 2,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: {
          pin: "#work",
          markers: true,
          scrub: true,
          start: "top top",
          end: "+=4800",
        },
      }
  );
*/
  /*
  ScrollTrigger.create({
    trigger: "#work",
    start: "top top",
    end: "bottom bottom",
    pin: "#work-deployment",
    markers: true,
  });

  ScrollTrigger.create({
    trigger: "#work",
    start: "top top",
    end: "bottom bottom",
    pin: "#work-budget",
  });

  ScrollTrigger.create({
    trigger: "#work",
    start: "top top",
    end: "bottom bottom",
    pin: "#work-teachu",
  });

  ScrollTrigger.create({
    trigger: "#work",
    start: "top top",
    end: "bottom bottom",
    pin: "#work-room",
  });
   */
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
