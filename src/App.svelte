<script lang="ts">
  import { currentLanguage } from "./lib/stores";
  import type { Language } from "./lib/stores";
  import { en, de } from "./lib/languages.ts"
  import Header  from "./lib/Header.svelte"

  export const translate = (key: string) => {
    const keys: string[] = key.split("->");

    let obj: any; 
    switch($currentLanguage){
        case "DE":
            obj = de[keys.shift()]; 
        default: 
            obj = en[keys.shift()]; 
    }

    keys.forEach(element => obj = obj[element]);
    return obj as string;
  };

  export const setLanguage = (lang: Language) => currentLanguage.set(lang);

  const header: string = translate("header");
  const name: string = "Bob";
  const lang: string = translate("nav->languages")
</script>

<Header translate={translate} setLanguage={setLanguage}/>
<h1>{header} {name}</h1>
<p>{lang}</p>

<style lang="scss">
  
</style>