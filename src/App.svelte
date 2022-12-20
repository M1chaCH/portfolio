<script lang="ts">
  import { currentLanguage } from "./lib/stores";
  import LanguageSelector  from "./lib/LanguageSelector.svelte"

  $: header = $currentLanguage["header"];
  $: lang = $currentLanguage["nav"]["languages"];

  const name: string = "Bob";
</script>

<LanguageSelector />
<h1>{header} {name}</h1>
<p>{lang}</p>

<style lang="scss">
  
</style>