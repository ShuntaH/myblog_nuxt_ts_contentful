<template>
  <div class="has-background-white-bis">
    <Navbar></Navbar>
    <Hero></Hero>
    <Slider>
      <template #title>
        The latest articles
      </template>
    </Slider>
    <div class="main-wrapper">
      <div class="columns">
        <div class="column is-7">
          <nuxt />
        </div>
        <div class="column is-4 is-offset-1">
          <Author class="sidebar-distance"></Author>
          <Category class="sidebar-distance"></Category>
        </div>
      </div>
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
import Slider from '~/components/Slider.vue'
import Author from '~/components/Author.vue'
@Component({
  components: {
    Category,
    Author,
    Slider,
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

.hero-wrapper {
  margin-top: 0;
}

.sidebar-distance {
  margin-bottom: 70px;
}

@media screen and (max-width: 639px) {
  /*スマホ用のcssを記述*/
  .main-wrapper {
    padding: 20px 30px;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 640px) and (max-width: 1023px) {
  /*tablet用のcssを記述*/
  .main-wrapper {
    padding: 60px 40px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1024px) {
  /*pc用のcssを記述*/
  .main-wrapper {
    padding: 80px 200px;
    margin: 0 auto;
  }
}
</style>
