<script lang="ts">
  import LanguageSelector  from "./lib/language-selector/LanguageSelector.svelte"
  import Hello from "./lib/content/Hello.svelte"
  import Welcome from "./lib/content/Welcome.svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import {currentLanguage} from "./lib/stores";
  import MainContent from "./lib/content/MainContent.svelte";
  import {onMount} from "svelte";

  // noinspection TypeScriptUnresolvedFunction
  gsap.registerPlugin(ScrollTrigger);

  $: t_inProgress = $currentLanguage["inProgress"];

  onMount(() => {
      if(localStorage.getItem("username")) window.location.href = "#welcome";
      else window.location.href = "#hello";
  });
</script>

<LanguageSelector />

<main id="page-main" class="hidden">
    <Hello />

    <div id="content">
        <Welcome />
        <MainContent />
        <div style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1>{t_inProgress}</h1>
        </div>
    </div>
</main>

<style lang="scss">
  main {
    position: relative;
    overflow: hidden;
  }

  .hidden {
    height: 100vh;
    overflow: hidden;
  }
</style>