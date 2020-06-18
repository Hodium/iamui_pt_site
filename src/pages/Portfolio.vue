<template>
  <div id="portfolioMainDiv">
    <h1>PORTFOLIO MAIN DIV</h1>
    <button @click="goToHome">HOME</button>
    <div class="portfolioButtons">
      <button @click="goToCurriculumVitae">CURRICULUM VITAE</button>
      <button @click="goToWebApp">WEBAPP</button>
      <button @click="goToWhereabotus">WHEREABOUTS</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Portfolio",
  methods: {
    goToCurriculumVitae() {
      this.$router.push({ name: "curriculumvitae" });
    },
    goToHome() {
      this.$router.push({ name: "home" });
    },
    goToWebApp() {
      this.$router.push({ name: "webapp" });
    },
    goToWhereabotus() {
      this.$router.push({ name: "whereabouts" });
    }
  }
};
</script>
<style scoped>
.portfolioButtons {
  display: flex;
}
</style>
