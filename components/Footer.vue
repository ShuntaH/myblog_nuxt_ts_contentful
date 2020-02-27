<template>
  <footer class="footer has-background-dark">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong class="footer-title">Shunta's Blog</strong> by
          <a href="https://github.com/ShuntaH">ShuntaH</a>
          <br />
          <small
            >Powered by
            <strong><a href="https://nuxtjs.org/">Nuxt.js</a></strong> with
            <strong>
              <a href="https://www.typescriptlang.org/">TypeScript</a></strong
            >
            | Theme by <strong><a href="https://buefy.org/">Buefy</a></strong>
          </small>
        </p>
        <a class="icon is-large" href="/">
          <img :src="blogLogo" alt="Blog-logo" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import blogLogo from 'static/images/bloglogo.png'

@Component({})
export default class Navbar extends Vue {
  blogLogo = blogLogo
}
</script>

<style lang="scss" scoped>
.footer-title {
  color: #4a4a4a;
}
@media screen and (max-width: 639px) {
  /*スマホ用のcssを記述*/
  .container {
    margin: 0 auto;
    min-height: unset;
    max-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

@media only screen and (min-width: 640px) and (max-width: 1023px) {
  /*tablet用のcssを記述*/
  .container {
    margin: 0 auto;
    min-height: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

@media screen and (min-width: 1024px) {
  /*pc用のcssを記述*/
  .container {
    margin: 0 auto;
    min-height: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
