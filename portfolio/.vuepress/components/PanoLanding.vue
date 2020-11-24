<template>
<div>
  <div class="panorama-list">

    <div v-for="panorama in panoramas"
        :key="panorama.title"
        class="pano"
        :style="{ backgroundImage: `linear-gradient(0deg, rgba(13,12,8,1) 5%, rgba(242,242,242,0) 50%) ,url(${panorama.frontmatter.thumbnail})` }">
      <router-link
        :to="panorama.path"
        class="link">
        <div class="text">
          <h2>{{ panorama.frontmatter.heading }}</h2>
          <h3 v-if="panorama.frontmatter.description">{{ panorama.frontmatter.description }}</h3>
        </div>
        <!-- <div class="imgbox">
          <img :src="panorama.frontmatter.thumbnail" alt="">
        </div> -->
      </router-link>
    </div>

  </div>
</div>
</template>

<script>
  export default {
    computed: {
      panoramas() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/panorama/') && !x.frontmatter.panoramas_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>

<style scoped>

  .text {
    position: absolute;
    padding-right: 2rem;
    left: 2rem;
    bottom: 1rem;
    width: 100%;
  }

  .text h2 {
    color: #F2F2F2;
    font-size: clamp(1rem, 5vw, 3rem);
    font-weight: 500;
    text-decoration: none;
    max-width: 1000px;
    margin: 0 1rem
  }

  .text h3 {
    color: #F2F2F2;
    font-size: clamp(1rem, 5vw, 1.5rem);
    font-weight: 300;
    text-decoration: none;
    max-width: 1000px;
    margin: 0 1rem
  }

  .pano {
    position: relative;
    width: 100%;
    height: 80vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all .2s ease-in-out;
    margin-bottom: 15vh;
  }

  .pano img{
    height: 70vh;
    width: 100vw;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px; */
    margin-bottom: 3rem;
    object-fit: cover;
    transition: all .2s ease-in-out;
  }
  .pano img:hover {
    transform: scale(1.01);
  }
  .imgbox {
    object-fit: cover;
  }

  .about {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.25;
    letter-spacing: 0.1rem;
    width: 800px;
    max-width: 100%;
    margin: 6vw auto 7vw auto;
  }

  @media screen and (min-width: 600px) {
    .about {
      margin: 6vw auto 7vw auto;
    }
  }

  .link {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-decoration: none;
    color: black;
  }

  .panorama-list {
      margin-top: 5vh;
      display: grid;
      grid-gap: 2em;
      /* grid-template-columns: repeat(6, 1fr); */
      /* grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); */
  }

  .panorama1 {
    position: relative;
    grid-column: span 6;
    /* height: 70vh; */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px; */
    overflow: hidden;
    transition: all .2s ease-in-out;
  }
  .panorama2 {
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
  .panorama3 {
    position: relative;
    grid-column: span 2;
    height: 40vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    overflow: hidden;
    transition: all .2s ease-in-out;
  }

  @media only screen and (max-width: 1025px) {
    .panorama1 {
      grid-column: span 6;
    }
    .panorama2 {
      grid-column: span 6;
    }
    .panorama3 {
      grid-column: span 3;
    }
  }
  @media only screen and (max-width: 600px) {
    .panorama3 {
      grid-column: span 6;
    }
  }

  .panorama1:hover {
    transform: scale(1.02);
  }
  .panorama2:hover {
    transform: scale(1.04);
  }
  .panorama3:hover {
    transform: scale(1.04);
  }

  .panoramainfo {
    /* position: absolute;
    bottom: 0; */
    object-fit: cover;
    display: flex;
    flex-direction: column;
  }

  .panoramainfo img {
    margin: 0 auto;
  }

  .panoramainfo h2 {
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .panoramainfo span {
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-weight: 300;
    font-size: 1.2rem;
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
