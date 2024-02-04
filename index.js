gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

document.addEventListener("DOMContentLoaded", init);

let themeToggleButton;
let themeToggleIcon;
let htmlText;

function init() {
  themeToggleButton = document.getElementById("theme-toggle-button");
  themeToggleIcon = document.getElementById("theme-toggle-icon");
  htmlText = document.getElementById("html-text");

  themeToggleIcon.src = prefersDark() ? "assets/icons/dark_mode.svg" : "assets/icons/light_mode.svg";
  htmlText.innerHTML = prefersDark() ? htmlTextDark : htmlTextLight;
  document.body.style.backgroundImage = prefersDark() ? 'url("assets/images/wave_dark.png")' : 'url("assets/images/wave_bright.png")';

  themeToggleButton.addEventListener("click", toggleColorPressed);

  createLoadingAnimation();
  createBannerScrollTrigger("#home-banner", "#home-banner-container");
  createBannerScrollTrigger("#work-banner", "#work-banner-container");
}

function toggleColorPressed() {
  const dark = toggleDarkTheme();
  themeToggleIcon.src = dark ? "assets/icons/dark_mode.svg" : "assets/icons/light_mode.svg";
  htmlText.innerHTML = dark ? htmlTextDark : htmlTextLight;
  document.body.style.backgroundImage = dark ? 'url("assets/images/wave_dark.png")' : 'url("assets/images/wave_bright.png")';
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
