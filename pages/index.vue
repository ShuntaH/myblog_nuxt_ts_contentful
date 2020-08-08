<template>
  <div>
    <LoadingPage></LoadingPage>
    <!--なぜかpostionYを書かないとseriesのテキストのアニメーションが起動しない-->
    <p style="display: none">{{ positionY }}</p>
    <h3
      class="heading has-text-centered is-size-3 is-size-4-mobile py-4 has-text-weight-semibold"
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
        v-for="(post, i) in series"
        :key="i"
        class="column is-3-desktop is-6-tablet is-12-mobile"
      >
        <div class="card is-shadowless">
          <!--      <nuxt-link-->
          <!--        :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }"-->
          <!--      >-->
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                :src="post.fields.thumbnail.fields.file.url"
                :alt="post.fields.name"
                class="card-img"
              />
              <!--          <b-tag class="post-card-category" rounded>-->
              <!--            {{ post.fields.category.fields.name }}-->
              <!--          </b-tag>-->
            </figure>
          </div>
          <div class="content has-background-white-bis px-3 py-3">
            <p
              class="is-size-7 has-text-centered has-text-weight-semibold mb-1"
            >
              SERIES{{ i + 1 }}
            </p>
            <h4 class="is-size-6 has-text-centered">
              {{ post.fields.name }}
            </h4>
          </div>
          <!--      </nuxt-link>-->
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
import LoadingPage from '~/components/LoadingPage.vue'

@Component({
  components: { LoadingPage },
  computed: {
    ...mapState(['series'])
  },
  layout: 'default',
  loading: true
})
export default class extends Vue {
  public positionY: number = 0
  public isAnimated: boolean = false
  public notDisplayed: boolean = true

  created() {
    this.$store.commit('setLoading', true)
    setTimeout(() => this.$store.commit('setLoading', false), 2000)
  }

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
.heading {
  margin-top: 60px;
}

div.columns {
  margin-bottom: 60px;
}
.card {
  width: 240px;
}

.card-img {
  object-fit: cover;

  &:hover {
    opacity: 0.8;
  }
}

.content {
  height: 120px;
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
}

@include tablet() {
}

@include sp() {
  .card {
    width: 300px;
    margin: 0 auto;
  }
  .content {
    height: 80px;
  }
}
</style>
