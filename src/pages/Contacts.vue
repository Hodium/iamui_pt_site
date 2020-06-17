<template>
  <div id="contactsMainDiv">
    <h1>CONTACTS MAIN DIV</h1>
    <button @click="goToHome">HOME</button>
  </div>
</template>
<script>
export default {
  name: "Contacts",
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style scoped>
</style>
