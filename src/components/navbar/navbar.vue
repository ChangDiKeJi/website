<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref, type Ref, watch} from "vue";

const route = useRoute();

const curRouteName:Ref<string|undefined>=ref(undefined);
watch(
    ()=>route.name,
    ()=>{
      curRouteName.value = route.name as string | undefined;
    }
);
</script>

<template>
  <nav class="navbar navbar-expand bg-body-tertiary">
    <div class="container-fluid">
      <!--<a class="navbar-brand" href="#">畅的</a>-->
      <div class="me-auto">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'home'}"
                         class="nav-link"
                         :class="{'active':(curRouteName=='home')}"
            >主页</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'maintenanceList'}"
                         class="nav-link"
                         :class="{'active':(curRouteName=='maintenanceList')}"
            >维修项目</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">

</style>