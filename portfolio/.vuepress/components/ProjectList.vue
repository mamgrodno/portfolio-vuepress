<template>
  <div class="project-list">
    <div v-for="project in projects"
          :key="project.title"
          class="projectbox"
          :style="{gridColumn: `span ${project.frontmatter.size}`, height: `${project.frontmatter.height}vh`}">
        <router-link
          :to="project.path"
          class="link"
          >
          <div class="image">
            <v-lazy-image :src="project.frontmatter.thumbnail" alt="">
          </div>
          <div class="gradientbox">
            <div v-if="project.frontmatter.size < 3" class="projectinfo-small">
              <h2 style="max-width: 1000px;">{{ project.frontmatter.heading }}</h2>
              <h3 style="max-width: 1000px;" v-if="project.frontmatter.description">{{ project.frontmatter.description }}</h3>
            </div>
            <div v-else-if="project.frontmatter.size < 5" class="projectinfo-medium">
              <h2 style="max-width: 1000px;">{{ project.frontmatter.heading }}</h2>
              <h3 style="max-width: 1000px;" v-if="project.frontmatter.description">{{ project.frontmatter.description }}</h3>
            </div>
            <div v-else class="projectinfo">
              <h2 style="max-width: 1000px;">{{ project.frontmatter.heading }}</h2>
              <h3 style="max-width: 1000px;" v-if="project.frontmatter.description">{{ project.frontmatter.description }}</h3>
            </div>
          </div>
        </router-link>
    </div>
  </div>
</template>

<script>
  import VLazyImage from "v-lazy-image";
  import { VueAgile } from 'vue-agile';
  import SearchBox from '@SearchBox';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  export default {
    mounted() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(".projectbox", {opacity: 0, y: 100})
      ScrollTrigger.batch(".projectbox", {
        interval: .2,
        onEnter: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.1, opacity: 1, y: 0, ease: "power3"}),
        onLeave: batch => gsap.set(batch, {opacity: 0, y: -100}),
        onEnterBack: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.1, opacity: 1, y: 0, ease: "power3"}),
        onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100}),
      })
    },
    data() {
      return {
        options: {
          responsive: [
                {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 2,
                      infinite: false,
                    }
                },
                {
                  breakpoint: 900,
                  settings: {
                      slidesToShow: 3,
                      infinite: false,
                    } 
                }
            ]
        }
      }
    },
    components: {
      VLazyImage,
      agile: VueAgile,
      SearchBox,
    },
    computed: {
      projects() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/projects/') && !x.frontmatter.project_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>

<style scoped>

  .gradientbox {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(0deg, rgba(13,12,8,1) 5%, rgba(242,242,242,0) 50%);
    opacity: 0;
    transition: ease-in-out 350ms;
    z-index: 200;
    position: absolute;
  }
  .gradientbox:hover {
    opacity: 1;
  }

  .image {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .image img {
    margin: 0;
    height: 100%;
  }

  .link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    position: relative;
  }

  .projectbox {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .project-list {
    max-width: 1230px;
    margin: 5vh auto 0 auto;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(6, 1fr);
  }

  @media only screen and (max-width: 600px) {
    .projectbox {
      grid-column: span 6 !important;
      height: 40vh !important;
    }
    .link {
      height: 40vh !important;
    }
    .gradientbox {
      opacity: 1;
    }
  }

  .projectinfo {
    position: absolute;
    width: 100%;
    bottom: 1rem;
  }

  .projectinfo h2 {
    margin: 0 1rem 0 1rem;
    font-weight: 500;
    font-size: clamp(1rem, 5vw, 3rem);
    letter-spacing: -.025em;
    color: white;
    text-decoration: none;
  }

  .projectinfo h3 {
    margin: 0 1rem;
    font-weight: 300;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: white;
  }

  .projectinfo-medium {
    position: absolute;
    width: 100%;
    bottom: 1rem;
  }

  .projectinfo-medium h2 {
    margin: 0 1rem 0 1rem;
    font-weight: 500;
    font-size: clamp(1rem, 5vw, 2.5rem);
    letter-spacing: -.025em;
    color: white;
    text-decoration: none;
  }

  .projectinfo-medium h3 {
    margin: 0 1rem;
    font-weight: 300;
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: white;
  }


  .projectinfo-small {
    position: absolute;
    width: 100%;
    bottom: 1rem;
  }

  .projectinfo-small h2 {
    margin: 0 1rem 0 1rem;
    font-weight: 500;
    font-size: clamp(1rem, 5vw, 1.5rem);
    letter-spacing: -.025em;
    color: white;
    text-decoration: none;
  }

  .projectinfo-small h3 {
    margin: 0 1rem;
    font-weight: 300;
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    color: white;
  }

</style>
