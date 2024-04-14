<template>
  <div class="linyos-locked-time">
    <span class="linyos-locked-date">xx月xx日</span>
    <span class="linyos-locked-times">xx:xx</span>
  </div>
  <div class="linyos-locked">
    <div class="linyos-locked-upper">
      <LDock-Lock></LDock-Lock>
    </div>
    <div class="linyos-locked-below">
      <div class="linyos-locked-below-wallpaper">
      </div>
    </div>
  </div>
</template>

<script>
import LDockLock from '../components/LDock-Lock.vue'
import $ from 'jquery'
import { onMounted } from 'vue'
export default {
  name: 'Desktop',
  components: {
    LDockLock
  },
  setup() {
    onMounted(() => {
      const changeDateDock = () => {
        const date = new Date;
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);

        //const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const month = date.getMonth()+1;
        const day = ('0' + date.getDate()).slice(-2);
        const week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];

        $('.linyos-locked-date').text(month + "月" + day + "日" + "  " + week);
        $('.linyos-locked-times').text(hours + ":" + minutes);
      };
      changeDateDock();
      const changeTimeTimer_Dock = setInterval(() => {
        changeDateDock();
      }, 800)
    });
  }
}
</script>
<style scoped>
.linyos-locked {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.linyos-locked-below-wallpaper{
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/IMG_6467.png");
  background-size: cover;
  /*background-position-x: center;
  background-position-y: 35%;*/
}
.linyos-locked-time{
  position: absolute;
  bottom: 5vw;
  left: 2.3vw;
  width: 13vw;
  height: 8.3vw;
  z-index: 999;
}
.linyos-locked-time span{
  display: block;
  position: relative;
}

.linyos-locked-time .linyos-locked-date{
  font-size: 18px;
  font-weight: bold;
  color: var(--warma-brown-4);
  left: 10px;
}

.linyos-locked-time .linyos-locked-times{
  font-size: 130px;
  font-weight: 600;
  color: #FFF;
  opacity: 0.9;
}
</style >