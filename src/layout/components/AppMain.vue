<template>
  <div class="app-main">

<!--    <iframe-toggle />-->
    <div>23333333333</div>
    <div>23333333333</div>
    <div>23333333333</div>
    <div>23333333333</div>
    <div>23333333333</div>
    <div>23333333333</div>
    <div>23333333333</div>
    <div>23333333333</div>
    <div>23333333333</div>
    <div>23333333333</div>
    <div>23333333333</div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>
