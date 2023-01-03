<script lang="ts">
  import LanguageSelector  from "./lib/language-selector/LanguageSelector.svelte"
  import Hello from "./lib/content/Hello.svelte"
  import Welcome from "./lib/content/Welcome.svelte";
</script>

<LanguageSelector />

<!--<main id="page-main" class="hidden">-->
<main id="page-main" class="">
    <Hello />

    <div id="content">
        <Welcome />
    </div>
</main>

<style lang="scss">
  main {
    position: relative;
  }

  .hidden {
    height: 100vh;
    overflow: hidden;
  }
</style>