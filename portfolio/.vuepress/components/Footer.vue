<template>
  <div class="container">
    <div class="box">
      <div>
        {{ $site.themeConfig.footer_text }}
      </div>
      <div v-for="i in $site.themeConfig.media">
        <a :href="i.media_link">
          <img :src="i.media_icon" alt="">
          <span>{{ i.link_text }}</span>
        </a>
      </div>
    </div>
    <span class="text">{{ $site.themeConfig.footer }}</span>
  </div>
</template>

<style scoped>
  .container {
    background-color: #f5f5f5;
    margin-top: 10rem;
  }
  .text {
    display: block;
    font-size: 0.8rem;
    text-align: left;
    padding: 2rem 5vw;
  }
  .box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-items: center;
    padding: 2rem 3rem;
  }
</style>
