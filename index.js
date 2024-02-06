gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// TODO
// - mobile view

document.addEventListener("DOMContentLoaded", init);

let themeToggleButton;
let themeToggleIcon;
let main;
let htmlText;

function init() {
  themeToggleButton = document.getElementById("theme-toggle-button");
  themeToggleIcon = document.getElementById("theme-toggle-icon");
  main = document.getElementById("main");
  htmlText = document.getElementById("html-text");

  themeToggleIcon.src = prefersDark() ? "assets/icons/dark_mode.svg" : "assets/icons/light_mode.svg";
  htmlText.innerHTML = prefersDark() ? htmlTextDark : htmlTextLight;
  main.style.backgroundImage = prefersDark() ? 'url("assets/images/wave_dark.png")' : 'url("assets/images/wave_bright.png")';

  themeToggleButton.addEventListener("click", toggleColorPressed);

  createLoadingAnimation();
  createBannerScrollTrigger("#home-banner", "#home-banner-container");
  createBannerScrollTrigger("#work-banner", "#work-banner-container");
  createOverlayEndTrigger();
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

function createBannerScrollTrigger(banner, container) {
  gsap.to(banner, {
    top: -300,
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
