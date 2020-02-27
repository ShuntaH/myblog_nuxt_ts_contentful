<template>
  <article class="article">
    <div class="single has-background-black-ter">
      <h1 class="is-size-3 has-text-white-ter article-title">
        {{ post.fields.title }}
      </h1>
      <div
        class="has-text-white-ter article-content"
        v-html="toHtmlString(post.fields.contents)"
      ></div>
      <p class="has-text-grey">{{ formatDate(post.sys.createdAt) }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { createClient } from '~/plugins/contentful.js'
import Article from '~/layouts/article.vue'

const client = createClient()

@Component({
  components: { Article },
  asyncData({ params, payload }) {
    if (payload) return { post: payload }
    return client
      .getEntries({
        content_type: 'post',
        'fields.slug': params.slug
      })
      .then((entries: { items: any[] }) => {
        return { post: entries.items[0] }
      })
      .catch((e: string) => console.log(e))
  },
  layout: 'article'
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
}
</style>
