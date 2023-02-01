<script lang="ts">

    import {onMount} from "svelte";

    onMount(() => {
        const images = Array.from(document.getElementsByClassName("image"));
        let index = 0;
        setInterval(() => {
            images[index].classList.toggle("hidden")

            if(index !== 0) images[index - 1].classList.toggle("hidden")
            else images[images.length - 1].classList.toggle("hidden")

            if(index === images.length - 1) index = 0;
            else index++;
        }, 130);
    });
</script>

<div>
    <img class="image hidden" alt="arrow1" src="assets/images/asset-1-small.svg" />
    <img class="image hidden" alt="arrow2" src="assets/images/asset-2-small.svg" />
    <img class="image hidden" alt="arrow3" src="assets/images/asset-3-small.svg" />
    <img class="image" alt="arrow4" src="assets/images/asset-2-small.svg" />
</div>

<style lang="scss">
    div {
      width: fit-content;
    }

    .image {
      width: 100px;
      height: 100px;
    }

    .hidden {
      display: none;
    }
</style>