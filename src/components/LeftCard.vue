<template>
  <img class="left-image" alt="Imagem de uma pessoa" src="../assets/Grupo-12043.png">
</template>

<script>
export default {
  name: "LeftCard",
  props: ["image"]
}

  document.title = "Aires"
</script>

<style scoped>

img {
  max-height: 900px;
  min-height: 450px;
  max-width: 800px;
  min-width: 400px;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
}
</style>
