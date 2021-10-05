<template>
  <label class="my-subtitle-form" subtitle={subtitle}>{{subtitle}}</label>
</template>

<script>
export default {
  name: "MySubtitle",
  props: ["subtitle"]
}
</script>

<style scoped>
.my-subtitle-form {
  margin: 15px;
  text-align: left;
  font: normal normal normal 16px/19px Usual;
  letter-spacing: 1.12px;
  color: #AFB8C0;
  opacity: 1;
}

</style>
