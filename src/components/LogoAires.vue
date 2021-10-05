<template>
  <div class="logoaires">
    <img alt="Logo Aires" src="../assets/aires-logo.png">
  </div>
</template>

<script>
export default {
  name: "LogoAires",
  props: ["image"]
}

</script>

<style scoped>

img { 
  height: 80px;
  width: 80px;
  margin: 20px;
  text-align: center;
}

.logoaires {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
