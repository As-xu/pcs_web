<template>
  <section class="mt-4 mb-5">
  <div class="container mb-4">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-white pl-2 pr-2">
        <div class="collapse navbar-collapse" id="navbarsExplore">
          <ul class="navbar-nav">
            <router-view></router-view>
            <li class="nav-item">
              <router-link class="nav-link" to="/center" >个人中心</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/center" >电影</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/center" >音乐</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/center" >漫画</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/center" >想法</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/center" >网站导航</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/center" >设置</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>

    <div class="container-fluid">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Body"
}
</script>

<style scoped>


</style>