<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
import {reqStudentList,reqClassList} from './api'
export default {
  name: 'App',
  components: {

  },
  mounted(){
    // reqStudentList(1,5);
    // reqClassList();
  }
}

</script>

<style>
    html,body,h3{
      margin:0;
      padding:0;
    }
    a{
      text-decoration-line: none;
    }
</style>
