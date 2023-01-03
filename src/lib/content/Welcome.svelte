<script lang="ts">
    import { currentLanguage, username } from "../stores";

    $: t_welcome = $currentLanguage["welcome"]["welcome"];
    $: t_to = $currentLanguage["welcome"]["to"];
    $: t_my = $currentLanguage["welcome"]["my"];
</script>

<div class="container">
    <div class="content">
        <h3>{t_welcome} {$username} {t_to}</h3>
        <h1 id="title">{t_my} <span>Portfolio</span></h1>
        <label for="title">-- Micha Schweizer</label>
    </div>

    <div class="image-container">
    </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    height: 100vh;

    .content {
      display: inline-flex;
      flex-direction: column;
      z-index: 1;

      margin-left: 20vw;

      h1 {
        z-index: 2;
        span {
          color: var(--isabelline);
          background-color: var(--desert-sand);
        }
      }

      h3 {
        transform: translate(-4vw);
        margin: 0;
      }

      label {
        transform: translateX(4vw);
      }
    }

    .image-container {
      position: absolute;
      top: calc(100vh + 150px);
      right: 200px;

      height: 500px;
      width: 500px;
      border-radius: 50%;

      background-image: url("public/images/welcome-image.jpg");
      background-size: 110%;
      background-position-x: -25px;
      background-position-y: -2px;
      background-repeat: no-repeat;
    }
  }

  @media (max-width: 1250px) {
    .container{
      .image-container {
        top: calc(100vh + 50px);
      }
    }
  }

  @media (max-width: 920px) {
    .container{
      .image-container {
        right: 50px;
      }
    }
  }

  @media (max-width: 700px) {
    .container{
      .content {
        margin-left: 5vw;
      }
    }
  }

  @media (max-width: 580px) {
    .container{
      .image-container {
        right: -100px;
      }

      .content {
        margin-left: 10px;
        h1 {
          font-size: 65px;
        }
      }
    }
  }

  @media (max-width: 450px) {
    .container{
      .content {
        h1 {
          max-width: 85vw;
        }
      }
    }
  }
</style>