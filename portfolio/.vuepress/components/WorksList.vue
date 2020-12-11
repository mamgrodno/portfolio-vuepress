<template>

  
  <div class="project-list1">
    <agile :autoplay="true"
           :autoplaySpeed="5000"
           :dots="false">
        <div class="post"
             v-for="post in posts"
             :key="post.title"
             :style="{ backgroundImage: `linear-gradient(0deg, rgba(13,12,8,1) 5%, rgba(242,242,242,0) 50%) ,url(${post.frontmatter.thumbnail})` }">     
          <router-link
            :to="post.path"
            class="slide">

            <div class="text">
              <h4 v-if="post.frontmatter.navigation">{{ post.frontmatter.navigation }}</h4>
              <h2>{{ post.frontmatter.title }}</h2>
              <h3 v-if="post.frontmatter.description">{{ post.frontmatter.description }}</h3>
            </div>
          </router-link>
        </div>
    </agile>

  </div>

</template>

<script>
// import { VueAgile } from 'vue-agile'
import { Carousel, Slide } from 'vue-carousel';
import { VueAgile } from 'vue-agile'

  export default {
    components: {
      Carousel,
      Slide,
      agile: VueAgile 
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

  .project-list1 {
    max-width: 1230px;
    margin: 0 auto;
  }

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
    /* transform: scale(1.005); */
  }

  .post a {
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  .text {
    position: absolute;
    padding-right: 2rem;
    left: 2rem;
    bottom: 1rem;
    width: 100%;
  }

  .text h2 {
    color: white;
    font-size: clamp(1rem, 5vw, 3rem);
    font-weight: 500;
    margin: 1rem 0;
    text-decoration: none;
    max-width: 100%;
  }

  .text h3 {
    color: white;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-weight: 300;
    text-decoration: none;
    margin: 1rem 0;
    max-width: 100%;
  }

  .text h4 {
    position: absolute;
    margin: 0 1rem;
    font-weight: 600;
    font-size: clamp(0.7rem, 2.5vw, 1rem);
    color: white;
    bottom: 1rem;
    right: 2rem;
    display: inline;
    width: auto;
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
