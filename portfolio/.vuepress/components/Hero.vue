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
    letter-spacing: 0.1rem;
    width: 800px;
    max-width: 100%;
    margin: 6vw auto 0 auto;
    font-size: clamp(1.7rem, 5vw, 3rem);
    font-weight: 800;
    color: black;
  }

</style>
