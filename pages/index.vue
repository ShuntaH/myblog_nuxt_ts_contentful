<template>
  <div>
    <Hero
      hero-title="そのうち記事書くかもしれない"
      hero-subtitle="From 2018 to 2020"
      hero-title-color="has-text-white"
      :hero-background-img-url="heroBackgroundImgUrl"
    />
    <div class="wrapper">
      <!--なぜかpostionYを書かないとseriesのテキストのアニメーションが起動しない-->
      <p style="display: none">{{ positionY }}</p>
      <h3
        class="has-text-centered is-size-3 is-size-4-mobile has-text-weight-semibold has-text-dark section-title"
        :class="{
          'left-to-right-animation': isAnimated,
          'initial-no-display': notDisplayed
        }"
      >
        SERIES
      </h3>
      <div class="columns is-mobile is-multiline">
        <!--topページの最新記事を表示-->
        <!--        <time>-->
        <!--          <small class="has-text-grey">-->
        <!--            {{ formatDate(post.sys.createdAt) }}-->
        <!--          </small>-->
        <!--        </time>-->
        <div
          v-for="(aSeries, i) in series"
          :key="i"
          class="column is-4-desktop is-6-tablet is-12-mobile"
        >
          <nuxt-link
            :to="{ name: 'series-slug', params: { slug: aSeries.fields.slug } }"
          >
            <div class="card is-shadowless">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    :src="aSeries.fields.thumbnail.fields.file.url"
                    :alt="aSeries.fields.name"
                    class="card-img"
                  />
                  <!--          <b-tag class="aSeries-card-category" rounded>-->
                  <!--            {{ aSeries.fields.category.fields.name }}-->
                  <!--          </b-tag>-->
                </figure>
              </div>
              <div class="content has-background-white px-3 py-5">
                <p class="is-size-7 has-text-centered has-text-weight-medium">
                  SERIES{{ i + 1 }}
                </p>
                <h4 class="is-size-6 has-text-weight-medium has-text-centered">
                  {{ aSeries.fields.name }}
                </h4>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { mapState } from 'vuex'
// 読み込めているがts-lintでエラーが消えない
// @ts-ignore
import heroBackgroundImgUrl from '~/assets/images/hero/artbox_pc.jpg'
import LoadingPage from '~/components/LoadingPage.vue'
import Hero from '~/components/Hero.vue'

@Component({
  components: { LoadingPage, Hero },
  computed: {
    ...mapState(['series'])
  },
  layout: 'default'
})
export default class extends Vue {
  // variables for animation of page substitle
  public positionY: number = 0
  public isAnimated: boolean = false
  public notDisplayed: boolean = true

  // hero img
  heroBackgroundImgUrl = heroBackgroundImgUrl

  mounted() {
    this.positionY = 0
    window.addEventListener('scroll', this.handleScroll)
  }

  updated() {
    if (this.positionY > 200) {
      this.isAnimated = true
      this.notDisplayed = false
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  public handleScroll() {
    this.positionY = window.scrollY
  }

  public formatDate(iso: string | number | Date) {
    const date = new Date(iso)
    const yyyy = String(date.getFullYear())
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    return `${yyyy}.${mm}.${dd}`
  }

  public toHtmlString(obj: any) {
    return documentToHtmlString(obj)
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  margin-top: 90px;
  margin-bottom: 40px;
}

.card {
  width: 300px;
  border: 1px solid whitesmoke;
  background-color: lightgrey;
  .card-img {
    object-fit: cover;

    &:hover {
      opacity: 0.8;
    }
  }
  .content {
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
.left-to-right-animation {
  animation-name: left-to-right;
  animation-duration: 1.5s;
  /*animation-delay: 2.1s;*/
  animation-timing-function: ease-in-out;
}

.initial-no-display {
  opacity: 0;
}

@keyframes left-to-right {
  from {
    transform: translateX(-100%);
    opacity: 1;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}

@include pc() {
  .wrapper {
    width: 900px;
    margin: 0 auto 60px;
  }
}

@include tablet() {
  .wrapper {
    width: 90%;
    margin: 0 auto 60px;
  }
  .card {
    width: 100%;
    margin: 0 auto;
  }
}

@include sp() {
  .section-title {
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .wrapper {
    width: 90%;
    margin: 0 auto 60px;
  }
  .card {
    width: 100%;
    margin: 0 auto;
    .content {
      height: 100px;
    }
  }
}
</style>
