<template>
  <div id="app">
    <Header />
    <!-- <Home /> -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import Header from "./components/Header";
import Home from "./views/Home";

export default {
  name: "app",
  components: {
    Header,
    Home
  }
};
</script>
<style>
</style>
