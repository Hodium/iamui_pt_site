<template>
  <div id="curriculumVitaeMainDiv">
    <h1>CURRICULUM VITAE MAIN DIV</h1>
    <button @click="goToPortfolio">PORTFOLIO</button>
  </div>
</template>
<script>
export default {
  name: "CurriculumVitae",
  methods: {
    goToPortfolio() {
      this.$router.push({ name: "portfolio" });
    }
  }
};
</script>
<style scoped>
</style>
