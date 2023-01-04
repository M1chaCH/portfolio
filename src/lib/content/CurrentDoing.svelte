<script lang="ts">
    import {currentLanguage, username} from "../stores";
    import gsap from "gsap";
    import {onMount} from "svelte";

    $: nameFilling = $username ? " " + $username + " " : " ";

    $: t_question = $currentLanguage["currentDoing"]["question"];
    $: t_answer = $currentLanguage["currentDoing"]["answer"];
    $: t_action = $currentLanguage["currentDoing"]["action"].replace("{}", nameFilling);
    $: t_contact = $currentLanguage["contact"];
    $: t_contactSubject = $currentLanguage["contactSubject"];

    const removeDark = () => document.getElementsByTagName("html")[0].classList.remove("dark");
    const addDark = () => document.getElementsByTagName("html")[0].classList.add("dark");

    onMount(() => {
        gsap.to(".desk-image", {
            backgroundPositionY: "-300px",
            scrollTrigger: {
                trigger: ".desk-image",
                start: "top bottom",
                end: "bottom top",
                play: "reset",
                scrub: true,
            }
        });

        gsap.to(".current-container", {
            scrollTrigger: {
                trigger: ".current-container",
                start: "top 40%",
                end: "bottom center",
                onEnter: addDark,
                onEnterBack: addDark,
                onLeave: removeDark,
                onLeaveBack: removeDark
            }
        })

        gsap.from(".current-animation", {
            x: -100,
            opacity: 0,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".current-content",
                toggleActions: "restart",
                start: "top 70%",
                end: "center center",
                scrub: true,
            }
        });
    });
</script>

<section id="current-doing" class="current-container">
    <div class="current-content">
        <picture class="portrait-image current-animation"></picture>
        <h1 class="current-animation">{t_question}</h1>
        <div class="current-texts current-animation">
            <p>{t_answer}</p>
            <div>
                <p>{t_action}</p>
                <a class="action-link" href="mailto: micha_ch@outlook.com?subject={t_contactSubject}">{t_contact}</a>
            </div>
        </div>

    </div>
    <picture class="desk-image"></picture>
</section>

<style lang="scss">
  .current-container {
    min-height: 100vh;
    height: fit-content;

    .current-content {
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      position: relative;
      padding-top: 400px;
      background-color: var(--black);
      background-image: url("tile.svg");
      background-position: 50px;
      min-height: calc(100vh - 300px);

      .current-texts {
        margin: auto 5vw;
        padding: 20px;
        gap: 50px;
        display: grid;
        grid-template-columns: clamp(200px, 100%, 400px) clamp(200px, 100%, 400px);
        grid-template-rows: 100%;
        height: 100%;
        justify-content: space-around;
        background-color: var(--black);

        p {
          position: relative;
          color: var(--isabelline);
          text-align: justify;
          font-size: 20px;
          line-height: 140%;
          z-index: 100;
        }
      }

      h1 {
        z-index: 10;
        color: var(--isabelline);
        margin-left: 2vw;
      }

      a {
        padding: 15px 25px;
        border: none;
      }
    }

    .portrait-image {
      position: absolute;
      right: 5vw;
      top: 58vh;
      z-index: 1;

      rotate: 180deg;
      opacity: 0.8;

      height: 200px;
      width: 200px;
      background-size: 170%;
      background-position-x: -70px;
      background-position-y: -30px;
      background-repeat: no-repeat;
      border-radius: 50%;
      background-image: url("images/portrait.jpg");
    }

    .desk-image {
      border-radius: 30px 30px 0 0;
      position: absolute;
      top: 200vh;
      z-index: 0;

      background-image: url("images/desk.jpg");
      background-size: 100%;
      background-position-x: 0;
      background-position-y: -600px;
      background-repeat: no-repeat;

      width: 100%;
      height: 500px;
    }
  }
</style>