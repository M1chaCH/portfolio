<script lang="ts">
  import LanguageSelector  from "./lib/language-selector/LanguageSelector.svelte"
  import Hello from "./lib/content/Hello.svelte"
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import {currentLanguage, currentPart} from "./lib/stores";
  import {onMount} from "svelte";
  import MobileMenuWrapper from "./lib/menu/MobileMenuWrapper.svelte";
  import Career from "./lib/content/Career.svelte";
  import VerticalMenu from "./lib/menu/VerticalMenu.svelte";
  import Skills from "./lib/content/Skills.svelte";
  import Hobbies from "./lib/content/Hobbies.svelte";
  import Projects from "./lib/content/Projects.svelte";
  import type {Links} from "./lib/menu/MenuService";
  import {MOBILE_BREAKPOINT} from "./lib/stores.js";
  import OverviewContainer from "./lib/content/OverviewContainer.svelte";

  // noinspection TypeScriptUnresolvedFunction
  gsap.registerPlugin(ScrollTrigger);

  $: t_inProgress = $currentLanguage["inProgress"];
  let innerWidth = 0;

  onMount(() => {
     if(localStorage.getItem("username")) {
         window.location.href = "#overview";
         document.getElementsByTagName("main").item(0).classList.remove("hide-overflow");
     }
     else window.location.href = "#hello";

     addCurrentPartHooks();
  });

  function addCurrentPartHooks() {
      const parts: Element[] = Array.from(document.getElementsByClassName("part"));

      for (let part of parts) {
          const partId: Links = part.id as Links;

          gsap.from(part, {
              scrollTrigger: {
                  trigger: part,
                  start: "top 25%",
                  end: "bottom 25%",
                  onEnter: () => currentPart.set(partId),
                  onEnterBack: () => currentPart.set(partId)
              }
          });
      }
  }
</script>

<svelte:window bind:innerWidth />
<LanguageSelector />

<main id="page-main" class="hide-overflow">
    {#if innerWidth > $MOBILE_BREAKPOINT}
        <VerticalMenu />
    {:else}
        <MobileMenuWrapper />
    {/if}

    <Hello />
    <OverviewContainer />
    <Career />
    <Skills />
    <Hobbies />
    <Projects />
</main>

<style lang="scss">
  main {
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    gap: 100px;
  }
</style>