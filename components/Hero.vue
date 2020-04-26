<template>
  <section class="has-background-white-ter">
    <div class="hero-container">
      <img src="~/assets/images/hero.jpg" alt="hero image" />
      <div class="hero-content has-text-left has-background-white is-size-5">
        <h1 class="is-size-5-mobile is-size-3-tablet has-text-weight-semibold">
          ambiguous memo
        </h1>
        <p class="is-size-7-mobile is-size-5-tablet">
          文系から海外移住をすることに決めたエンジニアの忘備録
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Hero extends Vue {}
</script>

<style lang="scss" scoped>
.hero-container {
  position: relative;
  width: 100%;
  img {
    width: 98%;
    height: 100vh;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }
  .hero-content {
    position: absolute;
    bottom: 16%;
    left: 2%;
    padding: 12px;
  }
}
@media screen and (max-width: 768px) {
  /*スマホ用のcssを記述*/
  .hero-container {
    position: relative;
    width: 100%;
    img {
      width: 98%;
      height: auto;
      object-fit: cover;
      display: block;
      margin: 0 auto;
    }
    .hero-content {
      position: absolute;
      bottom: 16%;
      left: 2%;
      padding: 12px;
    }
  }
}
/*@media only screen and (min-width: 769px) and (max-width: 1023px) {*/
/*  !*tablet用のcssを記述*!*/
/*}*/
</style>
