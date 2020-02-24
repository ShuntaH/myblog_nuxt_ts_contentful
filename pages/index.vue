<template>
  <div class="has-background-black-ter">
    <Navbar></Navbar>
    <Carousel class="carousel has-background-black-ter"></Carousel>
    <div class="columns has-background-black-ter wrapper">
      <div class="column is-two-thirds">
        <div
          v-for="(post, index) in posts"
          :id="post.sys.id"
          :key="index"
          :title="post.fields.title"
          :date="post.sys.updatedAt"
          class="post-card has-background-black-ter"
        >
          <div v-if="post.fields.thumbnail">
            <figure class="image is-2by1">
              <img
                :src="post.fields.thumbnail.fields.file.url"
                alt="Placeholder image"
                class="post-card-image"
              />
            </figure>
          </div>
          <div class="post-card-header">
            <div class="post-card-header-title">
              <nuxt-link :to="'posts/' + post.fields.slug">
                <h2 class="is-size-4">{{ post.fields.title }}</h2>
              </nuxt-link>
            </div>
          </div>
          <div class="post-card-content">
            <div class="content">
              <p class="has-text-white-ter">
                {{ post.fields.contents.content[0].content[0].value }}
              </p>
              <time
                ><small class="has-text-grey-lighter">{{
                  formatDate(post.sys.createdAt)
                }}</small></time
              >
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <Sidebar></Sidebar>
      </div>
    </div>
    <template>
      <section class="wrapper">
        <b-pagination
          :current.sync="current"
          :range-before="rangeBefore"
          :range-after="rangeAfter"
          :order="order"
          :size="size"
          :simple="isSimple"
          :rounded="isRounded"
          :per-page="perPage"
          :icon-prev="prevIcon"
          :icon-next="nextIcon"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"
        >
        </b-pagination>
      </section>
    </template>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { createClient } from '~/plugins/contentful'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Carousel from '~/components/Carousel.vue'
import Sidebar from '~/components/Sidebar.vue'

const client = createClient()

@Component({
  components: {
    Navbar,
    Footer,
    Carousel,
    Sidebar
  },
  // `env` is available in the context object
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  asyncData() {
    return Promise.all([
      // fetch the owner of the blog
      // client.getEntries({
      //   'sys.id': env.CTF_PERSON_ID
      // }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: 'post',
        order: '-sys.createdAt'
      })
    ])
      .then(([posts]) => {
        // return data that should be available
        // in the template
        return {
          // eslint-disable-next-line no-undef
          posts: posts.items
        }
      })
      .catch(console.error)
  }
})
export default class IndexPage extends Vue {
  head = {
    title: 'Post list'
  }

  current = 10
  perPage = 10
  rangeBefore = 3
  rangeAfter = 1
  order = ''
  size = ''
  isSimple = false
  isRounded = false
  prevIcon = 'chevron-left'
  nextIcon = 'chevron-right'

  formatDate(iso: string | number | Date) {
    const date = new Date(iso)
    const yyyy = String(date.getFullYear())
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    return `${yyyy}.${mm}.${dd}`
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
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
.carousel {
  padding-bottom: 30px;
}
.post-card {
  margin-bottom: 60px;
  border-radius: 10px;
  border: none;
}
.post-card-image {
  border-radius: 10px;
}

@media screen and (max-width: 639px) {
  /*スマホ用のcssを記述*/
  .wrapper {
    padding: 20px 30px;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 640px) and (max-width: 1023px) {
  /*tablet用のcssを記述*/
  .wrapper {
    padding: 30px 40px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1024px) {
  /*pc用のcssを記述*/
  .wrapper {
    padding: 30px 200px;
    margin: 0 auto;
  }
}
</style>
