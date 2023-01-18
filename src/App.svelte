<script lang="ts">
  import LanguageSelector  from "./lib/language-selector/LanguageSelector.svelte"
  import Hello from "./lib/content/Hello.svelte"
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import {currentLanguage} from "./lib/stores";
  import {onMount} from "svelte";

  // noinspection TypeScriptUnresolvedFunction
  gsap.registerPlugin(ScrollTrigger);

  $: t_inProgress = $currentLanguage["inProgress"];

  onMount(() => {
     if(localStorage.getItem("username")) {
         window.location.href = "#overview";
         document.getElementsByTagName("main").item(0).classList.remove("hide-overflow");
     }
     else window.location.href = "#hello";
  });
</script>

<LanguageSelector />

<main id="page-main" class="hide-overflow">
    <Hello />

    <div id="overview" style="display: flex; justify-content: center; align-items: center; height: 100vh; max-width: 1400px; margin: 0 auto">
        <h1 style="text-align: center">{t_inProgress}</h1>
    </div>
</main>

<style lang="scss">
  main {
    position: relative;
    overflow: hidden;
  }
</style>