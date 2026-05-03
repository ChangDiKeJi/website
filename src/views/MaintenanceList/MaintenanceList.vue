<script setup lang="ts">
import maintenanceListTargets from "@/views/MaintenanceList/ts/maintenanceListTargets.ts";

const aosDelay=200;
const aosDuration=800;
import aos from "@/plugins/aos.ts";
aos(aosDelay,aosDuration);
</script>

<template>
  <div class="container">
    <div class="row mt-3 mb-3">
      <div class="col-12 text-center">
        <h1 data-aos="fade-down">维修项目</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-2"
           v-for="(mlt,index) in maintenanceListTargets.targets"
           :key="index"
           data-aos="fade-up"
      >
        <router-link class="card nav-link" :to="{name: mlt.routeName}">
          <div class="row g-0">
            <div class="col-md-4">
              <!--<img src="" class="img-fluid rounded-start" alt="img">-->
              图像：{{mlt.imagePath}}
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{mlt.title}}</h5>
                <p class="card-text">{{mlt.description}}</p>
                <!--<p class="card-text"><small class="text-body-secondary">次要</small></p>-->
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
<style scoped lang="css" src="aos/dist/aos.css"></style>