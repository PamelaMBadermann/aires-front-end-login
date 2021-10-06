<template>
  <router-view>
    <div class="container">
      <label class="label-footer">
        <LogoAires/>
      </label>
      <MyTitle title="Seja bem vindo!"/>
      <MySubtitle subtitle="Agora você está logado!"/>
      <label class="label-footer">Voltar para 
        <router-link to="/">Home</router-link>
      </label>
      <label class="label-footer">
        <router-link to="/loginpage">Página de Login</router-link>
      </label>
    </div>
  </router-view>
</template>

<script>
import LogoAires from "../components/LogoAires.vue";
import MyTitle from "../components/MyTitle.vue";
import MySubtitle from "../components/MySubtitle.vue";

export default {
  name: "LoggedPage",
  components: {
    LogoAires,
    MyTitle,
    MySubtitle
  },

}
</script>

<style scoped>
.container {
  font-family: Usual, sans-serif;
  display: flex;
  justify-content: flex-start;
  text-align: flex-start;
  margin: 0;
  padding: 0;
  height: 100vh;
  flex-wrap: wrap;
}

.label-footer {
  width: 428px;
  height: 73px;
  display: flex;
  margin: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

.join-form {
  background-color: #ffffff;
  height: 100vh;
  max-height: 900px;
  min-height: 450px;
  width: 40%;
  position: absolute;
  right: 0;
  top: 0;
}

.my-title {
  margin: 15px;
  font-size: 40px;
}
</style>
