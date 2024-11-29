<template>
  <div>
    <img alt="Logo bistrosoft" src="./assets/logoarg-1.svg" />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/SystemsStatuses.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
img{
  width: 400px;
  height:150px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
