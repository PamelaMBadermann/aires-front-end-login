<template>
  <router-view>
    <LeftCard/>
    <JoinForm/>
  </router-view>
</template>

<script>
import LeftCard from "../components/LeftCard.vue";
import JoinForm from "../components/JoinForm.vue";

export default {
  name: "JoinPage",
  components: {
    LeftCard,
    JoinForm
  },

}
</script>

<style>
#app {  
  font-family: Usual, sans-serif;
  /* display: flex;
  justify-content: flex-start;
  text-align: flex-start;
  margin: 0;
  padding: 0; */
  height: 100vh;
  flex-wrap: wrap;
}
</style>
