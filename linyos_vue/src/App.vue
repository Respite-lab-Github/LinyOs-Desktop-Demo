<template>
  <div class="upper-show-text">
    <span>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32.000244140625" height="32" viewBox="0 0 32.000244140625 32" fill="none">
  <path d="M16.0003 29.3333C19.6822 29.3333 23.0155 27.8409 25.4284 25.428C27.8413 23.0152 29.3337 19.6818 29.3337 16C29.3337 12.3181 27.8413 8.98476 25.4284 6.57187C23.0155 4.15901 19.6822 2.66663 16.0003 2.66663C12.3185 2.66663 8.98513 4.15901 6.57223 6.57187C4.15938 8.98476 2.66699 12.3181 2.66699 16C2.66699 19.6818 4.15938 23.0152 6.57223 25.428C8.98513 27.8409 12.3185 29.3333 16.0003 29.3333Z" stroke="rgba(237, 230, 233, 1)" stroke-width="2.6666666666666665" stroke-linejoin="round"  >
  </path>
  <path d="M15.9997 24.6665C16.9201 24.6665 17.6663 23.9203 17.6663 22.9998C17.6663 22.0793 16.9201 21.3331 15.9997 21.3331C15.0792 21.3331 14.333 22.0793 14.333 22.9998C14.333 23.9203 15.0792 24.6665 15.9997 24.6665Z" fill-rule="evenodd"  fill="#EDE6E9" >
  </path>
  <path    stroke="rgba(237, 230, 233, 1)" stroke-width="2.6666666666666665" stroke-linejoin="round" stroke-linecap="round"  d="M16 7.99988L16 18.6665">
  </path>
  </svg>
    </span>
    <span>您正处于内部版本</span>
    <span>liny OS Developer Version 22575.461</span>
    <span>请勿泄露 违者承担法律责任</span>
  </div>
  <router-view/>
</template>

<style>
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
.upper-show-text{
  position: absolute;
  z-index: 9999;
  right: 1vw;
  bottom: 10vh;
  font-size: 13px;
  font-weight: bold;
  color: var(--warma-brown-5);
}
.upper-show-text span{
  display: block;
  text-align: right;
  margin-top: 6px;
}
</style>
