<template>
<div>
  <div class="header">

    <div class="column">
      <Label class="label">Проект</Label>
      <span class="value">{{ title }}</span>
    </div>

    <div class="column">
      <Label class="label">Год</Label>
      <span class="value">{{ year }}</span>
    </div>

    <div class="column">
      <Label class="label">Категории</Label>
      <span class="value categories tag" @click="click_on_tag" v-for="category in categories" v-text="category"></span>
    </div>

  </div>
  <div v-if="this.tags">
    <div class="project-list">
    <div v-for="project in projects"
          :key="project.title"
          class="projectbox"
          @click="click_on_tag">
        <router-link
          :to="project.path"
          class="link"
          >
          <div class="image">
            <img :src="project.frontmatter.thumbnail" alt="">
          </div>
          <div class="gradientbox">
            <div v-if="project.frontmatter.size < 3" class="projectinfo-small">
              <h2>{{ project.frontmatter.heading }}</h2>
              <h3 v-if="project.frontmatter.description">{{ project.frontmatter.description }}</h3>
            </div>
            <div v-else-if="project.frontmatter.size < 5" class="projectinfo-medium">
              <h2>{{ project.frontmatter.heading }}</h2>
              <h3 v-if="project.frontmatter.description">{{ project.frontmatter.description }}</h3>
            </div>
            <div v-else class="projectinfo">
              <h2>{{ project.frontmatter.heading }}</h2>
              <h3 v-if="project.frontmatter.description">{{ project.frontmatter.description }}</h3>
            </div>
          </div>
        </router-link>
    </div>
  </div>
  </div>
</div>
</template>

<script>
  import VLazyImage from "v-lazy-image";
  import { VueAgile } from 'vue-agile';
  import SearchBox from '@SearchBox';

  export default {
    computed: {
      projects() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/projects/') && !x.frontmatter.project_index && x.frontmatter.categories[this.clicked_tag_index] == this.clicked_tag)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    },
    methods: {
      click_on_tag: function(e) {
        this.tags = !this.tags
        this.clicked_tag_index = this.categories.indexOf(e.currentTarget.innerHTML)
        this.clicked_tag = e.currentTarget.innerHTML
      }
    },
    components: {
      VLazyImage,
      agile: VueAgile,
      SearchBox,
    },
    data() {
      return {
        tags: false,
        clicked_tag_index: '',
        clicked_tag_: '',
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      year: {
        type: String,
        required: true
      },
      categories: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

  .tag {
    background-color: rgb(221, 221, 221);
    border-radius: 10px;
    padding: .4rem;
    margin-right: .4rem;
    cursor: pointer;
  }

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

  @media only screen and (max-width: 600px) {
    .projectbox {
      grid-column: span 6 !important;
    }
    .imgbox {
      height: 40vh !important;
    }
    .imgbox img {
      height: 40vh !important; 
    }
  }

  .projectinfo {
    position: absolute;
    width: 100%;
    bottom: 1rem;
  }

  .projectinfo h2 {
    margin: 1rem;
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

  .projectinfo-small {
    position: absolute;
    width: 100%;
    bottom: 1rem;
  }

  .projectinfo-small h2 {
    margin: 1rem;
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

  .projectinfo-medium {
    position: absolute;
    width: 100%;
    bottom: 1rem;
  }

  .projectinfo-medium h2 {
    margin: 1rem;
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

  img {
    margin: 0;
    min-height: 40vh;
    max-height: 70vh;
    object-fit: cover;
  }

  .imgbox {
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    overflow: hidden; */
    object-fit: cover;
    transition: all .2s ease-in-out;
  }

  .imgbox:hover {
    transform: scale(1.04);
  }

  .projectbox {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .project-list {
      margin-top: 5vh;
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)) ;
  }

  .header {
    display: flex;
    text-align: center;
    padding: 2rem 0;
    width: 100%;
    max-width: 800px;
    margin: 0 auto 3rem auto;
  }

  .column {
    flex: 0 0 33.33%;
  }

  .label {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .value {
    font-weight: 400;
  }

  .categories:after {
    content: '';
  }

  .categories:last-of-type:after {
    content: '';
  }

</style>
