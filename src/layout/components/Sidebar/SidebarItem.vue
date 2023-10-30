<template>

  <el-menu-item :index="getPath(parentPath, item.path)" class="menuItem">
    <el-icon><Menu /></el-icon>
    <template #title >{{ item.meta.title}}</template>
  </el-menu-item>
</template>

<script lang="ts" setup  >
const props = defineProps({
  item: { type: Object, default: () => {} },
  parentPath: { type: String, default: '' },
  level: { type: Number, default: 0 }
})


function getPath(parentPath: string, path: string) {
  if (parentPath) return `${parentPath}/${path}`
  else return path
}
</script>


<style lang="scss" scoped>
.menuItem{
  //color: #fff;
  font-size: 16px;
}
</style>