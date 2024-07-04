<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style>
.app {
  height: 100%;
  position: relative;
}
button {
  cursor: pointer;
}
body {
  position: relative;
  margin: 0;
  height: 100vh;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
