<template>
  <h1>
    个人中心
  </h1>


  <el-button
      style="width:100%;"
      type="primary"
      @click="logout"
  >
    <span >注销登录</span>
  </el-button>
</template>

<script setup>

import {ElMessageBox} from "element-plus";
import useUserStore from '@/store/modules/user'
import {useRouter} from "vue-router";
const router = useRouter();
const userStore = useUserStore()

function logout() {
  ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    userStore.logOut().then(() => {
      console.log("推出登录")
      router.push({ path: "/login"});
    })
  }).catch(() => { });
}

</script>

<style scoped>

</style>