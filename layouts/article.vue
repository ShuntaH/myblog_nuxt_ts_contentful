<template>
  <div class="has-background-white-bis">
    <Navbar />
    <div class="wrapper">
      <nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import Footer from '~/components/Footer.vue'
import Category from '~/components/Category.vue'
import Author from '~/components/Author.vue'

@Component({
  components: {
    Category,
    Author,
    Navbar,
    Footer,
    Hero
  }
})
export default class extends Vue {}
</script>

<style lang="scss">
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
