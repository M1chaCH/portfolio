<script lang="ts">
    import { currentLanguage, username } from "../stores";

    $: t_hello = $currentLanguage["hello"]["hello"];
    $: t_namePlaceholder = $currentLanguage["hello"]["namePlaceholder"];
    $: t_nameReason = $currentLanguage["hello"]["nameReason"];
    $: t_start = $currentLanguage["hello"]["continue"];

    let name: string = $username;
    const showContent = () => {
        username.set(name)
        document.getElementById("page-main").classList.remove("hidden");
    };
</script>

<div id="nameInput">
    <div>
        <h2 id="greetings">
            {t_hello}
            <input type="text" placeholder={t_namePlaceholder} bind:value={name}/>
        </h2>
        <label for="greetings">{t_nameReason}</label>
        <a href="#content" on:click={showContent}>
            <span class="material-symbols-rounded">south</span>
            <span>{t_start}</span>
            <span class="material-symbols-rounded">south</span>
        </a>
    </div>
</div>

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

  a {
    font-family: "Chivo Mono", monospace;
    font-weight: 100;
    font-size: 18px;

    margin-top: 35px;
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    align-self: flex-end;
    padding: 8px;
    cursor: pointer;

    background-color: var(--linen);
    border: var(--black) 2px solid;
    border-radius: 5px;

    text-decoration: none;
    color: var(--black);

    transition: all 200ms ease-out;
  }

  a:hover {
    background-color: var(--linen-darker);
  }

  a:focus, a:active {
    background-color: var(--linen-darkest);
  }

  #nameInput {
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