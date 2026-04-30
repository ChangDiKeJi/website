<script setup lang="ts">
import {useTitle} from "@vueuse/core";

useTitle("松滋市畅的电器维修服务中心");
</script>

<template>
<div class="container">
  <div class="row text-center mt-2">
    <div class="col-12"><h1>松滋市畅的电器维修服务中心</h1></div>
    <div class="col-12 mt-1">
      <strong class="fs-3">为松滋市内提供上门服务</strong>
    </div>
  </div>

  <div class="row text-center mt-2">
    <h2>服务项目</h2>
  </div>
  <div class="row">
    <div class="col-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
    d-flex justify-content-center
"
         v-for="(item,index) in [
             {
               title:'空调',
               sub:[
                   '空调清洗',
                   '空调安装',
                   '空调拆卸',
                   '空调加氟',
               ]
             },
             {
               title: '洗衣机',
               sub:[]
             },
             {
               title: '冰箱'
             },
             {
               title:'微波炉'
             },
             {
               title:'烤箱'
             },
             {
               title: '高压锅'
             },
             {
               title: '电饭煲'
             },
             {
               title: '电视'
             },
             {
               title: '任何电器维修维护',
             },
         ]"
         :key="index"
    >
      <div>
        <span class="fs-5">{{item.title}}</span>
        <ul>
          <li v-for="(subItem,subIndex) in item.sub"
              :key="subIndex"
          >
            {{subItem}}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="row text-center mt-2">
    <h2></h2>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>