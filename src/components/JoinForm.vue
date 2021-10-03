<template>
  <LeftCard/>
  <div class="container">
    <form id="joinForm" @submit="checkJoinForm" method="post" class="join-form">
      <LogoAires/>
      <MyTitle title="Crie sua conta" subtitle="Crie sua conta Aires."/>
      <div class="form-unit">
        <label class="my-input-name">Email</label>
        <input class="my-inputs" placeholder="Email" v-model.trim="email" type="text" name="email"/>
      </div>
      <div class="form-unit">
        <label class="my-input-name">Senha</label>
        <input class="my-inputs" id="password" placeholder="Senha" v-model.trim="password" type="text" name="password"/>
      </div>
      <div class="form-unit">
        <label class="my-input-name">Confirme sua senha</label>
        <input class="my-inputs" id="passwordConfirm" placeholder="Senha" v-model.trim="passwordConfirm" type="text" name="passwordConfirm"/>
      </div>
      <MyPrimaryButton button-title="Criar conta" v-on:click="addUser"/>
      <alert-box class="form-unit" v-if="errors.length">
        <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
      </alert-box>
      <div class="label-footer">
        <label class="my-input-name">Já possui uma conta? <a href="#">Clique aqui para acessar</a></label>
        <label class="my-input-name" style=""><a href="#">Esqueceu sua senha?</a></label>
      </div> 
    </form>
  </div>
</template>

<script>
import LeftCard from './LeftCard.vue';
import MyPrimaryButton from "./MyPrmaryButton.vue";
import LogoAires from "./LogoAires.vue";

export default {
  name: "JoinForm",
  props: [{
    name: String,
    email: String,
    password: String,
  }],
  components: {
    LeftCard,
    MyPrimaryButton,
    LogoAires
  },
    data() {
    return {
      usuarios: [
        {
          name: "Nome Usuario",
          email: "email@example.com",
          password: "password",
          passwordConfirm: "password"
        } 
       ],
      errors: [],
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  },
  methods: {
    checkJoinForm(e) {
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
        name: this.name,
        email: this.email,
        password: this.password,
      });

      this.name = "";
      this.email = "";
      this.password = "";
      this.passwordConfirm = "";
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
