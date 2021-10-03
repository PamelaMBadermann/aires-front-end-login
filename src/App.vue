<template>
  <LeftCard/>
  <RightForm/>
</template>

<script>
import LeftCard from './components/LeftCard.vue';
import RightForm from './components/RightForm.vue';

export default {
  name: 'App',
  components: {
    LeftCard,
    RightForm
  },

}
</script>

<style>
#app {
  
  font-family: Usual, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
