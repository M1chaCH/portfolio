<script lang="ts">
    import { currentLanguage } from "../stores";
    import {getLanguage} from "./languages.js"
    import type {Languages} from "./languages"
    import {onMount} from "svelte";

    let storedLang = localStorage.getItem("lang");
    let currentLanguageIdentifier: Languages = storedLang ? storedLang as Languages : "EN";

    onMount(() => {
        // due to svelte css class processing the class has to be used on default page, now remove the default.
        document.getElementById("EN").classList.remove("current-language");
        setLanguage(currentLanguageIdentifier, true)
    });

    function setLanguage(identifier: Languages, first?: boolean) {
        if(first || identifier !== currentLanguageIdentifier) {
            currentLanguage.set(getLanguage(identifier));
            localStorage.setItem("lang", identifier);

            document.getElementById(currentLanguageIdentifier).classList.remove("current-language");
            document.getElementById(identifier).classList.add("current-language");

            currentLanguageIdentifier = identifier;
        }
    }
</script>

<div>
<!--every language button needs to have an id that matches with its language identifier-->
    <button id="EN" class="language-button current-language" on:click={() => setLanguage("EN")}>EN󠁿</button>
    <button id="DE" class="language-button" on:click={() => setLanguage("DE")}>DE</button>
</div>

<style lang="scss">
    div {
        z-index: 999;
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 20px;

        display: flex;
        gap: 20px; 
        flex-flow: row nowrap;

        .language-button {
            all: unset;
            opacity: 0.5;
            font-size: 35px;
            font-weight: 600;
            cursor: pointer;
            transition: all 200ms ease-out;
            will-change: auto;

            &:hover {
                scale: 1.15;
                opacity: 1;
                font-weight: 800;
            }
        }
    }

    .current-language {
      opacity: 0.7 !important;
    }
</style>