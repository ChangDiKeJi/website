<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6">
        <div class="d-flex justify-content-center align-items-center">
          <div class="telephone">
            <svg width="32" height="32" class="sg0"><use xlink:href="#svg-bsi-telephone"></use></svg>
            <h5 class="sg1">电话</h5>
            <span class="sg2">xxx</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 mt-2 mt-sm-0">
        <div class="d-flex justify-content-center align-items-center">
          <div class="email">
            <svg width="32" height="32" class="sg0"><use xlink:href="#svg-bsi-envelope-at"></use></svg>
            <h5 class="sg1">电子邮箱</h5>
            <span class="sg2">service@changd.cn</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin contactUsGrid {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(3, auto);//repeat(3, 1fr);
  grid-column-gap: .3rem;
  grid-row-gap: 0;
}
.telephone{
  @include contactUsGrid;
  grid-template-areas:
    "sg0 sg1"
    "sg0 sg2"
  ;
}
.email{
  @include contactUsGrid;
  grid-template-areas:
    "sg0 sg1"
    "sg0 sg2"
;
}
.sg0{
  grid-area: sg0;
}
.sg1{
  grid-area: sg1;
}
.sg2{
  grid-area: sg2;
}
</style>