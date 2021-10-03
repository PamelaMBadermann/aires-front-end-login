<template>
  <button v-on:click="addComment" class="my-primary" type="submit">Crie sua conta</button>
</template>

<script>
export default {
  name: "MyPrimaryButton",
  props: ["image"]
}

</script>

<style scoped>

.my-primary {
  height: 42px;
  width: 428px;
  opacity: 1;
  color: whitesmoke;
  border: 1px solid ;
  font-size: 14px;
  border-radius: 12px;
  letter-spacing: 0.98px;
  background-color: #0046F5;
  margin: 0;
}
</style>
