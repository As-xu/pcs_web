
<template>
  <div class="">
    <el-container>
      <el-header class="header">
        <Navigation />
      </el-header>

      <el-container>
        <Body/>
      </el-container>
      <el-footer>
        <FooterBar />
      </el-footer>
    </el-container>
  </div>
</template>


<script setup lang="ts">
import Body from './components/Body.vue'
import Navigation from './components/Navigation.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<style scoped>

.header{
  border-bottom: 2px solid var(--el-border-color);
}
</style>
