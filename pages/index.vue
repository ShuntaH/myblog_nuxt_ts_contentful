<template>
  <div>
    <h2 class="subtitle"></h2>
    <div
      v-for="(post, i) in posts"
      :key="i"
      class="post-card has-background-white-bis"
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
        <nuxt-link
          :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }"
        >
          <span class="is-size-4">{{ post.fields.title }}</span>
        </nuxt-link>
      </h2>
      <div class="content">
        <div
          class="has-text-dark"
          v-html="truncate(toHtmlString(post.fields.content), 250)"
        ></div>
        <time
          ><small class="has-text-grey">{{
            formatDate(post.sys.createdAt)
          }}</small></time
        >
      </div>
    </div>
    <template>
      <section class="wrapper"></section>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { mapState } from 'vuex'

@Component({
  components: {},
  computed: {
    ...mapState(['posts'])
  }
})
export default class IndexPage extends Vue {
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
<style lang="scss">
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
  margin-bottom: 60px;
  border-radius: 10px;
  border: none;
}
.post-card-image {
  border-radius: 10px;
  position: relative;
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
  .wrapper {
    padding: 20px 30px;
    margin: 0 auto;
  }
  .subtitle {
    font-weight: 300;
    font-size: 28px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 4px;
  }
}

@media only screen and (min-width: 640px) and (max-width: 1023px) {
  /*tablet用のcssを記述*/
  .wrapper {
    padding: 30px 40px;
    margin: 0 auto;
  }
  .subtitle {
    font-weight: 300;
    font-size: 32px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 10px;
  }
}

@media screen and (min-width: 1024px) {
  /*pc用のcssを記述*/
  .wrapper {
    padding: 30px 200px;
    margin: 0 auto;
  }
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
}
</style>
