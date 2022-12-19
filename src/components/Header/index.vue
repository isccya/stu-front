<template>
  <div class="head-container">
    <div class="l-container">
      <el-button icon="el-icon-menu" size="mini"></el-button>
    </div>
    <div class="r-container"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.head-container {
  background-color: #333;
  height: 60px;
  display: flex; /*弹性布局*/
  justify-content: space-between;
  align-items: center;
}
.l-container{
  margin-left: 20px;
}


</style>