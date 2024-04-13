<template>
    <div class="linyos-dock">

    </div>
</template>
<script>
import '../assets/config.css'
export default {
    name: "LDock",
    data() {
        return {};
    }
}
</script>
<style scoped>
.linyos-dock {
    position: absolute;
    width: calc(100vw - 0.5vw);
    height: 5.4vh;
    background-color: var(--warma-brown-5);
    z-index: 1;
    bottom: 0;
    margin-left: 0.25vw;
    margin-bottom: 0.2vw;
    border-radius: 0.5vw;
    backdrop-filter: blur(70px);
    opacity: 0.99;
}
</style>