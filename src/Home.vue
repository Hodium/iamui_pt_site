<template>
  <div id="homeMainDiv">
    <button @click="goToPortfolio">PORTFOLIO</button>
  </div>
</template>
<script>
export default {
  name: "Home",
  methods: {
    goToPortfolio() {
      this.$router.push({ name: "portfolio" });
    }
  }
};
</script>
<style>
body {
  background-image: url("./assets/back.png");
}
</style>
