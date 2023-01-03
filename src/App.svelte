<script lang="ts">
  import LanguageSelector  from "./lib/language-selector/LanguageSelector.svelte"
  import Hello from "./lib/content/Hello.svelte"
  import Welcome from "./lib/content/Welcome.svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);
</script>

<LanguageSelector />

<main id="page-main" class="hidden">
    <Hello />

    <div id="content">
        <Welcome />
    </div>
</main>

<style lang="scss">
  main {
    position: relative;
    overflow-y: hidden;
  }

  .hidden {
    height: 100vh;
    overflow: hidden;
  }
</style>