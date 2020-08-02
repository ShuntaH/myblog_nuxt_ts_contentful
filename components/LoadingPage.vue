<template>
  <div v-if="loading" class="loading-container">
    <div class="loading">
      <span class="title">LOADING</span>
      <span class="circle1"></span>
      <span class="circle2"></span>
      <span class="circle3"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'nothing'
})
export default class extends Vue {
  loading = false

  public start() {
    this.loading = true
  }

  public finish() {
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.loading-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 31;
}
.loading {
  position: relative;
  width: 100px;
  height: 100px;
}
.loading::after {
  border-radius: 40%;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    #ee88aa,
    rgba(250, 238, 255, 0.3) 90%,
    rgba(230, 238, 255, 0.5)
  );
  animation: color-fade 3s infinite linear;
}
.circle1,
.circle2,
.circle3 {
  opacity: 0.4;
  position: absolute;
  background: #0af;
  width: 100px;
  height: 100px;
  transform-origin: 50% 47%;
  border-radius: 40%;
  animation: rotation 3s infinite linear;
}
.circle2 {
  opacity: 0.2;
  background: #ff0;
  animation: rotation 5s infinite linear;
}
.circle3 {
  animation: rotation 2.5s infinite linear;
}
.title {
  position: absolute;
  top: 33px;
  width: 100%;
  z-index: 1;
  color: #fff;
  text-align: center;
  font-size: 0.7rem;
  line-height: 2rem;
  letter-spacing: 0.15em;
  animation: text-fade 300ms infinite linear;
}
/* 回転アニメーション */
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/* ピンク色の背景のアニメーション */
@keyframes color-fade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
/* 点滅のアニメーション */
@keyframes text-fade {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.9;
  }
  75% {
    opacity: 0.6;
  }
}
</style>
