<template>
  <div id="app">
   {{ counter }}
   <button @click="counter += 1">+</button>
   <button @click="counter -= 1">-</button>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {counter: 0};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
