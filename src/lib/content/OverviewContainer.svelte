<script lang="ts">
    import {MOBILE_BREAKPOINT} from "../stores";
    import OverviewMobile from "./OverviewMobile.svelte";
    import Overview from "./Overview.svelte";

    const mobile: boolean = window.innerWidth < $MOBILE_BREAKPOINT;

    // this container component is due to the currentPart listener. It does not work if two elements have the same id.
</script>

<section id="overview" class="part">
    {#if mobile}
        <OverviewMobile />
    {:else}
        <Overview />
    {/if}
</section>