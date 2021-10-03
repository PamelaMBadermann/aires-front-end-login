<template>
  <button class="my-primary" type="submit" value="Enviar">{{button-title}}</button>
</template>

<script>
export default {
  name: "MyPrimaryButton",
  props: ["button-title"]
}

</script>

<style scoped>

.my-primary {
  height: 42px;
  width: 428px;
  margin: 15px;
  opacity: 1;
  color: whitesmoke;
  border: 1px solid ;
  font-size: 14px;
  border-radius: 12px;
  letter-spacing: 0.98px;
  background-color: #0046F5;
}
</style>
