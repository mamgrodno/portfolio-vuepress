<template>
  <div class="project-list">

    <router-link
      :to="post.path"
      tag="div"
      v-for="post in projects"
      :key="post.title"
      class="post"
    >
      <div class="projectinfo">
        <img :src="post.frontmatter.thumbnail" alt="">
        <h2>{{ post.frontmatter.title }}</h2>
        <span v-if="post.frontmatter.description">{{ post.frontmatter.description }}</span>
      </div>

    </router-link>

  </div>
</template>

<script>
  export default {
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

  .project-list {
      margin-top: 5vh;
      display: grid;
      grid-gap: 1em;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  .post {
    position: relative;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* margin-bottom: 5vw; */
    cursor: pointer;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    border: #dfdfdf 1px solid;
    transition: all .2s ease-in-out;
  }

  .post:hover {
    transform: scale(1.04);
  }

  .projectinfo {
    object-fit: cover;
    display: flex;
    flex-direction: column;
  }

  .projectinfo img {
    margin: 0 auto;
  }

  .projectinfo h2 {
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.3rem;
  }

  .projectinfo span {
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-weight: 300;
    font-size: 1rem;
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
