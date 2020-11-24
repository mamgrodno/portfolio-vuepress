<template>
  <div class="container">
    <div class="box">
      <div>
        {{ $site.themeConfig.footer_text }}
      </div>
      <div v-for="i in $site.themeConfig.media">
        <a class="link-box" :href="i.media_link">
          <img style="width: 30px; margin: 0;" :src="i.media_icon" alt="">
          <span>{{ i.link_text }}</span>
        </a>
      </div>
    </div>
    <span class="text">{{ $site.themeConfig.footer }}</span>
  </div>
</template>

<style scoped>
  .link-box {
    display: flex;

    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
  .link-box span {
  }
  .container {
    background-color: #F2F2F2;
    margin-top: 10rem;
  }
  .text {
    display: block;
    font-size: 0.8rem;
    text-align: left;
    padding: 2rem 0 5rem 10rem;
  }
  .box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-items: center;
    padding: 5rem 0 2rem 10rem;
  }
  
  @media only screen and (max-width: 600px) {
    .box {
      justify-items: start;
      padding: 1rem 2rem;
    }
    .link-box {
      margin: 1rem auto;
    }
  }
</style>
