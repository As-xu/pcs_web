<template>
    <navbar />
    <sidebar/>
  <div class="main-content" >
      <router-view v-slot="{ Component }">
        <transition name="move" mode="out-in">
          <keep-alive :include="tags">
            <component :is="Component"></component>
          </keep-alive>
        </transition>
      </router-view>
  </div>
</template>

<script setup>
import {
  AppMain,
  Navbar,
  // Settings,
  // TagsView,
  Sidebar
} from './components'
import useSettingsStore from '@/store/modules/settings'
import {computed} from "vue";

const settingsStore = useSettingsStore()

const fixedHeader = computed(() => true);
const tags = []
</script>

<style lang="scss" scoped>
.main-content {
  position: relative;
  margin-left: 200px;
  padding-top: 50px;

  -webkit-transition: left 0.3s ease-in-out;
  transition: margin-left 0.3s ease-in-out;
  &.content-collapse {
    margin-left: 64px;
  }
}

</style>