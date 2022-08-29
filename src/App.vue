<template>
  <MyFirstVueComponent />
  <h3>Test</h3>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>Hallo</p>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

//Wird immer gebraucht, wenn Komponente veröffentlicht werden soll
export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import url("./assets/base.css");
</style>

<!--
<style>
h3 {
  color: red;
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
-->
