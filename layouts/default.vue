<template>
  <div class="has-background-white-bis">
    <Navbar />
    <Hero />
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
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

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
