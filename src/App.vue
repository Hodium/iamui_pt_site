<template>
  <div id="app" class="appDiv">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>
html,
body {
  margin: 0;
  height: 100%;
}

.appDiv {
  height: 100%;
}
</style>
