<template>
<div>
  <div class="panorama-list">

    <div v-for="panorama in panoramas"
        :key="panorama.title"
        class="panorama1"
        :style="{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 35%), url(${panorama.frontmatter.thumbnail})` }">
      <router-link
        :to="panorama.path"
        class="link">
        <div class="panoramainfo">
          <h2>{{ panorama.frontmatter.heading }}</h2>
          <span v-if="panorama.frontmatter.description">{{ panorama.frontmatter.description }}</span>
        </div>
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


  .link {
    height: 100%;
    width: 100%;
    display: inline-block;
  }

  .panorama-list {
      margin-top: 5vh;
      display: grid;
      grid-gap: 2em;
      grid-template-columns: repeat(6, 1fr);
      /* grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); */
  }

  .panorama1 {
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
    position: absolute;
    bottom: 0;
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
    font-size: 1.3rem;
    color: whitesmoke;
  }

  .panoramainfo span {
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-weight: 300;
    font-size: 1rem;
    color: whitesmoke;
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
