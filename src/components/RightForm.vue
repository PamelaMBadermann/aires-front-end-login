<template>
  <div class="right-form">
    <LogoAires/>
    <div class="form-unit">
      <h1>Crie sua conta</h1>
      <label class="my-subtitle-form">Crie sua conta Aires.</label>
    </div>
    <div class="form-unit">
      <label class="my-input-name">Email</label>
      <input class="my-inputs" placeholder="Email" v-model="email" type="text" name="email"/>
    </div>
    <div class="form-unit">
      <label class="my-input-name">Senha</label>
      <input class="my-inputs" placeholder="Senha" v-model="password" type="text" name="password"/>
    </div>
    <div class="form-unit">
      <label class="my-input-name">Confirme sua senha</label>
      <input class="my-inputs" placeholder="Senha" v-model="password" type="text" name="password"/>
    </div>
    <div class="form-unit">
      <MyPrimaryButton/>
    </div>
    <div class="form-unit">
      <div class="label-footer">
        <label class="my-input-name">Já possui uma conta? <a href="#">Clique aqui para acessar</a></label>
      </div>
      <div class="label-footer">
        <label class="my-input-name"><a href="#">Esqueceu sua senha?</a></label>
      </div>
    </div>
  </div>
</template>

<script>
import MyPrimaryButton from "./MyPrymaryButton.vue";
import LogoAires from "./LogoAires.vue";

export default {
  name: "RightForm",
  components: {
    MyPrimaryButton,
    LogoAires
  },
    data() {
    return {
      usuarios: [
        {
          name: "Nome Usuario",
          email: "email@example.com",
          password: "password"
        } 
      ], 
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    addUser() {
      if (this.name.trim() === "" || this.email.trim() === ""|| this.password.trim() === "") {
        return alert("Por favor, preencha todos os campos!");
      }

      const user = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      this.usuarios.push(user);

      this.name = "";
      this.email = "";
      this.password = "";
    }
  }
}
</script>

<style scoped>
.right-form {
  background-color: #ffffff;
  height: 100%;
  width: 40%;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.my-subtitle-form {
  text-align: left;
  font: normal normal normal 16px/19px Usual;
  letter-spacing: 1.12px;
  color: #AFB8C0;
  opacity: 1;
  padding-bottom: 20px;
}

.form-unit {
  width: 428px;
  height: 73px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

::placeholder {
  color: #AFB8C0;
  font: normal normal 300 13px/16px Usual;
  opacity: 1;
  letter-spacing: 0.65px;
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
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.label-footer a {
  color: #0045E6;
}
</style>
