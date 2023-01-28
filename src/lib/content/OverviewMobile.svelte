<script lang="ts">
    import {currentLanguage, username} from "../stores";

    $: t_welcome = $currentLanguage["overview"]["welcome"];
    $: t_description = $currentLanguage["overview"]["description"];
</script>

<section id="overview">
    <div class="text-container">
        <h2>{t_welcome} {$username}</h2>
        <p>{t_description}</p>
    </div>
    <img src="assets/images/welcome-image.jpg" alt="welcome-image" />
</section>

<style lang="scss">
  #overview { // FIXME, this thing has overflow-y for some reason.
    height: 100vh;
    width: 100vw;

    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;

    .text-container {
      margin: 0 30px;
      position: absolute;
      bottom: 0;

      h2 {
        text-transform: uppercase;
      }
    }

    img {
      border-radius: 50px;
      margin-left: 30px;

      position: absolute;
      top: 20vh;
      left: -100px;

      width: 90vw;
      height: 45vh;
      object-fit: cover;
    }
  }
</style>