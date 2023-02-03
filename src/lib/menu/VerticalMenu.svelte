<script lang="ts">
    import {onMount} from "svelte";
    import {currentLanguage, currentPart} from "../stores";
    import {getPositionForVertLink} from "./MenuService";
    import type {Links} from "./MenuService";
    import gsap from "gsap";

    $: t_menuWelcome = $currentLanguage["menu"]["welcome"];
    $: t_menuOverview = $currentLanguage["menu"]["overview"];
    $: t_menuCareer = $currentLanguage["menu"]["career"];
    $: t_menuProjects = $currentLanguage["menu"]["projects"];
    $: t_menuHobbies = $currentLanguage["menu"]["hobbies"];
    $: t_menuSkills = $currentLanguage["menu"]["skills"];

    onMount(() => {
        for (let linkElement of document.getElementsByClassName("menu-element")) {
            const id = linkElement.getElementsByClassName("menu-circle")[0].getAttribute("href").replace("#", "");
            const yPosition = getPositionForVertLink(id as Links)

            // noinspection TypeScriptUnresolvedVariable (style actually exists)
            linkElement.style.top = yPosition - 25 + "px";
        }

        gsap.from("#vertical-menu", {
            x: -100,
            ease: "power2.out",
            duration: 0.3,
            scrollTrigger: {
                trigger: "#career",
                start: "top 35%",
                end: "top top",
                scrub: true,
                toggleActions: "play none none reverse",
            }
        });

        currentPart.subscribe(part => {
            const elements: Element[] = Array.from(document.getElementsByClassName("menu-element"));

            for (let element of elements)
                element.classList.remove("current-element");

            if(part !== "hello" && part !== "overview") {
                const partToChange: Element | undefined = elements.find(element => element
                    .getElementsByClassName("menu-circle")[0]
                    .getAttribute("href")
                    .replace("#", "") === part);

                if (partToChange)
                    partToChange.classList.add("current-element");
                else
                    console.error("could not find <a> element for", part);
            }
        })
    });

    const updateScrollProgress = () => {
        const currentScrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (currentScrollPosition / documentHeight) * 100;
        document.getElementById("progress").style.setProperty("--page-progress", scrolled + "%");
    }

    // TODO dynamically add current link
    // gsap scroll triggered animation for that. make it scrub
    // gsap onEnter remove all current currents then add the current current. this can easily be done in one for loop
    // for all menu-elements
</script>

<svelte:window on:scroll={updateScrollProgress} />
<div id="vertical-menu">
    <div class="content-container">
        <div id="progress"></div>

        <div class="menu-element">
            <h2 class="menu-title">{t_menuWelcome}</h2>
            <a class="menu-circle" href="#hello">
                <span class="material-symbols-rounded">waving_hand</span>
            </a>
        </div>
        <div class="menu-element">
            <h2 class="menu-title">{t_menuOverview}</h2>
            <a class="menu-circle" href="#overview">
                <span class="material-symbols-rounded">roofing</span>
            </a>
        </div>
        <div class="menu-element">
            <h2 class="menu-title">{t_menuCareer}</h2>
            <a class="menu-circle" href="#career">
                <span class="material-symbols-rounded">business_chip</span>
            </a>
        </div>
        <div class="menu-element">
            <h2 class="menu-title">{t_menuSkills}</h2>
            <a class="menu-circle" href="#skills">
                <span class="material-symbols-rounded">cognition</span>
            </a>
        </div>
        <div class="menu-element">
            <h2 class="menu-title">{t_menuHobbies}</h2>
            <a class="menu-circle" href="#hobbies">
                <span class="material-symbols-rounded">directions_bike</span>
            </a>
        </div>
        <div class="menu-element" style="top: 85vh">
            <h2 class="menu-title">{t_menuProjects}</h2>
            <a class="menu-circle" href="#projects">
                <span class="material-symbols-rounded">dashboard</span>
            </a>
        </div>
    </div>
</div>

<style lang="scss">
  #vertical-menu {
    position: fixed;
    top: 5vh;
    bottom: 5vh;
    left: -30px;

    width: 100px;

    .content-container {
      position: relative;
      width: 100%;
      height: 100%;

      #progress {
        --page-progress: 20%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: calc(100% / 2 - 3px);

        width: 6px;
        margin: 0 auto;
        background: linear-gradient(180deg, var(--accent-color-lighter) 0%,
                var(--accent-color-lighter) var(--page-progress),
                var(--accent-color-darker) var(--page-progress),
                var(--accent-color-darker) 100%);

        border-radius: 5px;
      }


      .menu-element {
        position: absolute;
        left: calc(100% / 2 - 25px);

        .menu-title {
          display: none;
          transform: translateX(-50px);
          animation: fly-in ease-out 250ms;
          pointer-events: none;
        }

        .menu-circle {
          border-radius: 50%;
          height: 50px;
          width: 50px;

          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          text-decoration: none;
          background-color: var(--accent-color);
          transition: all 250ms ease-out;

          span {
            font-size: 20px;
            color: var(--primary-color);
          }
        }
      }

      .current-element, .menu-element:hover {
        .menu-title {
          display: inline-block !important;

          position: absolute;
          left: 60px;
          top: -20px;
          transform: translateX(0);
        }

        .menu-circle {
          scale: 1.1;
          background-color: var(--accent-color-lighter) !important;
        }
      }
    }
  }

  @keyframes fly-in {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateX(0px);
    }
  }
</style>