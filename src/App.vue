<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Ships from "./components/Ships.vue";

export default {
  name: "app",
  components: {
    Ships
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(26, 26, 26);
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  padding: 30px;
  min-height: 100vh;
}
</style>
