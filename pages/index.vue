<template>
  <div>
    <!--topページの最新記事を表示-->
    <!--        <time>-->
    <!--          <small class="has-text-grey">-->
    <!--            {{ formatDate(post.sys.createdAt) }}-->
    <!--          </small>-->
    <!--        </time>-->
    <div v-for="(post, i) in series" :key="i" class="card">
      <!--      <nuxt-link-->
      <!--        :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }"-->
      <!--      >-->
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            :src="post.fields.thumbnail.fields.file.url"
            :alt="post.fields.name"
            class="post-card-image"
          />
          <!--          <b-tag class="post-card-category" rounded>-->
          <!--            {{ post.fields.category.fields.name }}-->
          <!--          </b-tag>-->
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          {{ post.fields.name }}
        </div>
      </div>
      <!--      </nuxt-link>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { mapState } from 'vuex'

@Component({
  components: {},
  computed: {
    ...mapState(['series'])
  },
  layout: 'default'
})
export default class extends Vue {
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
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
.post-card {
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: none;
}
.post-card-image {
  border-radius: 10px;
  position: relative;
  &:hover {
    opacity: 0.9;
  }
}

.post-card-category {
  position: absolute;
  top: 20px;
  left: 20px;
}

.post-title {
  padding: 12px 0;
}

@media screen and (max-width: 639px) {
  /*スマホ用のcssを記述*/
  .pagination-wrapper {
    padding: 20px 30px;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 640px) and (max-width: 1023px) {
  /*tablet用のcssを記述*/
  .pagination-wrapper {
    padding: 30px 40px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1024px) {
  /*pc用のcssを記述*/
  .pagination-wrapper {
    padding: 30px 200px;
    margin: 0 auto;
  }
}
</style>
