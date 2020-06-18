<template>
  <div id="webAppMainDiv">
    <h1>WEBAPP MAIN DIV</h1>
    <button @click="goToPortfolio">PORTFOLIO</button>
  </div>
</template>
<script>
export default {
  name: "WebApp",
  methods: {
    goToPortfolio() {
      this.$router.push({ name: "portfolio" });
    }
  }
};
</script>
<style scoped>
</style>
