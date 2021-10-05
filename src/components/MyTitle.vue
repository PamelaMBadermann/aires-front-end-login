<template>
  <h1 class="my-title" title={title}>{{title}}</h1>
</template>

<script>
export default {
  name: "MyTitle",
  props: ["title"]
}
</script>

<style scoped>
.my-title {
  margin: 15px;
  font-size: 40px;
}

</style>
