<template>
  <div style="width: 400px; display:block; margin:0 auto;">
    <carousel :per-page="1" :center-mode="true" >
      <slide>
        <img src="https://placeimg.com/400/300/animals" />
      </slide>
      <slide>
        <img src="https://placeimg.com/400/300/nature" />
      </slide>
      <slide>
        <img src="https://placeimg.com/400/300/people" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
  /*
  mounted () {
    import('vue-carousel').then(module => {
      // Vue.use(module);
      // Vue.component('carousel', module.Carousel);
    });
  }
   */
}
</script>
