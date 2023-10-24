<template>
  <div >
    <el-scrollbar  wrap-class="scrollbar-wrapper">
      <logo v-if="showLogo"   :collapse="isCollapse"/>
      <el-menu
          mode="vertical"
      >
        <sidebar-item
            v-for="(route, index) in sidebarRouters"
            :key="route.path + index"
            :item="route"
            :base-path="route.path"
        />
      </el-menu>

    </el-scrollbar>
  </div>
</template>

<script setup>
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import {routes} from '@/router'

const showLogo = true
const isCollapse = true
const sidebarRouters = routes
console.log(sidebarRouters)
</script>
<style>

</style>