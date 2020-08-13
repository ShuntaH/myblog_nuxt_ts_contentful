<template>
  <div>
    <Hero
      :hero-title="this.series.fields.name"
      hero-subtitle="From 2018 to 2020"
      hero-title-color="has-text-black-bis"
      :hero-background-img-url="this.series.fields.thumbnail.fields.file.url"
    />
    <div class="wrapper">
      <p class="is-size-3 is-size-4-mobile py-4 mt-5 has-text-weight-semibold">
        All Stories
      </p>
      <ul>
        <li
          v-for="(post, i) in seriesRelatedPosts(this.series.fields.name)"
          :key="i"
          class="is-size-6 has-text-weight-semibold story-list"
        >
          <span class="pr-4">
            {{ i + 1 }}
          </span>
          <h4 class="is-size-6">
            <nuxt-link to="#">{{ post.fields.title }}</nuxt-link>
          </h4>
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
}
</script>

<style lang="scss" scoped>
.story-list {
  border-bottom: 0.5px solid whitesmoke;
  display: flex;
  justify-content: start;
}
ul {
  margin-bottom: 60px;
}
@include pc() {
  .wrapper {
    width: 900px;
    margin: 0 auto;
  }
}

@include tablet() {
  .wrapper {
    width: 70%;
    max-width: 900px;
    margin: 0 auto;
  }
}

@include sp() {
  .wrapper {
    width: 90%;
    max-width: 410px;
    margin: 0 auto;
  }
}
</style>
