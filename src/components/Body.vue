<template>
  <el-aside>
    <el-menu
        :router="true"
    >
      <el-menu-item index="/">
        <span>个人中心</span>
      </el-menu-item>
      <el-menu-item index="/music">
          <span>音乐</span>
      </el-menu-item>
      <el-menu-item index="/comic-book">
          <span>漫画</span>
      </el-menu-item>
      <el-menu-item index="/idea">
          <span>想法</span>
      </el-menu-item>
      <el-menu-item index="/movie">
        <span>电影</span>
      </el-menu-item>
      <el-menu-item index="/web-navigation">
          <span>网站导航</span>
      </el-menu-item >
      <el-menu-item index="/setting">
          <span>设置</span>
      </el-menu-item>
      <el-menu-item index="/login">
        <span>登录</span>
      </el-menu-item>
    </el-menu>
  </el-aside>

    <el-container class="content">

      <el-main>
      <router-view></router-view>
      </el-main>

    </el-container>

</template>

<script>
export default {
  name: "Body"
}
</script>

<style scoped>


</style>