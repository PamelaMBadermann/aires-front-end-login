<template>
  <router-view>
    <div class="container">
      <label class="label-footer">
        <LogoAires/>
      </label>
      <MyTitle title="Olá,"/>
      <MySubtitle subtitle="Para onde deseja navegar?"/>
      <label class="label-footer">
        <router-link to="/joinpage">Página de Cadastro</router-link>
      </label>
      <label class="label-footer">
        <router-link to="/loginpage">Página de Login</router-link>
      </label>
      <hr/>
      <label class="label-footer box">
        <MySubtitle subtitle="Email de acesso:"/>admin@admin.com
        <MySubtitle subtitle="Senha de acesso:"/>12345
      </label>
    </div>
  </router-view>
</template>

<script>
import LogoAires from "../components/LogoAires.vue";
import MyTitle from "../components/MyTitle.vue";
import MySubtitle from "../components/MySubtitle.vue";

export default {
  name: "HealthPage",
  components: {
    LogoAires,
    MyTitle,
    MySubtitle
  },

}
</script>

<style>
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
  margin: 10px;
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
  margin: 10px;
  font-size: 40px;
}

.box {
  border: 1px solid #00000029;
  border-radius: 5px;
  height: 160px;
}
</style>
