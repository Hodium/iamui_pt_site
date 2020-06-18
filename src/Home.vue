<template>
  <div id="homeMainDiv" class="homeMainDiv">
    <div class="homeGeneralDiv">
      <div class="homeTitles">
        <label class="homeTitle">.I AM USER INTERFACE.</label>
        <label class="homeSubTitle">[we design you]</label>
      </div>
      <div class="homeButtons">
        <button class="homeButton" @click="goToPortfolio">PORTFOLIO</button>
        <button class="homeButton" @click="goToContacts">CONTACTS</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  methods: {
    goToContacts() {
      this.$router.push({ name: "contacts" });
    },
    goToPortfolio() {
      this.$router.push({ name: "portfolio" });
    }
  }
};
</script>
<style scoped>
.homeMainDiv {
  width: 100%;
  height: 100%;
  background-image: url("./assets/back.png");
}

.homeGeneralDiv {
  width: 100%;
  height: 100%;
  display: flow-root;
  justify-content: center;
}

.homeTitle {
  font-size: 35px;
}

.homeSubTitle {
  font-size: 15px;
}

.homeTitles {
  display: grid;
  text-align: center;
  margin-top: 10%;
  grid-auto-rows: min-content;
}

.homeButtons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
}

.homeButton {
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;
  padding: 1em 3em;
  margin: 1em;
}

.homeButton:hover {
  cursor: pointer;
}
</style>
