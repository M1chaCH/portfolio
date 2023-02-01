<script lang="ts">
import CyclingArrow from "./CyclingArrow.svelte";
import gsap from "gsap";
import {onMount} from "svelte";
import Menu from "./Menu.svelte";

let menuOpen: boolean = false;
let menuTimeline: any;
let menuItemClicked: Function;

onMount(() => {
    gsap.from("#menu-burger", {
        scale: 0,
        rotate: "180deg",
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#overview",
            start: "top center",
            toggleActions: "play none none reverse",
        }
    });

    gsap.from(".menu-anim", {
        x: 40,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
            trigger: "#overview",
            start: "top 60",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
        }
    });

    const burgerElement = document.getElementById("menu-burger");
    const menuElement = document.getElementById("mobile-menu");

    burgerElement.onclick = () => {
        menuOpen = !menuOpen;

        if(!menuTimeline)
            menuTimeline = buildMenuTimeline(burgerElement, menuElement);

        if(menuOpen) {
            menuElement.style.display = "block";
            menuTimeline.play();
        } else {
            menuTimeline.reverse();
            setTimeout(() => menuElement.style.display = "none", menuTimeline.duration() * 1000);
        }
    };

    menuItemClicked = () => burgerElement.click();
});

function buildMenuTimeline(burgerElement, menuElement) {
    const menuTimeline = gsap.timeline({
        paused: true
    });

    menuTimeline.to(burgerElement, {
        rotate: "180deg",
        duration: 0.25,
        ease: "elastic.out(1.2, 0.5)"
    }, 0);

    menuTimeline.from(menuElement, {
        opacity: 0,
        ease: "power3.out",
        duration: 0.3
    }, 0);

    menuTimeline.from("#menu-header", {
        opacity: 0,
        y: -50,
        ease: "power2.out",
        duration: 0.3
    }, "-=0.1");

    // don't know why it needs to be from to, but it doesn't work with from.
    // noinspection TypeScriptUnresolvedFunction (fromTo is actually a function)
    menuTimeline.fromTo(".menu-blob-container", {
        opacity: 0,
        scale: 0.7,
        y: -50
    }, {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.075,
        ease: "power2.out",
        duration: 0.25
    }, "-=0.2");

    return menuTimeline;
}
</script>

<span id="menu-burger" class="material-symbols-rounded burger-closed">close</span>

<div id="arrows-container" class="menu-anim">
    <CyclingArrow />
</div>
<span id="menu-text" class="menu-anim">MENU</span>

<section id="mobile-menu" style="display: none">
    <h1 id="menu-header">Menu</h1>
    <Menu on:itemSelected={menuItemClicked} />
</section>

<style lang="scss">
  #menu-burger {
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;

    font-size: 40px;
    color: var(--black);

    transition: all 250ms ease-out;
    rotate: 45deg;

    z-index: 999;
  }

  #arrows-container {
    position: fixed;
    top: 35px;
    right: 60px;
    pointer-events: none;
  }

  #menu-text {
    position: fixed;
    right: 165px;
    top: 96px;

    color: var(--black);
    font-weight: 700;
    font-size: 20px;
  }

  #mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 888;

    padding: 10vw;

    background-color: var(--primary-color);

    h1 {
      margin-bottom: 10vh;
    }
  }
</style>