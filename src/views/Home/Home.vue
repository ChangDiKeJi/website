<script setup lang="ts">

</script>

<template>
  <div class="w-100 pt-5 pb-5" id="home_title">
    <div class="w-100 d-flex justify-content-center">
      <h1>松滋市畅的电器维修服务中心</h1>
    </div>
    <div class="w-100 d-flex justify-content-center">
      <h4>子标题</h4>
    </div>
    <div class="background"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-6 mt-3">
        <div class="card">
          <div class="card-header card-header-img-box">
            <div class="img-box">
              <img src="@/assets/img/photo-0.jpg" alt="photo" />
            </div>
          </div>
          <div class="card-body">
            内容
          </div>
        </div>
      </div>
      <div class="col-6 mt-3">
        <div class="card">
          <div class="card-header card-header-img-box">
            <div class="img-box">
              <img src="@/assets/img/photo-1.jpg" alt="photo" />
            </div>
          </div>
          <div class="card-body">
            内容
          </div>
        </div>
      </div>
      <div class="col-6 mt-3">
        <div class="card">
          <div class="card-header card-header-img-box">
            <div class="img-box">
              <img src="@/assets/img/photo-2.jpg" alt="photo" />
            </div>
          </div>
          <div class="card-body">
            内容
          </div>
        </div>
      </div>
      <div class="col-6 mt-3">
        <div class="card">
          <div class="card-header card-header-img-box">
            <div class="img-box">
              <img src="@/assets/img/photo-3.jpg" alt="photo" />
            </div>
          </div>
          <div class="card-body">
            内容
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 text-center">
        <h3>标题</h3>
      </div>
      <div class="col-12 col-md-7 order-1 order-md-2">
        <p>文本</p>
      </div>
      <div class="col-12 col-md-5 order-2 order-md-1">
        图像
      </div>
      <div class="col-12 col-md-7">
        <p>文本</p>
      </div>
      <div class="col-12 col-md-5">
        图像
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 text-center">
        <!--<h3>标题</h3>-->
      </div>
      <div class="col-12">
        <p>
          空调早已成为居家、办公、商业空间里不可或缺的电器，而规范的安装与及时的维修，不仅决定空调的制冷制热效果、使用寿命，更直接关系到使用安全与用电节能。无论是新空调入户安装，还是老空调出现故障报修，专业、标准、靠谱的服务，才是安心使用的核心保障。
        </p>
        <p>
          在空调安装环节，专业团队始终遵循严苛流程：上门前精准勘测安装位置，结合户型、通风、排水条件规划最优方案；安装时严格把控外机固定、管路连接、真空抽湿、漏电检测等关键步骤，杜绝安装不规范导致的漏水、漏氟、噪音大、耗电高等问题。同时，全程使用合规配件，规范布线，确保外机稳固、内机美观，既不破坏墙体结构，又能让空调运行更稳定。
        </p>
        <p>
          而空调作为长期运行的电器，使用中难免出现制冷不足、不启动、漏水、异响、异味等故障。此时，及时的专业维修尤为重要。靠谱的维修服务坚持先检测、后报价、再维修，不盲目更换配件，不夸大故障，精准排查压缩机、冷凝器、电路板、冷媒管路等核心部件，从根源解决问题。维修后还会进行试运行调试，确保空调恢复正常运行，同时给出日常保养建议，延长设备使用年限。
        </p>
        <p>
          除此之外，定期的空调清洗保养也不容忽视。滤网积灰、蒸发器污垢不仅会降低制冷效率、增加耗电量，还会滋生细菌、霉菌，影响室内空气质量。定期深度清洁，既能让空调运行更顺畅，又能守护家人呼吸健康。
        </p>
        <p>
          选择专业空调安装维修服务，就是选择省心、安心、放心。从安装到维修，从保养到售后，以专业技术为支撑，以用心服务为理念，为每一台空调保驾护航，让清凉与温暖时刻相伴，守护每一处空间的舒适与安全。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#home_title{
  position: relative;
  .background{
    background-color: var(--bs-secondary-bg);
    position: absolute;
    width: 100%;
    height: 150%;
    top: 0;
    z-index: -1;
  }
}

.card-header-img-box {
  padding: 0;
  overflow: hidden;
  .img-box {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>