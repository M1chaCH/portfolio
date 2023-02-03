<script lang="ts">
    import {currentLanguage, username} from "../stores";
    import LargeMainMenu from "../menu/Menu.svelte";

    $: t_welcome = $currentLanguage["overview"]["welcome"];
    $: t_description = $currentLanguage["overview"]["description"];
</script>

<div id="big-overview">
    <div class="content-grid">
        <div class="text-container">
            <h2>{t_welcome} {$username}</h2>
            <p>{t_description}</p>
        </div>
        <img src="assets/images/welcome-image.jpg" alt="welcome-image" />
    </div>
    <LargeMainMenu />
</div>

<style lang="scss">
  #big-overview {
    min-height: 100vh;
    max-width: 1400px;
    margin: 0 auto;
    padding: 50px 20px;
    box-sizing: border-box;

    .content-grid {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 40vh;
      align-items: center;

      .text-container {
        margin-right: 30px;

        h2 {
          text-transform: uppercase;
        }
      }

      img {
        border-radius: 50px;
        margin-left: 30px;

        width: calc(100% - 30px);
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>