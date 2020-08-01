<template>
  <div>
    <h2
      class="is-size-5-mobile is-size-3-tablet has-text-weight-semibold has-text-centered py-4"
    >
      <slot name="title"></slot>
    </h2>
    <div class="carousel-wrapper">
      <div v-if="posts[0]">
        <carousel
          :autoplay="true"
          :loop="true"
          :per-page-custom="[
            [1, 1],
            [768, 2],
            [1023, 3]
          ]"
          :pagination-enabled="true"
          :pagination-padding="5"
          :autoplay-timeout="4000"
          :autoplay-hover-pause="true"
        >
          <slide v-for="(post, i) in posts" :key="i" class="carousel-item">
            <nuxt-link
              :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }"
            >
              <figure class="image is-16by9">
                <img
                  class="carousel-img"
                  :src="post.fields.thumbnail.fields.file.url"
                  :alt="post.fields.title"
                />
              </figure>
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
      </div>
      <div v-else>
        <h3
          class="is-size-5-mobile is-size-3-tablet has-text-weight-semibold has-text-centered"
        >
          There is no articles published yet
        </h3>
      </div>
    </div>
  </div>
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
.carousel-wrapper {
  width: 100%;
}
// responsive
@media screen and (max-width: 768px) {
  /*スマホ用のcssを記述*/
  .carousel-item {
    position: relative;
    opacity: 0.8;
    height: auto;

    &:hover {
      opacity: 0.9;
    }

    .carousel-img {
      object-fit: cover;
    }

    .carousel-text {
      position: absolute;
      bottom: 20px;
      left: 16px;
    }
  }
}

@media only screen and (min-width: 769px) and (max-width: 1023px) {
  /*tablet用のcssを記述*/
  .carousel-item {
    position: relative;
    opacity: 0.8;
    height: auto;
    border-right: 1px solid #fff;
    &:hover {
      opacity: 0.9;
    }

    .carousel-img {
      object-fit: cover;
    }

    .carousel-text {
      position: absolute;
      bottom: 20px;
      left: 16px;
    }
  }
}

@media screen and (min-width: 1024px) {
  /*pc用のcssを記述*/
  .carousel-item {
    position: relative;
    opacity: 0.8;
    width: 100%;
    height: auto;
    border-right: 1px solid #fff;
    &:hover {
      opacity: 0.9;
    }

    .carousel-img {
      object-fit: cover;
    }

    .carousel-text {
      position: absolute;
      bottom: 20px;
      left: 16px;
    }
  }
}
</style>
