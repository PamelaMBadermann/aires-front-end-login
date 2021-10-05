<template>
  <router-view>
    <LeftCard/>
    <LoginForm/>
  </router-view>
</template>

<script>
import LeftCard from "../components/LeftCard.vue";
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "LoginPage",
  components: {
    LeftCard,
    LoginForm
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
  padding: 0;
  height: 100vh;
  flex-wrap: wrap; */
}
</style>
