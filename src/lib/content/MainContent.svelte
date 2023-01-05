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

    onMount(() => {
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

        const containers = Array.from(document.getElementsByClassName("pin-container"));
        containers.forEach(container => {
            gsap.from(".pin-element", {
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "bottom bottom",
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
            <h2 class="float-down">Micha Schweizer</h2>
            <ul id="table-of-contents">
                <li class="float-down">
                    <a href="#career">
                        <span class="material-symbols-rounded">code</span>
                        <span>Career</span>
                    </a>
                </li>
                <li class="float-down">
                    <a href="#career">
                        <span class="material-symbols-rounded">code</span>
                        <span>Projects</span>
                    </a>
                </li>
                <li class="float-down">
                    <a href="#career">
                        <span class="material-symbols-rounded">code</span>
                        <span>Mountainbiker</span>
                    </a>
                </li>
            </ul>
        </section>
    </div>
    <section class="detail-texts">
        <div class="pin-container" id="career">
            <div class="pin-element">
                <h2>{t_question}</h2>
            </div>
        </div>
        <div class="pin-container">
            <div class="pin-element">
                <p>{t_answer}</p>
            </div>
        </div>
        <div class="pin-container">
            <div class="pin-element">
                <p>{t_action}</p>
            </div>
        </div>
    </section>
</div>

<style lang="scss">
  .content-root {
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 40% 60%;
    justify-items: center;

    .overview-container {
      height: 100%;

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
          height: 300px;
          width: 300px;
          margin-bottom: 20px;

          background-size: 170%;
          background-position-x: -110px;
          background-position-y: -50px;
          background-repeat: no-repeat;
          border-radius: 50%;
          background-image: url("images/formal-portrait.jpg");
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
              background-image: linear-gradient(to left, var(--champagne-pink) 50%, transparent 50%);
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

          * {
            margin: 0 10vw;
            text-align: justify;
          }
        }
      }
    }
  }
</style>