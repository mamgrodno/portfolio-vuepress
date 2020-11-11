<template>
  <div class="container">
    <div class="box">
      <div>
        МАМ — Modern Art Museum, Гродно. Площадка для современного искусства, проекты в свободном формате, без цензуры, на различных плоскостях и поверхностях, актуальная информация о событиях в арт-пространстве Гродно. Клуб MAM — сообщество, готовое поддержать и развивать современное искусство, стать участниками, спонсорами арт-инициатив.
      </div>
      <div>
        Контакты: mamgrodno@gmail.com
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
