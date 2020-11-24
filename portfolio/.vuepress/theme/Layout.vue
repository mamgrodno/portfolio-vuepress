<template>
  <div class="wrapper">
    <Navbar :logo="$site.themeConfig.logo" :sticky="$route.path === '/'" />

    <div id="main-container" class="container">

      <!-- Works list -->
      <div
        v-if="$route.path === '/'"
        
      >
        <Content/>
      </div>

      <!-- Single project view -->
      <div v-if="isSingleProject">

        <transition name="router-anim" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
        <!-- <SingleProjectHeader
          :title="$page.frontmatter.heading"
          :year="$page.frontmatter.year.toString()"
          :categories="$page.frontmatter.categories"
        /> -->
        </transition>
        <transition name="router-anim" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
        <Content/>
        </transition>
      </div>

      <!-- Single little project -->
      <div v-if="isSingleProj">
        <transition name="router-anim" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
        <!-- <SingleProjectHeader
          :title="$page.frontmatter.heading"
          :year="$page.frontmatter.year.toString()"
          :categories="$page.frontmatter.categories"
        /> -->
        </transition>
        <transition name="router-anim" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
        <Content/>
        </transition>
      </div>


      <!-- Journal list -->
      <div v-if="$route.path === '/journal/'" class="journal-list">
        <transition name="router-anim" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
        <Content />
        </transition>
      </div>

      <!-- Single journal -->
      <div v-if="isSingleJournal" class="single-journal">
        <transition name="router-anim" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
        <Content/>
        </transition>
      </div>

      <!-- Panorama list -->
      <div v-if="$route.path === '/panorama/'">
        <Content />
      </div>

      <!-- Single panorama -->
      <div v-if="isSinglePanorama">
        <transition name="router-anim" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
        <Content/>
        </transition>
      </div>

    </div>

    <Footer />


  </div>
</template>

<script>
  export default {
    computed: {
      isSingleProject() {
        const worksRoute = '/works/'
        const path = this.$route.path
        if (path.includes('works') && path.length >= (worksRoute.length + 1)) {
          return true
        }
      },
      isSingleJournal() {
        const journalRoute = '/journal/'
        const path = this.$route.path
        if (path.includes('journal') && path.length >= (journalRoute.length + 1)) {
          return true
        }
      },
      isSingleProj() {
        const projRoute = '/projects/'
        const path = this.$route.path
        if (path.includes('projects') && path.length >= (projRoute.length + 1)) {
          return true
        }
      }, 
      isSinglePanorama() {
        const panoRoute = '/panorama/'
        const path = this.$route.path
        if (path.includes('panorama') && path.length >= (panoRoute.length + 1)) {
          return true
        }
      },
    },
    updated() {
        // unwrap all images from paragraph tags so we can have
        // different widths inside the content.

        document.querySelectorAll('p img').forEach(image => {
          var wrapper = image.parentNode
          let children = wrapper.children
          let fragment = document.createDocumentFragment()

          Array.from(children).forEach(child => {
            fragment.appendChild(child)
          })

          wrapper.parentNode.replaceChild(fragment, wrapper)

        })
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
    --color-black: #1c1c1c;
    --color-highlight: rgba(249, 233, 172, 0.99);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-moz-selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  *::-webkit-selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  *::selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  /* .VueCarousel-wrapper {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
  } */

  .agile__list {
    border-radius: 10px;
    overflow: hidden;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  }

  .agile__actions button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  body {
    font-family: "Montserrat", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    background: #fff;
    /* color: var(--color-black); */
  }

  .youtube {
    width: 70vw;
    height: 80vh;
    margin: 0 15vw !important;
  }
  @media screen and (max-width: 600px) {
    .youtube {
      margin: 0 !important;
      width: 100vh;
    }
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    line-height: 0;
    margin: 2rem auto 0 auto;
    display: block;
    object-fit: cover;
  }

  .container {
    padding: 0 0;
  }

  .journal-list, .single-journal {
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
  }

  h1,h2,h3,h4,h5,h6,p {
    width: 80%;
    max-width: 800px;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.15;
    font-weight: 300;
    margin: 0 auto 3rem auto;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
    margin: 2rem auto 2rem auto;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 2rem auto 1rem auto;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 1rem auto 2rem auto;
  }

  pre {
    background: var(--color-black);
    padding: 1rem;
    margin: 1rem 0;
  }

  code {
    color: white;
    background: var(--color-black);
    font-size: 0.8rem;
    padding: 0.05rem 0.25rem;
    font-weight: 400;
  }

</style>
