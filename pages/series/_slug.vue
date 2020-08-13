<template>
  <div>
    <Hero
      :hero-title="this.series.fields.name"
      hero-subtitle="From 2018 to 2020"
      hero-title-color="has-text-dark"
      :hero-background-img-url="this.series.fields.thumbnail.fields.file.url"
    />
    <h3
      class="has-text-centered is-size-3 is-size-4-mobile py-4 has-text-weight-semibold"
    >
      {{ this.series.fields.name }}
    </h3>
    <div
      v-for="(post, i) in seriesRelatedPosts(this.series.fields.name)"
      :key="i"
    >
      <h4>{{ post.fields.title }}</h4>
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
}
</script>

<style lang="scss" scoped></style>
