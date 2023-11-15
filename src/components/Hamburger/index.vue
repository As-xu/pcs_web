<template>

  <div style="align-items: center" @click="toggleClick">
    <el-icon color="#fff" :size="20" class="hamburger"><Expand /></el-icon>
  </div>
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits()
const toggleClick = () => {
  emit('toggleClick');
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;

  width: 25px;
  height: 25px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
