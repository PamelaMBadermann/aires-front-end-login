<template>
  <h1 class="my-title">{{title}}</h1>
  <label class="my-subtitle-form">{{subtitle}}</label>
</template>

<script>
export default {
  name: "MyTitle",
  props: [{
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }]
}
</script>

<style scoped>

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
</style>
