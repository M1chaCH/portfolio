<script lang="ts">

import CiclingArrow from "./CiclingArrow.svelte";
</script>



<section id="mobile-menu">
    <span id="menu-burger" class="material-symbols-rounded">close</span>
    <div id="arrows-container">
        <CiclingArrow />
        <span>MENU</span>
    </div>
</section>

<style lang="scss">
  #menu-burger {
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
    margin: 5vw;

    font-size: 40px;
    color: var(--accent-color);

    transition: all 250ms ease-out;
    rotate: 45deg;
  }

  #arrows-container {
    position: fixed;
    top: 35px;
    right: 60px;
  }
</style>