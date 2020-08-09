<template>
  <div>
    <h3
      class="has-text-centered is-size-3 is-size-4-mobile py-4 has-text-weight-semibold"
    >
      {{ series.fields.name }}
    </h3>
    <ul
      v-for="(post, i) in seriesRelatedPosts(this.series.fields.name)"
      :key="i"
    >
      <li>{{ post.fields.title }}</li>
    </ul>
    {{ series.fields.name }}
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import { Entry } from 'contentful/index'

@Component({
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
