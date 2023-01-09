<script lang="ts">
    import {currentLanguage, username} from "../stores";
    import gsap from "gsap";
    import {onMount} from "svelte";

    $: nameFilling = $username ? " " + $username + " " : " ";

    $: t_welcome = $currentLanguage["welcome"]["welcome"];
    $: t_title = $currentLanguage["career"]["title"];
    $: t_body = $currentLanguage["career"]["body"];
    $: t_body2 = $currentLanguage["career"]["body2"];
    $: t_action = $currentLanguage["career"]["action"].replace("{}", nameFilling);
    $: t_contact = $currentLanguage["contact"];
    $: t_contactSubject = $currentLanguage["contactSubject"];

    let openMenuAnim;
    let open: boolean = false;
    // makes sure that the burger is only rendered when needed.
    let shown: boolean = false;

    const toggleMenu = () => {
        if(shown) {
            document.getElementsByClassName("burger-icon")[0].classList.toggle("burger-icon-closed");
            document.getElementsByTagName("body")[0].classList.toggle("hide-overflow");

            if(open) openMenuAnim.reverse();
            else openMenuAnim.restart();
            open = !open;
        }
    };

    const toggleBurgerDisplay = () => {
        if(!shown) {
            document.getElementsByClassName("burger")[0].classList.toggle("burger-hidden");
            shown = true;
        }
    };

    onMount(() => {
        if(window.innerWidth >= 1000) {
            gsap.from(".overview", {
                scrollTrigger: {
                    trigger: ".overview-container",
                    start: "top top",
                    end: "bottom bottom",
                    pin: true,
                    scrub: true,
                    toggleActions: "restart",
                    pinSpacing: false,
                }
            });

            gsap.from(".float-down", {
                y: -50,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".overview",
                    start: "top 70%",
                    end: "top -10%",
                    scrub: true,
                    toggleActions: "restart",
                }
            });
        } else {
            openMenuAnim = gsap.to(".overview", {
                left: 0,
                paused: true,
                duration: 0.4,
            });

            gsap.from(".burger", {
                right: -70,
                opacity: 0,
                scrollTrigger: {
                    trigger: ".pin-container",
                    scrub: true,
                    start: "top 20%",
                    end: "top top",
                    onEnter: toggleBurgerDisplay,
                }
            });
        }

        const containers = Array.from(document.getElementsByClassName("pin-container"));
        containers.forEach(container => {
            gsap.from(".pin-element", {
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "bottom bottom",
                    anticipatePin: 1,
                    pin: true,
                    scrub: true,
                    toggleActions: "restart",
                    pinSpacing: false,
                }
            });

            const element = container.getElementsByClassName("pin-element")[0];
            gsap.from(element, {
                opacity: 0,
                ease: "power1.in",
                scrollTrigger: {
                    trigger: container,
                    start: "top 60%",
                    end: "top 20%",
                    toggleActions: "restart",
                    scrub: true,
                }
            });
        });
    });

</script>

<div class="content-root">
    <div class="overview-container">
        <section class="overview">
            <div id="formal-image" class="float-down"></div>
            <div>
                <h2 class="float-down">Micha Schweizer</h2>
                <ul id="table-of-contents">
                    <li class="float-down">
                        <a href="#welcome" on:click={toggleMenu}>
                            <span class="material-symbols-rounded">code</span>
                            <span>{t_welcome}</span>
                        </a>
                    </li>
                    <li class="float-down">
                        <a href="#career" on:click={toggleMenu}>
                            <span class="material-symbols-rounded">code</span>
                            <span>{t_title}</span>
                        </a>
                    </li>
                    <li class="float-down">
                        <a href="#career" on:click={toggleMenu}>
                            <span class="material-symbols-rounded">code</span>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li class="float-down">
                        <a href="#career" on:click={toggleMenu}>
                            <span class="material-symbols-rounded">code</span>
                            <span>Mountainbiker</span>
                        </a>
                    </li>
                </ul>
            </div>

        </section>
    </div>
    <section class="detail-texts">
        <div class="pin-container" id="career">
            <div class="pin-element">
                <h2 class="pin-content">{t_title}</h2>
            </div>
        </div>
        <div class="pin-container">
            <div class="pin-element">
                <p class="pin-content">{t_body}</p>
            </div>
        </div>
        <div class="pin-container">
            <div class="pin-element">
                <p class="pin-content">{t_body2}</p>
            </div>
        </div>
        <div class="pin-container">
            <div class="pin-element">
                <div class="pin-content">
                    <p style="margin-bottom: 20px">{t_action}</p>
                    <a class="action-link" href="mailto: micha_ch@outlook.com?subject={t_contactSubject}">{t_contact}</a>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="burger burger-hidden" on:click={toggleMenu}>
    <div class="burger-icon burger-icon-closed"></div>
</div>

<style lang="scss">
  .content-root {
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 40% 60%;
    justify-items: center;

    .overview-container {
      height: 100%;
      margin-left: 3vw;

      .overview {
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;

        h2 {
          margin-bottom: 20px;
        }

        #formal-image {
          rotate: 180deg;
          opacity: 0.8;
          margin-bottom: 20px;

          min-height: 200px;
          height: 23vw;
          max-height: 350px;
          min-width: 200px;
          width: 23vw;
          max-width: 350px;

          background-size: 170%;
          background-position-x: -110px; // TODO cut the final image so that it does not need this.
          background-position-y: -50px;
          background-repeat: no-repeat;
          border-radius: 50%;
          background-image: url("/assets/images/formal-portrait.jpg");
        }

        #table-of-contents {
          list-style-type: none;
          padding: 0;
          margin: 0;

          li {
            a {
              margin: 8px 0;
              padding: 8px 15px;
              display: flex;
              flex-flow: row nowrap;
              gap: 12px;
              align-items: center;

              font-family: "Chivo Mono", monospace;
              font-weight: normal;
              font-size: 20px;

              cursor: pointer;
              text-decoration: none;

              color: var(--black);
              background-image: linear-gradient(to left, var(--desert-sand) 50%, transparent 50%);
              background-size: 200% 100%;
              background-position: 0;

              transition: background-position 250ms ease-out;
            }

            a:hover {
              background-position: -100%;
            }
          }
        }
      }
    }

    .detail-texts {
      display: grid;
      grid-template-columns: 100%;
      grid-auto-rows: 150vh;
      align-items: center;
      overflow-y: hidden;

      .pin-container {
        height: 100%;

        .pin-element {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column nowrap;

          .pin-content {
            margin: 0 10vw;
            width: clamp(200px, 100%, 500px);
            text-align: justify;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .content-root {
      grid-template-columns: 0 100%;

      .overview-container {
        overflow-x: hidden;

        .overview {
          z-index: 100;
          position: fixed;
          top: 0;
          left: 100vw;
          bottom: 0;

          background-color: var(--isabelline);
          width: 100vw;
        }
      }

      .detail-texts {
        margin: 0 20px;
      }
    }

    .burger {
      display: inline-block;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 999;

      margin: 15px;
      cursor: pointer;

      height: 60px;
      width: 60px;

      .burger-icon {
        width: 100%;
        height: 100%;
        padding: 0;
        background-image: url("/assets/ch-burger.svg");

        transition: all 400ms ease-out;
        transform: scale(-1, 1);
      }

      .burger-icon-closed {
        transform: scale(1, 1) !important;
      }
    }

    .burger-hidden {
      display: none;
    }
  }
</style>