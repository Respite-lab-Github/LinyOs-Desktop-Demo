<template>
  <LDock></LDock>
  <div class="linyos-desktop">
    <div class="linyos-desktop-upper">
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
<style>
.linyos-desktop {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.linyos-desktop-below-wallpaper{
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/wallpaper.png");
  background-size: cover;
  background-position-x: center;
  background-position-y: 35%;
}
</style >