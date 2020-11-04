<template>

  
      <div class="project-list">
        



    <!-- <carousel :autoplay="true"
              :autoplayTimeout="2000"
              :loop="true"
              :perPage="1">

      <slide v-for="post in posts"
             :key="post.title"> -->
        <router-link
          :to="post.path"
          tag="div"
          v-for="post in posts"
          :key="post.title"
          class="post"
          :style="{ backgroundImage: `url(${post.frontmatter.thumbnail})` }"
        >

          <div class="info">
            <h2>{{ post.frontmatter.title }}</h2>
            <span v-if="post.frontmatter.description">{{ post.frontmatter.description }}</span>
          </div>
        </router-link>
      <!-- </slide> -->
      
    <!-- </carousel> -->

      </div>

</template>

<script>
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

  .post {
    position: relative;
    width: 100%;
    height: 70vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }

  .post:hover {
    transform: scale(1.02);
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
