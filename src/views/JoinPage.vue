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

<style scoped>
router-view {  
  font-family: Usual, sans-serif;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
