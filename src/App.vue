<template>
  <div id="app">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>

</template>

<script>
  import Header from './components/Header';
  export default {
    components:{
      "app-header":Header
    }
  }
</script>

<style>

</style>
