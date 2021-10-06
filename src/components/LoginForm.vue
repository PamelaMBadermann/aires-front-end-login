<template>
  <div id="loginForm" class="login-form">
    <form @submit="checkLoginForm">
      <LogoAires/>
      <MyTitle title="Acesso via email">{{title}}</MyTitle>
      <MySubtitle subtitle="Acesse sua conta Aires por algum método abaixo">{{subtitle}}</MySubtitle>
      <div class="form-unit">
        <label class="my-input-name">Email</label>
        <input class="my-inputs" id="login-email" placeholder="Email" v-model="localEmail" :email="email" type="text" name="email"/>
      </div>
      <div class="form-unit">
        <label class="my-input-name">Senha</label>
        <input class="my-inputs" id="login-password" placeholder="Senha" v-model="localPassword" :password="password" type="text" name="password"/>
      </div>
      <label class="my-input-name"><router-link to="/">Esqueceu sua senha?</router-link></label>
    </form>
    <MyPrimaryButton v-on:click="loggedIn()" buttontitle="Acesse sua conta">{{buttontitle}}</MyPrimaryButton>
    <div class="label-footer">
      <label class="my-input-name">Não possui uma conta? <router-link to="/joinpage">Clique para criar a sua conta</router-link></label>
    </div>
  </div>
</template>

<script>
import MyPrimaryButton from "./MyPrimaryButton.vue";
import LogoAires from "./LogoAires.vue";
import MyTitle from "./MyTitle.vue";
import MySubtitle from "./MySubtitle.vue";

export default {
  name: "LoginForm",
  props: {
    email: {
      type: String,
      default: ""
    },
    password: {
      type: String,
      default: ""
    }},
  components: {
    MyPrimaryButton,
    LogoAires,
    MyTitle,
    MySubtitle
  },
  data() {
    return {
      localEmail: "",
      localPassword: "",
      usuarios: [],
      usuario: {
        email: "admin@admin.com",
        password: "12345",
      },
    }
  },
  methods: {
    checkLoginForm() {
      if (document.getElementById("login-email").value == "") {
        return alert("Por favor, preencha o campo Email");
      }

      if (document.getElementById("login-password").value == "") {
        return alert("Por favor, preencha o campo Senha");
      }
    },

    loggedIn() {
      this.checkLoginForm()

      if (document.getElementById("login-email").value == "admin@admin.com" && document.getElementById("login-password").value == "12345") {
        this.$router.push("/loggedpage")
      } else {
        alert("Email ou senha incorretos")
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  background-color: #ffffff;
  height: 100vh;
  max-height: 900px;
  min-height: 450px;
}

.form-unit {
  width: 428px;
  height: 73px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

::placeholder {
  color: #AFB8C0;
  font: normal normal 300 13px/16px Usual;
  letter-spacing: 0.65px;
  opacity: 1;
}

.my-inputs {
  height: 40px;
  width: 428px;
  background: #ffffff;
  box-shadow: 0px 0px 12px #00000029;
  border-radius: 5px;
  border: 1px solid #ffffff;
  opacity: 1;
  margin-top: 10px;
}

.my-input-name {
  font-size: 14px;
  font-family:  Usual, "sans serif";
  letter-spacing: 0.7px;
  color: #141414;
  opacity: 1;
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

router-link {
  color: #0045E6;
}
</style>
