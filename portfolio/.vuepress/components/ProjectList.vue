<template>
  <div class="project-list">
    <div v-for="project in projects"
          :key="project.title"
          class="projectbox"
          :style="{gridColumn: `span ${project.frontmatter.size}`}">
        <router-link
          :to="project.path"
          class="link">
          <div class="imgbox">
            <v-lazy-image :src="project.frontmatter.thumbnail" alt=""
                 :style="{height: `${project.frontmatter.height}vh`}">
          </div>
          <div class="projectinfo">
            <h2>{{ project.frontmatter.heading }}</h2>
            <span v-if="project.frontmatter.description">{{ project.frontmatter.description }}</span>
          </div>
        </router-link>
    </div>
  </div>
</template>

<script>
  import VLazyImage from "v-lazy-image";
  import { VueAgile } from 'vue-agile';
  import SearchBox from '@SearchBox';

  export default {
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


  .link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    padding: 1rem;
  }

  img {
    margin: 0;
    height: 40vh;
    object-fit: cover;
  }

  .imgbox {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    overflow: hidden;
    object-fit: cover;
    transition: all .2s ease-in-out;
  }

  .imgbox:hover {
    transform: scale(1.04);
  }

  .project-list {
      margin-top: 5vh;
      display: grid;
      /* grid-gap: 4em; */
      grid-template-columns: repeat(6, 1fr);
      /* grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); */
  }

  .project1 {
    position: relative;
    grid-column: span 6;
    height: 70vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    overflow: hidden;
    transition: all .2s ease-in-out;
  }
  .project2 {
    position: relative;
    grid-column: span 3;
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    overflow: hidden;;
    transition: all .2s ease-in-out;
  }
  .project3 {
    position: relative;
    grid-column: span 2;
    /* height: 40vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    overflow: hidden; */
    transition: all .2s ease-in-out;
  }

  @media only screen and (max-width: 1025px) {
    .project1 {
      grid-column: span 6;
    }
    .project2 {
      grid-column: span 6;
    }
    .project3 {
      grid-column: span 3;
    }
  }
  @media only screen and (max-width: 600px) {
    .projectbox {
      grid-column: span 6 !important;
    }
    .imgbox {
      height: 40vh !important;
    }
  }

  .project1:hover {
    transform: scale(1.04);
  }
  .project2:hover {
    transform: scale(1.04);
  }
  .project3:hover {
    transform: scale(1.04);
  }

  .projectinfo {
    object-fit: cover;
    display: flex;
    flex-direction: column;
  }

  /* .projectinfo img {
    margin: 0 auto;
  } */

  .projectinfo h2 {
    margin: 1rem;
    font-weight: 600;
    font-size: 1.3rem;
    color: black;
    text-decoration: none;
  }

  .projectinfo span {
    margin-left: 1rem;
    font-weight: 300;
    font-size: 1rem;
    color: black;
  }

  .info {
    position: absolute;
    left: 0;
    top: 2rem;
    padding: 0.5rem 1rem;
    background: rgba(255,255,255, 1);
    max-width: 400px;
  }

  .info h2 {
    display: inline-block;
    width: auto;
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0;
  }

  .info span {
    display: inline-block;
    width: auto;
    margin: 0;
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }

</style>
