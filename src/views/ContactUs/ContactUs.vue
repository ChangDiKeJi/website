<script setup lang="ts">
import ContactUs from "@/components/contactUs.vue";
import {useTitle} from "@vueuse/core";

useTitle("联系我们");
</script>

<template>
  <div id="main">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1>联系我们</h1>
        </div>
        <div class="col-12 mt-3">
          <ContactUs/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#main{
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: -1;
}
</style>