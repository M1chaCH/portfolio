<script lang="ts">
    import { currentLanguage, username } from "../stores";

    $: header = $currentLanguage["hello"];
    $: namePlaceholder = $currentLanguage["namePlaceholder"];
    $: nameReason = $currentLanguage["nameReason"];
    $: start = $currentLanguage["continue"];

    let name: string = $username;
    const showContent = () => {
        username.set(name)
        document.getElementById("page-main").classList.remove("hidden");
    };
</script>

<div id="nameInput">
    <div>
        <h2 id="greetings">
            {header}
            <input type="text" placeholder={namePlaceholder} bind:value={name}/>
        </h2>
        <label for="greetings">{nameReason}</label>
        <a href="#content" on:click={showContent}>
            <span class="material-symbols-rounded">south</span>
            <span>{start}</span>
            <span class="material-symbols-rounded">south</span>
        </a>
    </div>
</div>

<style lang="scss">
  h2 {
    display: inline-block;
    font-family: "Poiret One", serif;
    text-transform: uppercase;
    font-size: 55px;
    margin: 0 0 10px;

    input {
      font-family: "Poiret One", serif;
      text-transform: uppercase;
      font-size: 55px;

      border: none;
      outline: none;
      border-bottom: black solid 2px;
      background-color: transparent;
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

  label {
    font-family: "Chivo Mono", monospace;
    font-style: italic;
    font-weight: 100;
    font-size: 17px;
    letter-spacing: -1px;
  }

  #nameInput {
    display: flex;
    margin: auto;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
    }
  }
</style>