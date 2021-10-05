<template>
  <div id="loginForm" class="login-form">
    <form @submit="checkLoginForm">
      <LogoAires/>
      <MyTitle title="Acesso via email">{{title}}</MyTitle>
      <MySubtitle subtitle="Acesse sua conta Aires por algum método abaixo">{{subtitle}}</MySubtitle>
      <div class="form-unit">
        <label for="email" class="my-input-name">Email</label>
        <input class="my-inputs" placeholder="Email" v-model.trim="email" type="text" name="email"/>
      </div>
      <div class="form-unit">
        <label for="password" class="my-input-name">Senha</label>
        <input class="my-inputs" id="password" placeholder="Senha" v-model.trim="password" type="text" name="password"/>
      </div>
      <label class="my-input-name" style=""><a href="#">Esqueceu sua senha?</a></label>
    </form>
    <MyPrimaryButton buttontitle="Acesse sua conta">{{buttontitle}}</MyPrimaryButton>
    <div class="label-footer">
      <label class="my-input-name">Não possui uma conta? <a href="#">Clique para criar a sua conta</a></label>
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
      required: true,
      default: ""
    },
    password: {
      type: String,
      required: true,
      default: ""
    }
  },
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
      usuarios: [
        {
          email: "email@example.com",
          password: "password",
        } 
       ],
      errors: [],
      passwordConfirm: ""
    }
  },
  methods: {
    checkLoginForm(e) {
      this.errors = [];

      if (this.name.trim() === "" || this.email.trim() === ""|| this.password.trim() === "") {
        return alert("Por favor, preencha todos os campos!");
      }
      
      if (this.email.length < 5) {
        this.errors.push("Email inválido");
      }
      if (this.password.length < 5) {
        this.errors.push("Senha inválida");
      }
      if (this.password !== this.passwordConfirm) {
        this.errors.push("Senhas não conferem");
      }
      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },

    addUser() {
      this.usuarios.push({
        name: this.name.value,
        email: this.email.value,
        password: this.password.value,
      });
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
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

.my-subtitle-form {
  margin: 15px;
  text-align: left;
  font: normal normal normal 16px/19px Usual;
  letter-spacing: 1.12px;
  color: #AFB8C0;
  opacity: 1;
  /* padding-bottom: 20px; */
}

.form-unit {
  width: 428px;
  height: 73px;
  margin: 15px;
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
  height: 42px;
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
  margin: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.label-footer a {
  color: #0045E6;
}
</style>
