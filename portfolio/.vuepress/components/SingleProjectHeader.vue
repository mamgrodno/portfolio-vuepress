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
          @click="tags = !tags"
          :key="project.title"
          class="projectbox">
        <router-link
          :to="project.path"
          class="link">
          <div class="imgbox">
            <img :src="project.frontmatter.thumbnail" alt="">
          </div>
          <div class="projectinfo">
            <h2>{{ project.frontmatter.heading }}</h2>
            <span v-if="project.frontmatter.description">{{ project.frontmatter.description }}</span>
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
    object-fit: cover;
    display: flex;
    flex-direction: column;
  }


  .projectinfo h2 {
    margin: 1rem;
    font-weight: 600;
    font-size: 1.3rem;
    color: black;
    text-decoration: none;
  }

  .projectinfo span {
    margin: 0 1rem;
    font-weight: 300;
    font-size: 1rem;
    color: black;
  }

  .link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    padding: 1rem;
    margin-bottom: 1.5rem;
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

  .project-list {
      margin-top: 5vh;
      display: grid;
      /* grid-gap: 4em; */
      /* grid-template-columns: repeat(6, 1fr); */
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }

  .header {
    display: flex;
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
