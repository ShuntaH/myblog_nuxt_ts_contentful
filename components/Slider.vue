<template>
  <div>
    <b-carousel
      class="bulma-carousel"
      :indicator="indicator"
      :indicator-background="indicatorBackground"
      :indicator-inside="indicatorInside"
      :indicator-mode="indicatorMode"
      :indicator-position="indicatorPosition"
      :indicator-style="indicatorStyle"
    >
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section
          :class="carousel.img"
          class="carousel-height is-fullwidth"
        ></section>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Slider extends Vue {
  carousels = [
    { title: 'Slide 1', img: 'carousel-img1' },
    { title: 'Slide 2', img: 'carousel-img2' },
    { title: 'Slide 3', img: 'carousel-img3' }
  ]

  indicator = true
  indicatorBackground = true
  indicatorInside = true
  indicatorMode = 'hover'
  indicatorPosition = 'is-top'
  indicatorStyle = 'is-lines'
}
</script>

<style lang="scss" scoped>
.carousel-img {
  background-size: cover;
  background-position: center;
}
.carousel-img1 {
  @extend .carousel-img;
  background-image: url('~assets/slides/slide1.jpg');
}
.carousel-img2 {
  @extend .carousel-img;
  background-image: url('~assets/slides/slide2.jpg');
}
.carousel-img3 {
  @extend .carousel-img;
  background-image: url('~assets/slides/slide3.jpg');
}
@media screen and (max-width: 639px) {
  /*スマホ用のcssを記述*/
  .carousel-height {
    height: 260px;
  }
  .bulma-carousel {
    margin-top: 12px;
    margin-bottom: 40px;
  }
}
@media only screen and (min-width: 640px) and (max-width: 1023px) {
  /*tablet用のcssを記述*/
  .carousel-height {
    height: 300px;
  }
  .bulma-carousel {
    margin-top: 12px;
    margin-bottom: 60px;
  }
}
@media screen and (min-width: 1024px) {
  /*pc用のcssを記述*/
  .carousel-height {
    height: 400px;
  }
  .bulma-carousel {
    margin-top: 12px;
    margin-bottom: 100px;
  }
}
</style>
