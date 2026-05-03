<script setup lang="ts">
import ContactUs from "@/components/contactUs.vue";
import {useTitle} from "@vueuse/core";

useTitle("荆州畅的科技有限公司");

const aosDelay=200;
const aosDuration=800;
import aos from "@/plugins/aos.ts";
aos(aosDelay,aosDuration);
</script>

<template>
  <div class="w-100 pt-5 pb-5" id="home_title">
    <div class="w-100 d-flex justify-content-center">
      <h1 data-aos="fade-right">荆州畅的科技有限公司</h1>
    </div>
    <div class="w-100 d-flex justify-content-center">
      <h5 class="text-body-tertiary text-center" data-aos="fade-left">家电、计算机、监控、打印机的维修与维护</h5>
    </div>
    <div class="background"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-1 d-none d-md-block d-lg-none"></div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
        <div class="card h-100" data-aos="fade-up" :data-aos-delay="aosDelay">
          <div class="card-header card-header-img-box">
            <div class="img-box">
              <img src="@/assets/img/photo-0.jpg" alt="photo" />
            </div>
          </div>
          <div class="card-body text-center">
            提供市区内的上门服务
          </div>
        </div>
      </div>
      <div class="col-md-2 d-none d-md-block d-lg-none"></div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
        <div class="card h-100" data-aos="fade-up" :data-aos-delay="aosDelay+100">
          <div class="card-header card-header-img-box">
            <div class="img-box">
              <img src="@/assets/img/photo-1.jpg" alt="photo" />
            </div>
          </div>
          <div class="card-body text-center">
            空调安装、拆卸和维修服务
          </div>
        </div>
      </div>
      <div class="col-md-1 d-none d-md-block d-lg-none"></div>
      <div class="col-md-1 d-none d-md-block d-lg-none"></div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
        <div class="card h-100" data-aos="fade-up" :data-aos-delay="aosDelay+200">
          <div class="card-header card-header-img-box">
            <div class="img-box">
              <img src="@/assets/img/photo-2.jpg" alt="photo" />
            </div>
          </div>
          <div class="card-body text-center">
            家用电器维修与维护
          </div>
        </div>
      </div>
      <div class="col-md-2 d-none d-md-block d-lg-none"></div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
        <div class="card h-100" data-aos="fade-up" :data-aos-delay="aosDelay+300">
          <div class="card-header card-header-img-box">
            <div class="img-box">
              <img src="@/assets/img/photo-3.jpg" alt="photo" />
            </div>
          </div>
          <div class="card-body text-center">
            计算机、网络、设备安装、维修和维护服务
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5" id="serviceSection">
      <div class="col-12">
        <div class="row">
          <div class="col-12 text-center">
            <h2 data-aos="zoom-in">我们的服务</h2>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row mt-1">
          <div class="right-text col-12 col-md-7 order-1 order-md-2">
            <div class="d-flex h-100 align-items-center flex-wrap">
              <div data-aos="fade-left">
                <h4>用心服务</h4>
                <p>以匠心致初心，以品质铸信赖。我们深知，真正的服务不止于交付，更在于每一个细节的极致打磨。</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 order-2 order-md-1">
            <div class="img-box-n1">
              <img src="@/assets/img/photo-4.jpg" alt="photo" data-aos="fade-right"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row mt-2">
          <div class="left-text col-12 col-md-7">
            <div class="d-flex h-100 align-items-center flex-wrap">
              <div data-aos="fade-right">
                <h4>专业服务</h4>
                <p>深耕维修领域多年，我们精通从传统家电到现代智能设备的全链路诊断与修复。</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5">
            <div class="img-box-n1">
              <img src="@/assets/img/photo-5.jpg" alt="photo" data-aos="fade-left"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <div class="row">
          <div class="col-12 text-center">
            <h2 data-aos="zoom-in">联系我们</h2>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12 col-md-6 mx-auto">
            <ContactUs  data-aos="flip-up"/>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-5 pb-5"></div>
  </div>
</template>

<style scoped lang="scss" src="./scss/Home.scss"></style>
<style scoped lang="css" src="aos/dist/aos.css"></style>