<template>
  <div>
    <Hero
      :hero-title="this.series.fields.name"
      hero-subtitle="From 2018 to 2020"
      hero-title-color="has-text-black-bis"
      :hero-background-img-url="this.series.fields.thumbnail.fields.file.url"
    />
    <div class="wrapper">
      <p
        class="is-size-3 is-size-4-mobile has-text-weight-semibold section-title"
      >
        All Stories
      </p>
      <ul>
        <li
          v-for="(post, i) in seriesRelatedPosts(this.series.fields.name)"
          :key="i"
          class="has-text-weight-semibold pb-1 mb-4 story-list"
        >
          <span class="is-size-6 pr-4">
            {{ i + 1 }}
          </span>
          <h4 class="is-size-7 story-name">
            <nuxt-link
              :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }"
            >
              {{ post.fields.title }}
            </nuxt-link>
          </h4>
          <p class="is-size-7 has-text-weight-medium">
            {{ formatDate(post.sys.updatedAt) }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import { mapGetters } from 'vuex'
import { Entry } from 'contentful/index'
import Hero from '~/components/Hero.vue'

@Component({
  components: { Hero },
  layout: 'default',
  computed: {
    ...mapGetters(['seriesRelatedPosts'])
  }
})
export default class extends Vue {
  asyncData({ payload, store, params, error }: Context) {
    const series =
      payload ||
      store.state.series.find(
        (aSeries: Entry<any>) => aSeries.fields.slug === params.slug
      )

    if (!series) error({ statusCode: 400 })
    return { series }
  }

  formatDate(iso: string | number | Date) {
    const date = new Date(iso)
    const yyyy = String(date.getFullYear())
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    return `${yyyy}.${mm}.${dd}`
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  margin-top: 90px;
  margin-bottom: 20px;
}
.story-list {
  border-bottom: 0.5px solid lightgrey;
  display: flex;
  justify-content: start;
  align-items: center;
  .story-name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  & > :last-child {
    margin-left: auto;
  }
}
ul {
  margin-bottom: 60px;
}
@include pc() {
  .wrapper {
    width: 900px;
    margin: 0 auto 60px;
  }
}

@include tablet() {
  .wrapper {
    width: 70%;
    max-width: 900px;
    margin: 0 auto 60px;
  }
}

@include sp() {
  .wrapper {
    width: 90%;
    max-width: 410px;
    margin: 0 auto 60px;
  }
  .section-title {
    margin-top: 60px;
    margin-bottom: 20px;
  }
}
</style>
