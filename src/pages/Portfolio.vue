<template>
  <div id="portfolioMainDiv">
    <h1>PORTFOLIO MAIN DIV</h1>
    <button @click="goToHome">HOME</button>
  </div>
</template>
<script>
export default {
  name: "Portfolio",
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style>
</style>
