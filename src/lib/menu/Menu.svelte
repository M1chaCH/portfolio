<script lang="ts">
    import {currentLanguage} from "../stores";

    $: t_menuWelcome = $currentLanguage["menu"]["welcome"];
    $: t_menuOverview = $currentLanguage["menu"]["overview"];
    $: t_menuCareer = $currentLanguage["menu"]["career"];
    $: t_menuProjects = $currentLanguage["menu"]["projects"];
    $: t_menuHobbies = $currentLanguage["menu"]["hobbies"];
    $: t_menuSkills = $currentLanguage["menu"]["skills"];
</script>

<nav>
    <div class="menu-grid">
        <div class="menu-blob-container">
            <span class="menu-label">{t_menuWelcome}</span>
            <a class="menu-blob" href="#hello">
                <span class="material-symbols-rounded">waving_hand</span>
            </a>
        </div>
        <div class="menu-blob-container current">
            <span class="menu-label">{t_menuOverview}</span>
            <a class="menu-blob" href="#overview">
                <span class="material-symbols-rounded">roofing</span>
            </a>
        </div>
        <div class="menu-blob-container">
            <span class="menu-label">{t_menuCareer}</span>
            <a class="menu-blob" href="#career">
                <span class="material-symbols-rounded">business_chip</span>
            </a>
        </div>
        <div class="menu-blob-container">
            <span class="menu-label">{t_menuHobbies}</span>
            <a class="menu-blob" href="#hobbiew">
                <span class="material-symbols-rounded">directions_bike</span>
            </a>
        </div>
        <div class="menu-blob-container">
            <span class="menu-label">{t_menuProjects}</span>
            <a class="menu-blob" href="#projects">
                <span class="material-symbols-rounded">dashboard</span>
            </a>
        </div>
        <div class="menu-blob-container">
            <span class="menu-label">{t_menuSkills}</span>
            <a class="menu-blob" href="#skills">
                <span class="material-symbols-rounded">cognition</span>
            </a>
        </div>
    </div>
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    .menu-grid {
      --item-size: clamp(50px, 30vw, 100px);

      min-height: 400px;
      width: 100%;
      margin: 0 5vw;

      display: grid;
      grid-template-columns: 33% 33% 33%;
      justify-content: center;
      justify-items: center;
      justify-self: center;
      align-items: center;

      .menu-blob-container {
        transition: all 250ms ease-out;

        .menu-label {
          background-color: var(--accent-color);
          border-radius: 10px;
          padding: 10px;
          transition: all 250ms ease-out;
          box-sizing: border-box;

          display: block;
          width: var(--item-size);
          text-align: center;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 15px;
          color: var(--primary-color);
          opacity: 0;
          scale: 0.9;

          transform: translateY(40px);
        }

        .menu-blob {
          height: var(--item-size);
          width: var(--item-size);
          border-radius: 50%;
          background-color: var(--accent-color);
          transition: all 250ms ease-out;

          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          text-decoration: none;

          span {
            font-size: 40px;
            color: var(--primary-color);
          }
        }
      }
    }

    .menu-blob-container:hover {
      scale: 1.15;

      .menu-blob {
        background-color: var(--accent-color-darker);
      }

      .menu-label {
        background-color: var(--accent-color-darker);
      }
    }

    .menu-blob-container:hover, .current {
      .menu-blob {
        border-radius: 0 0 42px 42px !important;
      }

      .menu-label {
        transform: translateY(20px) !important;
        opacity: 1 !important;
        scale: 1 !important;
      }
    }

    .current {
      .menu-blob {
        background-color: var(--accent-color-lighter) !important;
      }

      .menu-label {
        background-color: var(--accent-color-lighter) !important;
      }
    }
  }

  @media (max-width: 700px) {
    nav {
      .menu-grid {
        grid-template-columns: 50% 50%;

        .menu-blob-container:nth-child(even) {
          transform: translateY(40px);
        }
      }
    }
  }
</style>