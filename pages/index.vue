<template>
  <v-row class="page home" no-gutters>
    <v-col class="content">
      <v-row no-gutters class="who-am-i">
        <hgroup>
          <h1>I am Dyontai <span class="visibility-hidden">Staton</span></h1>
          <p class="text">
            A Passionate Self Taught Engineer of All Disciplines
          </p>
        </hgroup>
      </v-row>
      <v-row no-gutters class="download-resume-bar">
        <a class="download-resume h5" href="/Resume.pdf" download>
          <img src="~/assets/svg/download-file.svg" alt="Download File" />
          Download Resume</a
        >
      </v-row>
      <div no-gutters class="honorable-mentions-wrapper">
        <h2 class="h5">Honorable Mentions</h2>
        <ul class="honorable-mentions">
          <li class="brand raredemons">
            <a target="_blank" href="https://raredemons.us">
              <img
                class="icon"
                src="~/assets/svg/RAREDEMONSIcon.svg"
                alt="RARE DEMONS Brand Icon"
              />
              <img
                class="logo"
                src="~/assets/svg/RAREDEMONSLogo.svg"
                alt="RARE DEMONS Brand Logo"
              />
            </a>
          </li>
          <li class="brand deepspore">
            <a target="_blank">
              <img
                class="icon"
                src="~/assets/svg/DeepsporeIcon.svg"
                alt="Deepspore Brand Icon"
              />
              <img
                class="logo"
                src="~/assets/svg/DeepsporeLogoIcon.svg"
                alt="Deepspore Brand Logo"
              />
            </a>
          </li>
          <li class="brand staton.cc">
            <a target="_blank" href="https://staton.cc">
              <img
                class="icon"
                src="~/assets/svg/StatonIcon.svg"
                alt="Staton Web Development Brand Icon"
              />
              <img
                class="logo"
                src="~/assets/svg/StatonLogo.svg"
                alt="Staton Web Development Brand Logo"
              />
            </a>
          </li>
          <li class="brand dylights">
            <a target="_blank" href="https://baked-dylights.web.app">
              <img
                class="icon"
                src="~/assets/svg/DylightsIcon.svg"
                alt="Dylights Brand Icon"
              />
              <img
                class="logo"
                src="~/assets/svg/DylightsLogo.svg"
                alt="Dylights Brand Logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </v-col>
    <v-col class="portrait-wrapper">
      <img
        src="~/assets/img/Portrait.jpg"
        alt="Self Portrait of Dyontai Staton"
        class="self-portrait"
        rel="preload"
      />
    </v-col>
    <v-col class="sidebar">
      <ul class="social-list">
        <li class="social">
          <a href="mailto:dyontai@staton.cc/" target="_blank" title="Email"
            ><img src="~/assets/svg/at.svg" alt="Email"
          /></a>
        </li>
        <li class="social">
          <a
            href="https://www.instagram.com/dyon.tai/"
            target="_blank"
            title="Instagram"
            ><img src="~/assets/svg/instagram.svg" alt="Instagram"
          /></a>
        </li>
        <li class="social">
          <a
            href="https://www.facebook.com/dyontai.staton.716/"
            target="_blank"
            title="Facebook"
            ><img src="~/assets/svg/facebook.svg" alt="Facebook"
          /></a>
        </li>
        <li class="social">
          <a href="https://twitter.com/RAREDYP" target="_blank" title="Twitter"
            ><img src="~/assets/svg/twitter.svg" alt="Twitter"
          /></a>
        </li>
        <li class="social">
          <a
            href="https://www.youtube.com/channel/UCViVQybiBekLK4kX4lrrGgA"
            target="_blank"
            title="Youtube Music Channel, Deeptones"
            ><img
              src="~/assets/svg/youtubemusic.svg"
              alt="Youtube Music Channel, Deeptones"
          /></a>
        </li>
        <li class="social">
          <a
            href="https://github.com/dyontaistaton"
            target="_blank"
            title="Github"
            ><img src="~/assets/svg/github.svg" alt="Github"
          /></a>
        </li>
        <li class="social">
          <a
            href="https://www.linkedin.com/in/dyontai/"
            target="_blank"
            title="LinkedIn"
            ><img src="~/assets/svg/linkedin.svg" alt="LinkedIn"
          /></a>
        </li>
        <li class="social">
          <a
            href="https://www.youtube.com/channel/UC4Ut5FEQE1dd8diRnpRxkvg"
            target="_blank"
            title="Youtube Channel, RARE®"
            ><img src="~/assets/svg/youtube.svg" alt="Youtube Channel, RARE®"
          /></a>
        </li>
        <li class="social">
          <a
            href="https://www.tiktok.com/@dyontai.staton"
            target="_blank"
            title="TikTok"
            ><img src="~/assets/svg/tiktok.svg" alt="TikTok"
          /></a>
        </li>
        <li class="social">
          <a href="https://cash.app/$dyontai" target="_blank" title="Cash App"
            ><img src="~/assets/svg/cashapp.svg" alt="Cash App"
          /></a>
        </li>
        <li class="social">
          <a
            href="https://discord.com/users/237326223838150656"
            target="_blank"
            title="Discord"
            ><img src="~/assets/svg/discord.svg" alt="Discord"
          /></a>
        </li>
        <li class="social">
          <a href="tel:+1-502-221-3650" target="_blank" title="Phone"
            ><img src="~/assets/svg/phone.svg" alt="Phone"
          /></a>
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/typology.scss";

.page.home {
  position: relative;
  height: 100vh;
  max-height: 100vh;
  background-image: url("~/assets/img/BackgroundImage.jpg");
  background-size: cover;
  background-position: center;
  padding: 0 80px;
  padding-left: 200px;
  overflow: hidden;

  @media screen and (max-width: 1100px) {
    padding-left: 120px;
  }

  @media screen and (max-width: 600px) {
    padding-left: 100px;
    padding-right: 30px;
    background-position: -420px -250px;
  }

  @media screen and (max-width: 500px) {
    padding-left: 80px;
    padding-right: 20px;
  }
  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 70px;
    bottom: 0;
    background: $black;

    @media screen and (max-width: 500px) {
      width: 55px;
    }

    .social-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      align-items: center;

      .social {
        list-style: none;
        width: fit-content;

        & + .social {
          margin-top: 30px;

          @media screen and (max-width: 500px) {
            margin-top: 35px;
          }

          @media screen and (max-height: 900px) {
            margin-top: 20px;
          }
        }

        a {
          display: block;
          height: 35px;
          width: 35px;

          @media screen and (max-width: 500px) {
            height: 30px;
            width: 30px;
          }

          img {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }

  .portrait-wrapper {
    flex: 40%;
    max-width: 40%;
    pointer-events: none;

    @media screen and (max-width: 1500px) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
    }

    @media screen and (max-width: 720px) {
      right: -70px;
    }

    @media screen and (max-width: 680px) {
      right: -130px;
    }

    @media screen and (max-width: 600px) {
      right: -80px;
    }

    .self-portrait {
      width: 100%;
      object-fit: contain;
      mix-blend-mode: multiply;
      animation: heartbeat 20s infinite;
      will-change: transform opacity;

      @media screen and (max-width: 830px) {
        margin: auto;
        max-width: 210px;
        display: block;
        margin-right: 10px;
      }

      @keyframes heartbeat {
        0% {
          transform: scale(1);
          opacity: 0.08;
        }
        85% {
          transform: scale(1.05);
          opacity: 0.95;
        }
        100% {
          transform: scale(1);
          opacity: 0.08;
        }
      }
    }
  }

  .content {
    max-width: 60%;
    overflow: visible;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1500px) {
      max-width: 70%;
    }

    @media screen and (max-width: 1200px) {
      max-width: 100%;
    }

    @media screen and (max-width: 900px) {
      justify-content: flex-start;
    }

    .who-am-i {
      margin-bottom: 80px;
      flex-grow: 0;

      @media screen and (max-width: 900px) {
        margin-top: 120px;
      }

      @media screen and (max-width: 500px) {
        margin-top: 70px;
        margin-bottom: 50px;
      }

      @media screen and (max-height: 900px) {
        margin-top: 50px;
        margin-bottom: 40px;
      }

      hgroup {
        @media screen and (max-width: 820px) {
          max-width: 390px;
          text-align: center;
        }

        @media screen and (max-width: 600px) {
          max-width: 60vw;
        }

        @media screen and (max-width: 500px) {
          p {
            font-size: 4.5vw;
            line-height: 1.8;
          }
        }

        h1 {
          font-size: 4.2vw;
          line-height: 1;

          @media screen and (max-width: 1500px) {
            font-size: 58px;
          }

          @media screen and (max-width: 900px) {
            font-size: 48px;
          }

          @media screen and (max-width: 600px) {
            font-size: 9.4vw;
          }
        }
      }
    }

    .download-resume-bar {
      flex-grow: 0;
      position: relative;
      background-color: $black;
      left: -150px;
      width: 100vw;
      height: 70px;
      align-items: center;
      padding-left: 150px;
      margin-bottom: 100px;
      box-shadow: 0px 4px 11px rgba(4, 15, 22, 0.3);

      @media screen and (max-width: 1100px) {
        padding-left: 120px;
        left: -120px;
      }

      @media screen and (max-width: 750px) {
        margin-bottom: 50px;
        justify-content: center;
        padding-left: 70px;
      }

      @media screen and (max-height: 900px) {
        margin-bottom: 35px;
      }

      @media screen and (max-width: 600px) {
        left: -100px;
      }

      @media screen and (max-width: 600px) {
        left: -80px;
      }

      @media screen and (max-width: 500px) {
        max-height: 55px;
      }

      .download-resume {
        @include heading-style($h6-font-size, $h6-line-height);
        font-family: "Pirata One";
        text-decoration: none;
        color: white;
        text-transform: lowercase;

        > img {
          margin-right: 10px;
          height: 21px;
        }
      }
    }

    .honorable-mentions-wrapper {
      @media screen and (max-width: 900px) {
        > .h5 {
          font-size: 30px;
          text-align: center;
        }
      }

      @media screen and (max-width: 530px) {
        > .h5 {
          font-size: 5vw;
        }
      }

      @media screen and (max-width: 500px) {
        > .h5 {
          font-size: 6.5vw;
        }
      }

      .honorable-mentions {
        display: flex;
        flex-grow: 0;
        align-items: center;
        justify-content: flex-start;
        margin-top: 50px;
        column-gap: 80px;
        row-gap: 60px;
        flex-wrap: wrap;

        @media screen and (max-height: 900px) {
          margin-top: 30px;
          row-gap: 20px;
        }

        @media screen and (max-width: 1500px) {
          column-gap: 40px;
          row-gap: 30px;
        }

        @media screen and (max-width: 790px) {
          flex-direction: column;
          align-items: flex-start;
          row-gap: 20px;
          padding: 0 40px;
        }

        @media screen and (max-width: 500px) {
          justify-content: center;
          flex-direction: row;
          row-gap: 45px;
          padding: 0;
        }

        .brand {
          list-style-type: none;
          flex-shrink: 0;
          flex-grow: 1;
          width: fit-content;

          &:hover {
            .icon {
              outline-color: $black;
              height: 123px;

              @media screen and (max-width: 1500px) {
                height: 90px;
              }

              @media screen and (max-width: 530) {
                height: 16vw;
              }

              @media screen and (max-width: 500px) {
                height: 25vw;
              }

              @media screen and (max-height: 600px) {
                height: 21vw;
              }
            }
          }

          .icon {
            margin-right: 23px;
            height: 120px;
            transition: 0.3s ease-in-out;
            outline: 5px dashed transparent;
            border-radius: 100%;
            outline-offset: 10px;

            @media screen and (max-width: 500px) {
              display: block;
              margin: auto;
            }
          }

          .logo {
            max-height: 120px;
            height: 120px;
            padding: 20px 0;

            @media screen and (max-width: 500px) {
              display: none;
            }
          }

          .logo,
          .icon {
            height: 120px;

            @media screen and (max-width: 1500px) {
              height: 90px;
            }

            @media screen and (max-width: 530px) {
              height: 16vw;
            }

            @media screen and (max-width: 500px) {
              height: 25vw;
            }

            @media screen and (max-height: 600px) {
              height: 21vw;
            }
          }
        }
      }
    }
  }
}
</style>

