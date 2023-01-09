<script lang="ts">
    import { currentLanguage, username } from "../stores";
    import {onMount} from "svelte";
    import gsap from "gsap";

    $: t_hello = $currentLanguage["hello"]["hello"];
    $: t_namePlaceholder = $currentLanguage["hello"]["namePlaceholder"];
    $: t_nameReason = $currentLanguage["hello"]["nameReason"];
    $: t_start = $currentLanguage["hello"]["continue"];

    username.set(localStorage.getItem("username"));

    let name: string = $username;
    const showContent = () => {
        username.set(name)
        localStorage.setItem("username", name);
        document.getElementById("page-main").classList.remove("hidden");
    };

    const keyPressed = (event) => {
        if(event.keyCode === 13)
            document.getElementById("welcome-link").click();
    }

    onMount(() => {
        if($username)
            showContent();

        gsap.from(".anim", {
            x: -75,
            duration: 0.75,
            opacity: 0,
            stagger: 0.1
        });
    });
</script>

<section id="hello">
    <div>
        <h2 id="greetings" class="anim">
            {t_hello}
            <input type="text" class="anim" placeholder={t_namePlaceholder} bind:value={name} on:keypress={keyPressed}/>
        </h2>
        <label for="greetings" class="anim">{t_nameReason}</label>
        <div class="anim">
            <a id="welcome-link" href="#welcome" on:click={showContent} class="action-link">
                <span class="material-symbols-rounded" >south</span>
                <span>{t_start}</span>
                <span class="material-symbols-rounded">south</span>
            </a>
        </div>

    </div>
</section>

<style lang="scss">
  h2 {
    input {
      font-family: "Poiret One", serif;
      text-transform: uppercase;
      font-size: 55px;

      border: none;
      outline: none;
      border-bottom: black solid 2px;
      background-color: transparent;

      max-width: 500px;
      width: 90%;
    }

    input::placeholder {
      color: var(--desert-sand);
    }
  }

  #hello {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 20px;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 500px) {
    h2 {
      input {
        font-size: 42px;
      }
    }
  }
</style>