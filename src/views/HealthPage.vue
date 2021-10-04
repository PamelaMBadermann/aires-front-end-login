<template>
  <router-view>
    <LogoAires/>
  </router-view>
</template>

<script>
import LogoAires from "../components/LogoAires.vue";
export default {
  name: "App",
  components: {
    LogoAires
  },

}
</script>

<style>
#app {
  
  font-family: Usual, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: flex-start;
  text-align: flex-start;
  margin: 0;
  padding: 0;
  height: 100vh;
  flex-wrap: wrap;
}
</style>
