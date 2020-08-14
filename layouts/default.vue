<template>
  <div class="has-background-white-bis">
    <Navbar />
    <LoadingPage></LoadingPage>
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Category from '~/components/Category.vue'
import Author from '~/components/Author.vue'
import LoadingPage from '~/components/LoadingPage.vue'

@Component({
  components: {
    LoadingPage,
    Category,
    Author,
    Navbar,
    Footer
  }
})
export default class extends Vue {
  // loading
  created() {
    this.$store.commit('setLoading', true)
    setTimeout(() => this.$store.commit('setLoading', false), 500)
  }
}
</script>

<style lang="scss"></style>
