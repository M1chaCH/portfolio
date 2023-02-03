<script lang="ts">
    import {currentLanguage, username} from "../stores";
    import {onMount} from "svelte";
    import gsap from "gsap";

    onMount(initGsapAnimations);

    $: t_welcome = $currentLanguage["hello"]["welcome"];
    $: t_start = $currentLanguage["hello"]["continue"];
    $: t_namePlaceholder = $currentLanguage["hello"]["namePlaceholder"];
    $: t_nameReason = $currentLanguage["hello"]["nameReason"];

    username.set(localStorage.getItem("username"))
    let name: string = $username;

    function initGsapAnimations() {
        // noinspection TypeScriptUnresolvedFunction (this function actually exists, but ts can't find it 🤷)
        gsap.fromTo(".bounce", {
            y: -20,
            opacity: 0,
            scale: 0.8,
        }, {
            y: 2,
            opacity: 1,
            scale: 1,
            ease: "power3.inOut",
            duration: 1,
            repeatDelay: 2,
            repeat: -1,
        });
    }

    function showMoreContent() {
        document.getElementsByTagName("main").item(0).classList.remove("hide-overflow");
        name = name === null ? "" : name;
        username.set(name);
        localStorage.setItem("username", name)
    }

    function keyInputListener(event) {
        if(event.key === "Enter")
            document.getElementById("continue-link").click();
    }
</script>

<section id="hello" class="part">
    <h1>{t_welcome}</h1>
    <p>{t_nameReason}</p>
    <a id="continue-link" href="#overview" class="action-link" on:click={showMoreContent}>
        <span class="material-symbols-rounded bounce" >south</span>
        <span>{t_start}</span>
        <span class="material-symbols-rounded bounce">south</span>
    </a>
    <input type="text" placeholder={t_namePlaceholder} bind:value={name} on:keypress={keyInputListener}/>
</section>

<style lang="scss">
  #hello {
    display: grid;
    grid-template-columns: 65% 35%;
    grid-auto-rows: auto;
    justify-content: center;
    align-content: center;

    min-height: 100vh;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;

    h1 {
      grid-column: 1/3;
    }

    input {
      grid-column: 1/3;
      margin-top: 10vh;
    }

    a {
      justify-self: end;
      align-self: center;
    }
  }

  @media (max-width: 800px) {
    #hello {
      grid-template-columns: 100%;
      justify-items: center;

      h1,input {
        grid-column: 1/2;
      }

      p {
        grid-row: 2/3;
      }

      a {
        grid-row: 4/5;
        justify-self: center;
        margin-top: 10vh;
      }

      a, input {
        width: 95%;
        max-width: 450px;
      }

      input {
        grid-row: 3/4;
        margin-top: 5vh;
      }
    }
  }
</style>