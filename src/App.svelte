<script lang="ts">
  import LanguageSelector  from "./lib/language-selector/LanguageSelector.svelte"
  import Hello from "./lib/content/Hello.svelte"
  import {username} from "./lib/stores.js";
</script>

<LanguageSelector />

<main id="page-main" class="hidden">
    <Hello />

    <div id="content" style="height: 5000px;">
        Welcome to the page {$username}
    </div>
</main>

<style lang="scss">
  .hidden {
    height: 100vh;
    overflow: hidden;
  }
</style>