<template>
  <div class="linyos-desktop">
    <div class="linyos-desktop-upper">
      <LDock></LDock>
    </div>
    <div class="linyos-desktop-below">
      <div class="linyos-desktop-below-wallpaper">
      </div>
    </div>
  </div>
</template>

<script>
import LDock from '../components/LDock.vue'
export default {
  name: 'Desktop',
  components: {
    LDock
  }
}
</script>
<style scoped>
.linyos-desktop {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.linyos-desktop-below-wallpaper{
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/IMG_6467.png");
  background-size: cover;
  /*background-position-x: center;
  background-position-y: 35%;*/
}
</style >