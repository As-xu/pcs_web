<template>
   <el-aside width="200px">
    <el-menu
        background-color="#0e1117"
        text-color="#8c95a5"
        router
    >
      <SidebarItem :item="item" v-for="item in sidebarRouters" :key="item.name" />
    </el-menu>
  </el-aside>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
import {constantRoutes} from '@/router'

const showLogo = true
const isCollapse = true
const sidebarRouters = constantRoutes
console.log(sidebarRouters)
</script>
<style lang="scss" scoped>
.el-menu{
  height: calc(100vh);
  font-size: 14px;
}

.el-aside {
  > :deep(.el-menu) {
    position: fixed;
    width: 200px;
    border-right: 0 none;
    height: calc(100vh - 60px);
    overflow-y: auto;
  }
  > :deep(.el-menu--collapse) {
    width: 64px;
  }
}
</style>