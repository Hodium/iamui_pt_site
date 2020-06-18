<template>
  <div id="whereaboutsMainDiv">
    <h1>WHEREABOUTS MAIN DIV</h1>
    <button @click="goToPortfolio">PORTFOLIO</button>
  </div>
</template>
<script>
export default {
  name: "Whereabouts",
  methods: {
    goToPortfolio() {
      this.$router.push({ name: "portfolio" });
    }
  }
};
</script>
<style scoped>
</style>
