<template>
<div>
  <h1 v-if="text" class="title" v-html="text" />
  <h2 v-if="sub" class="subtitle" v-html="sub" />
</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false
    },
    sub: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    letter-spacing: -0.1rem;
    width: 1000px;
    max-width: 100%;
    margin: 3vw auto 3vh auto;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 500;
    text-transform: uppercase;
    color: black;
  }
  
  .subtitle{
    text-align: center;
    letter-spacing: -0.1rem;
    width: 1000px;
    max-width: 100%;
    margin: 0 auto 9vh auto;
    font-size: clamp(.9rem, 5vw, 1.5rem);
    font-weight: 400;
    text-transform: uppercase;
    color: black;
  }

</style>
