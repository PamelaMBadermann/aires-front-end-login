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
router-view {
  font-family: Usual, sans-serif;
  height: 100vh;
  flex-wrap: wrap;
}
</style>
