<template>
  <h1 v-if="text" class="title" v-html="text" />
</template>

<script>
export default {
  props: {
    text: {
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
    margin: 6vw auto 10vh auto;
    font-size: clamp(1.3rem, 5vw, 3.5rem);
    font-weight: 500;
    text-transform: uppercase;
    color: black;
  }

</style>
