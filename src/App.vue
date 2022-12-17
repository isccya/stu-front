<template>
  <div id="app">
    <myHeader></myHeader>
    <myLeft></myLeft>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Left from './components/Left'
export default {
  name: 'App',
  components: {
    myHeader:Header,
    myLeft:Left
  }
}
</script>

<style>

</style>
