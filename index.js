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
    const workItems = document.getElementsByClassName("work-item");
    for (let workItem of workItems) {
      const idString = "#" + workItem.id;
      createMobileWorkAnimations(idString);
    }
  } else {
    createWorkItemPinnedScroll(); // will change website structure => needs to be done first
  }
  createLoadingAnimation();
  createBannerScrollTrigger("#home-banner", "#home-banner-container", useSmallDesign);
  createBannerScrollTrigger("#work-banner", "#work-banner-container", useSmallDesign, useSmallDesign ? -50 : -200);
  createOverlayEndTrigger();

  registerContactSend();
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

function createWorkItemPinnedScroll() {
  const yOffset = window.innerHeight;
  const workItemCount = document.getElementsByClassName("work-item").length;

  gsap.fromTo(
      ".work-item:not(:first-child)",
      {
        y: yOffset,
        scale: 0.5,
        opacity: 0.85,
        rotationX: -50,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        stagger: 0.5,
        rotationX: 0,
        scrollTrigger: {
          pin: "#work",
          scrub: 0.5,
          start: "top top",
          end: () => `+=${ yOffset * workItemCount }`,
          toggleClass: "active",
        },
      },
  );
}

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

function registerContactSend() {
  const mailElement = document.getElementById("mailInput");
  const messageElement = document.getElementById("messageInput");
  const sendElement = document.getElementById("contactSend");
  const contactMessageElement = document.getElementById("contactResultMessage");
  toggleContactMessageDisplay(contactMessageElement, false);
  let removeMessageTimeout = undefined;

  sendElement.addEventListener("click", async (e) => {
    e.preventDefault();
    if (removeMessageTimeout) {
      clearTimeout(removeMessageTimeout);
    }

    if (!mailElement.value || !mailElement.checkValidity()) {
      toggleContactMessageDisplay(contactMessageElement, true, true, "Not a valid email!")
      return;
    }
    const message = messageElement.value;
    if (message.length > 500) {
      toggleContactMessageDisplay(contactMessageElement, true, true, `Please keep your message shorter than 500 characters. (${ message.length })`);
      return;
    }
    if (message.length < 30) {
      toggleContactMessageDisplay(contactMessageElement, true, true, `Please send a message that has at least 30 characters. (${ message.length })`);
      return;
    }

    try {
      const response = await fetch('https://michu-tech.com/host/backend/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mail: mailElement.value,
          message,
        })
      });

      if (response.ok) {
        toggleContactMessageDisplay(contactMessageElement, true, false, "Sent!");
        messageElement.value = "";
        removeMessageTimeout = setTimeout(() => {
          toggleContactMessageDisplay(contactMessageElement, false);
        }, 4 * 1000);
      } else {
        toggleContactMessageDisplay(contactMessageElement, true, true, `Sorry, this message could not be sent! (${ response.status } - ${ await response.text() })`);
      }
    } catch (e) {
      toggleContactMessageDisplay(contactMessageElement, true, true, `Sorry, this message could not be sent! (server is not available)`);
    }
  })
}

function toggleContactMessageDisplay(element, show, error = true, message = "something went wrong") {
  if (show) {
    element.style.transform = "translateY(0)";
    element.style.opacity = "1";
    element.style.color = error ? "var(--michu-tech-warn)" : "var(--michu-tech-primary)";
    element.innerText = message;
  } else {
    element.style.transform = "translateY(100%)";
    element.style.opacity = "0";
    element.style.color = "var(--michu-tech-background)"
  }
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
