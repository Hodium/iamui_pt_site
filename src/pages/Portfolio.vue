<template>
  <div id="portfolioMainDiv" class="portfolioMainDiv">
    <div class="portfolioGeneralDiv">
      <div class="portfolioTitles">
        <label class="portfolioTitle">PORTFOLIO</label>
      </div>
      <div class="portfolioButtonsSection">
        <button class="portfolioHomeButton" @click="goToHome">HOME</button>
        <div class="portfolioButtons">
          <button class="portfolioItemButton" @click="goToCurriculumVitae">CURRICULUM VITAE</button>
          <button class="portfolioItemButton" @click="goToWebApp">WEBAPP</button>
          <button class="portfolioItemButton" @click="goToWhereabotus">WHEREABOUTS</button>
        </div>
      </div>
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
.portfolioMainDiv {
  width: 100%;
  height: 100%;
  background-image: url("../assets/back.png");
}

.portfolioGeneralDiv {
  width: 100%;
  height: 100%;
  display: flow-root;
  justify-content: center;
}

.portfolioTitles {
  text-align: center;
  margin-top: 2%;
}

.portfolioTitle {
  font-size: 35px;
}

.portfolioButtonsSection {
  display: grid;
  margin-top: 8%;
  grid-auto-rows: min-content;
  justify-content: center;
}

.portfolioHomeButton {
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;
  padding: 1em 3em;
  margin: 1em;
}

.portfolioItemButton {
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;
  padding: 1em 3em;
  margin: 1em;
}

.portfolioButtons {
  display: flex;
}

.portfolioHomeButton:hover,
.portfolioItemButton:hover {
  cursor: pointer;
}
</style>
