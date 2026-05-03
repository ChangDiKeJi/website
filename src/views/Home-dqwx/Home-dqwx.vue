<script setup lang="ts">
import {useTitle} from "@vueuse/core";
import ContactUs from "@/components/contactUs.vue";

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
                   '故障维修',
                   '清洗',
                   '安装',
                   '拆卸',
                   '加氟',
                   '不制冷/制热维修',
               ]
             },
             {
               title: '洗衣机',
               sub:[
                   '故障维修',
                   '漏水维修',
                   '异响修复',
               ]
             },
             {
               title: '冰箱',
               sub:[
                   '故障维修',
                   '不制冷维修',
                   '除冰',
               ]
             },
             {
               title: '电视',
               sub:[
                   '故障维修',
                   '黑屏、花屏、不开机维修',
               ]
             },
             {
               title: '其它电器维修维护',
               sub:[
                   '电脑、微波炉、烤箱、高压锅、电饭煲、热水器、燃气灶、油烟机、咖啡机...',
               ]
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
    <h2>联系方式</h2>
  </div>
  <div class="row">
    <ContactUs/>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>