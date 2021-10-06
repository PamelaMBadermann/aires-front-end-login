<template>
  <button class="my-primary" buttontitle={buttontitle} type="submit" value="Enviar">{{buttontitle}}</button>
</template>

<script>
export default {
  name: "MyPrimaryButton",
  props: ["buttontitle"]
}

</script>

<style scoped>

.my-primary {
  height: 40px;
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
