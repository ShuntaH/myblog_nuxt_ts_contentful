<template>
  <div>
    <section class="hero is-medium">
      <div
        class="hero-body"
        :style="{
          backgroundImage: `url(${post.fields.thumbnail.fields.file.url})`
        }"
      />
    </section>
    <article class="article wrapper">
      <div class="section-title">
        <h2 class="is-size-3 is-size-4-mobile has-text-centered">
          {{ post.fields.title }}
        </h2>
        <p class="has-text-grey has-text-centered">
          {{ formatDate(post.sys.createdAt) }}
        </p>
      </div>
      <div
        class="has-text-dark has-text-centered"
        v-html="toHtmlString(post.fields.content)"
      ></div>
    </article>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'vue-property-decorator'
import { Entry } from 'contentful'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

@Component({
  layout: 'default'
})
export default class Slug extends Vue {
  asyncData({ payload, store, params, error }: Context) {
    const post =
      payload ||
      store.state.posts.find(
        (post: Entry<any>) => post.fields.slug === params.slug
      )

    if (!post) error({ statusCode: 400 })
    return { post }
  }

  toHtmlString(obj: any) {
    const options: object = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({
          data: {
            target: { fields }
          }
        }: {
          data: { target: Entry<any> }
        }): any => {
          if (!fields) return ''
          // ts-ignore
          return `<img src="${fields.file.url}" style="margin: 20px auto"/>`
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
.hero-body {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 10px;
}
.section-title {
  margin-top: 90px;
  margin-bottom: 20px;
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
    max-width: 900px;
    margin: 0 auto 60px;
  }
}

@include sp() {
  .section-title {
    margin-top: 60px;
    margin-bottom: 70px;
  }
  .wrapper {
    width: 90%;
    max-width: 410px;
    margin: 0 auto 60px;
  }
}
</style>
