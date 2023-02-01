<script lang="ts">
  import LanguageSelector  from "./lib/language-selector/LanguageSelector.svelte"
  import Hello from "./lib/content/Hello.svelte"
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import {currentLanguage} from "./lib/stores";
  import {onMount} from "svelte";
  import Overview from "./lib/content/Overview.svelte";
  import OverviewMobile from "./lib/content/OverviewMobile.svelte";
  import MobileMenuWrapper from "./lib/menu/MobileMenuWrapper.svelte";
  import Career from "./lib/content/Career.svelte";
  import VerticalMenu from "./lib/menu/VerticalMenu.svelte";
  import Skills from "./lib/content/Skills.svelte";
  import Hobbies from "./lib/content/Hobbies.svelte";
  import Projects from "./lib/content/Projects.svelte";

  // noinspection TypeScriptUnresolvedFunction
  gsap.registerPlugin(ScrollTrigger);

  const MOBILE_BREAKPOINT: number = 700;

  $: t_inProgress = $currentLanguage["inProgress"];
  let innerWidth = 0;

  onMount(() => {
     if(localStorage.getItem("username")) {
         window.location.href = "#overview";
         document.getElementsByTagName("main").item(0).classList.remove("hide-overflow");
     }
     else window.location.href = "#hello";
  });
</script>

<svelte:window bind:innerWidth />
<LanguageSelector />

<main id="page-main" class="hide-overflow">
    <Hello />
    {#if innerWidth > MOBILE_BREAKPOINT}
        <Overview />
        <VerticalMenu />
    {:else}
        <OverviewMobile />
        <MobileMenuWrapper />
    {/if}
    <Career />
    <Skills />
    <Hobbies />
    <Projects />

    <!--<div id="in-progress" style="display: flex; justify-content: center; align-items: center; height: 100vh; max-width: 1400px; margin: 0 auto">
        <h1 style="text-align: center">{t_inProgress}</h1>
    </div>-->
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