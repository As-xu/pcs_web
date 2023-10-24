<template>
  <div  class="app-wrapper"  >
    <div @click="handleClickOutside"/>
    <sidebar class="sidebar-container" />
    <div  class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar  />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script setup>
// import { useWindowSize } from '@vueuse/core'
import {
  AppMain,
  Navbar,
  // Settings,
  // TagsView,
  Sidebar
} from './components'
// import defaultSettings from '@/settings'
//
// import useAppStore from '@/store/modules/app'
import useSettingsStore from '@/store/modules/settings'
import {computed} from "vue";
//
const settingsStore = useSettingsStore()
// const theme = computed(() => settingsStore.theme);
// const sideTheme = computed(() => settingsStore.sideTheme);
// const sidebar = computed(() => useAppStore().sidebar);
// const device = computed(() => useAppStore().device);
// const needTagsView = computed(() => settingsStore.tagsView);
const fixedHeader = computed(() => true);
//
// const classObj = computed(() => ({
//   hideSidebar: !sidebar.value.opened,
//   openSidebar: sidebar.value.opened,
//   withoutAnimation: sidebar.value.withoutAnimation,
//   mobile: device.value === 'mobile'
// }))
//
// const { width, height } = useWindowSize();
// console.log("尺寸useWindowSize",width,height)
// const WIDTH = 992; // refer to Bootstrap's responsive design
//
// watchEffect(() => {
//   if (device.value === 'mobile' && sidebar.value.opened) {
//     useAppStore().closeSideBar({ withoutAnimation: false })
//   }
//   if (width.value - 1 < WIDTH) {
//     useAppStore().toggleDevice('mobile')
//     useAppStore().closeSideBar({ withoutAnimation: true })
//   } else {
//     useAppStore().toggleDevice('desktop')
//   }
// })
//
function handleClickOutside() {
  ;
}
//
// const settingRef = ref(null);
// function setLayout() {
//   settingRef.value.openSetting();
// }
</script>

<style lang="scss" scoped>
@import "@/style/mixin.scss";
@import "@/style/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$base-sidebar-width});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.sidebarHide .fixed-header {
  width: 100%;
}

.mobile .fixed-header {
  width: 100%;
}
</style>