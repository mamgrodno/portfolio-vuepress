<template>

  
  <div class="project-list1">
    <!-- <agile :autoplay="true"
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
    </agile> -->

    <agile :autoplay="true"
           :autoplaySpeed="5000"
           :dots="false">
        <div class="projectbox"
             v-for="post in posts"
             :key="post.title">
          <router-link
            :to="post.path"
            class="link">

          <div class="image">
            <img :src="post.frontmatter.thumbnail + '?nf_resize=fit&w=1200'" alt="">
          </div>
            <div class="projectinfo gradientbox">
              <h4 v-if="post.frontmatter.navigation">{{ post.frontmatter.navigation }}</h4>
              <h2 style="max-width: 1000px;">{{ post.frontmatter.title }}</h2>
              <h3 style="max-width: 1000px;" v-if="post.frontmatter.description">{{ post.frontmatter.description }}</h3>
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

  @media only screen and (max-width: 600px) {
    .project-list {
      padding: 0 1rem;
    }
    .projectbox {
      grid-column: span 6 !important;
      /* height: 40vh !important; */
    }
    .link:hover {
      transform: none;
    }
    .gradientbox {
      background-image: none !important;
      height: 200px !important;
      /* display: none; */
      /* opacity: 0; */
    }
    .projectinfo {
      /* position: absolute; */
      padding: 0 1rem;
      width: 100%;
      bottom: 1rem;
      position: initial !important;
    }

    .projectinfo h2 {
      margin: 1rem 0 !important;
      font-weight: 700 !important;
      font-size: clamp(1rem, 5vw, 1.5rem) !important;
      letter-spacing: -.025em !important;
      text-decoration: none !important;
      color: black !important;
      position: static !important;
    }

    .projectinfo h3 {
      margin: 0 !important;
      font-weight: 400 !important;
      font-size: clamp(0.7rem, 2.5vw, 1rem) !important;
      color: black !important;
      position: static !important;
    }

    .projectinfo h4 {
      position: static !important;
      margin: 0 !important;
      font-weight: 600 !important;
      font-size: clamp(0.7rem, 2.5vw, 1rem) !important;
      color: black !important;
    }
  }

  .projectinfo {
    position: absolute;
    width: 100%;
  }

  .projectinfo h2 {
    margin: 0 1rem 0 1rem;
    font-weight: 500;
    font-size: clamp(1rem, 5vw, 2rem);
    letter-spacing: -.025em;
    color: white;
    text-decoration: none;
    position: absolute;
    bottom: 4rem;
    left: 1rem;
  }

  .projectinfo h3 {
    margin: 0 1rem;
    font-weight: 300;
    font-size: clamp(.8rem, 2.5vw, 1.25rem);
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }

  .projectinfo h4 {
    position: absolute;
    margin: 0 1rem;
    font-weight: 600;
    font-size: clamp(0.7rem, 2.5vw, 1rem);
    color: white;
    bottom: 1rem;
    right: 1rem;
    display: inline;
    width: auto;
  }

  .gradientbox {
    height: 100%;
    width: 100%;
    
    background-image: linear-gradient(0deg, rgba(13,12,8,1) 5%, rgba(242,242,242,0) 50%);
    /* opacity: 0; */
    /* transition: ease-in-out 350ms; */
    z-index: 200;
    position: absolute;
  }
  /* .gradientbox:hover {
    opacity: 1;
  } */

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
    transition: all .7s ease-in-out;
  }
  .link:hover {
    transform: translateY(-7px)
  }

  .projectbox {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    height: 80vh;
  }

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
