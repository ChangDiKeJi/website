<script setup lang="ts">

</script>

<template>
  <nav class="navbar navbar-expand bg-body-tertiary">
    <div class="container-fluid">
      <!--<a class="navbar-brand" href="#">畅的</a>-->
      <div class="me-auto">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'home'}" class="nav-link active">主页</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'maintenanceList'}" class="nav-link">维修项目</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">

</style>