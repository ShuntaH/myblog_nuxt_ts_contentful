<template>
  <carousel
    :autoplay="true"
    :loop="true"
    :perPageCustom="[
      [1, 1],
      [639, 3],
      [1024, 3]
    ]"
    :pagination-enabled="true"
    :pagination-padding="5"
    :autoplay-timeout="4000"
    :autoplay-hover-pause="true"
    :navigation-enabled="true"
  >
    <slide v-for="(post, i) in posts" :key="i" class="carousel-wrapper">
      <nuxt-link
        class="carousel-img"
        :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }"
      >
        <img
          class="carousel-img"
          :src="post.fields.thumbnail.fields.file.url"
        />
        <div class="carousel-text">
          <p class="has-text-white has-text-weight-semibold">
            {{ post.fields.title }}
          </p>
          <p class="has-text-white has-text-weight-semibold">
            <b-tag>{{ post.fields.category.fields.name }}</b-tag>
          </p>
        </div>
      </nuxt-link>
    </slide>
  </carousel>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

@Component({
  components: {
    Carousel,
    Slide
  },
  computed: {
    ...mapState(['posts'])
  }
})
export default class Slider extends Vue {}
</script>

<style lang="scss" scoped>
.VueCarousel-slide {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #fff;
  box-sizing: border-box;
}
.carousel-wrapper {
  position: relative;
  opacity: 0.8;
}
.carousel-text {
  position: absolute;
  bottom: 20px;
  left: 16px;
}
// responsive
@media screen and (max-width: 639px) {
  /*スマホ用のcssを記述*/
  .carousel-img {
    height: 200px;
    width: 100%;
  }
}
@media only screen and (min-width: 640px) and (max-width: 1023px) {
  /*tablet用のcssを記述*/
  .carousel-img {
    height: 260px;
    width: 100%;
  }
}
@media screen and (min-width: 1024px) {
  /*pc用のcssを記述*/
  .carousel-img {
    height: 360px;
    width: 100%;
  }
}
</style>
