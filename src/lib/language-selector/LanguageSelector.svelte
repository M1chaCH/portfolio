<script lang="ts">
    import { currentLanguage } from "../stores";
    import { getLanguage } from "./languages.js"
</script>

<div>
    <button on:click={() => currentLanguage.set(getLanguage("EN"))}>🏴󠁧󠁢󠁥󠁮󠁧󠁿</button>
    <button on:click={() => currentLanguage.set(getLanguage("DE"))}>🇩🇪</button>
</div>

<style lang="scss">
    div {
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 20px;

        display: flex;
        gap: 20px; 
        flex-flow: row nowrap;

        button {
            all: unset;
            font-size: 40px;
            cursor: pointer;
            transition: all 200ms ease-out;
            will-change: auto;

            &:hover {
                scale: 1.15;
            }
        }
    }
</style>