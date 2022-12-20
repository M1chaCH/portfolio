<script lang="ts">
  import { currentLanguage } from "./lib/stores";
  import { en, de } from "./lib/languages.js"
  import LanguageSelector  from "./lib/LanguageSelector.svelte"

  const translate = (key: string) => {
    const keys: string[] = key.split("->");

    let obj: any = $currentLanguage[keys.shift()];
  
    keys.forEach(element => obj = obj[element]);

    return obj as string;
  };

  const header: string = translate("header");
  const name: string = "Bob";
  const lang: string = translate("nav->languages")
</script>

<LanguageSelector />
  <h1>{header} {name}</h1>
  <p>{lang}</p>

<style lang="scss">
  
</style>