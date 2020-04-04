<template>
  <div>
    <h2 class="subtitle">{{ category.fields.name }}</h2>
    <div
      v-for="(post, i) in relatedPosts(category.fields.name)"
      :key="i"
      class="post-card has-background-black-ter"
    >
      <div v-if="post.fields.thumbnail">
        <figure class="image is-2by1">
          <img
            :src="post.fields.thumbnail.fields.file.url"
            :alt="post.fields.title"
            class="post-card-image"
          />
          <b-tag class="post-card-category" rounded>
            {{ post.fields.category.fields.name }}
          </b-tag>
        </figure>
      </div>
      <h2 class="post-title">
        <nuxt-link :to="'posts/' + post.fields.slug">
          <span class="is-size-4">{{ post.fields.title }}</span>
        </nuxt-link>
      </h2>
      <div class="content">
        <div
          class="has-text-white-ter"
          v-html="truncate(toHtmlString(post.fields.content), 100)"
        ></div>
        <time
          ><small class="has-text-grey">{{
            formatDate(post.sys.createdAt)
          }}</small></time
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { mapGetters } from 'vuex'

@Component({
  async asyncData({ payload, store, params, error }) {
    const category =
      payload ||
      (await store.state.categories.find(
        (cat: any) => cat.fields.slug === params.slug
      ))

    if (category) {
      return { category }
    } else {
      return error({ statusCode: 400 })
    }
  },
  computed: {
    ...mapGetters(['relatedPosts'])
  }
})
export default class category extends Vue {
  public formatDate(iso: string | number | Date) {
    const date = new Date(iso)
    const yyyy = String(date.getFullYear())
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    return `${yyyy}.${mm}.${dd}`
  }

  public truncate(str: string, len: number) {
    return str.length <= len ? str : str.substr(0, len) + '...'
  }

  public toHtmlString(obj: any) {
    return documentToHtmlString(obj)
  }
}
</script>

<style lang="scss" scoped></style>
