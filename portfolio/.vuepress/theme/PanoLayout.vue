<template>
  <div>
      <div v-if="$route.path === '/panorama/'" class="container">
        <Content />
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 0 !important;
}
</style>