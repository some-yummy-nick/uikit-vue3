<template>
  <header class="header">
    <div class="container">
      <router-link to="/">Ui kit(Vue 3 + Composition Api)</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 62px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
  font-weight: 700;
}
</style>