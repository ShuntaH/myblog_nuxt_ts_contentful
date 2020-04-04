<template>
  <article class="article">
    <div class="single has-background-white-bis">
      <h1 class="is-size-3 has-text-dark article-title">
        {{ currentPost.fields.title }}
      </h1>
      <div
        class="has-text-dark article-content"
        v-html="toHtmlString(currentPost.fields.content)"
      ></div>
      <p class="has-text-grey">{{ formatDate(currentPost.sys.createdAt) }}</p>
      <p class="has-text-grey">{{ currentPost.fields.category.fields.name }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

@Component({
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.state.posts.find(
        (post: { fields: { slug: string } }) => post.fields.slug === params.slug
      ))

    if (currentPost) {
      return { currentPost }
    } else {
      return error({ statusCode: 400 })
    }
  }
})
export default class slug extends Vue {
  toHtmlString(obj: any) {
    const options: object = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({
          data: {
            target: { fields }
          }
        }: {
          data: { target: { fields: any } }
        }): any => {
          return `<img src="${fields.file.url}"/>`
        }
      }
    }
    return documentToHtmlString(obj, options)
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
.article-title {
  padding-bottom: 60px;
}
.article-content {
  padding-bottom: 100px;
  line-height: 2;
}
</style>
