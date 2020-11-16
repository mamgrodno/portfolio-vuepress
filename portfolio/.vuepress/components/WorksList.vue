<template>

  
  <div class="project-list1">
    <carousel :autoplay="true"
           :autoplayTimeout="2500"
           :perPage="1">
        <slide class="post"
             v-for="post in posts"
             :key="post.title"
             :style="{ backgroundImage: `url(${post.frontmatter.thumbnail})` }">     
          <router-link
            :to="post.path"
            class="slide">

            <div class="info">
              <h2>{{ post.frontmatter.title }}</h2>
              <span v-if="post.frontmatter.description">{{ post.frontmatter.description }}</span>
            </div>
          </router-link>
        </slide>
        <template slot="prevButton">
          <svg style="width: 30px; height: 30px; margin-top: 1rem;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>  
        </template>
        <template slot="nextButton">
          <svg style="width: 30px; height: 30px; margin-top: 1rem;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </template>
    </carousel>

  </div>

</template>

<script>
// import { VueAgile } from 'vue-agile'
import { Carousel, Slide } from 'vue-carousel';

  export default {
    components: {
      Carousel,
      Slide
    },
    computed: {
      posts() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/works/') && !x.frontmatter.works_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>

<style scoped>

  .slide {
    /* border-radius: 10px;
    overflow: hidden; */
  }

  .post {
    position: relative;
    width: 100%;
    height: 80vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }

  .post:hover {
    transform: scale(1.02);
  }

  .post a {
    display: inline-block;
    height: 100%;
    width: 100%;
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
    color: black;
    text-decoration: none;
  }

  .info span {
    display: inline-block;
    width: auto;
    margin: 0;
    margin-left: 0.5rem;
    font-size: 0.8rem;
    color: black;
    text-decoration: none;
  }

</style>
