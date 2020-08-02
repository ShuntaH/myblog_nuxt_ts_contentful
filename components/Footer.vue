<template>
  <footer class="footer has-background-dark">
    <div class="container">
      <div class="content has-text-centered has-text-grey-lighter">
        <p>
          <nuxt-link to="/">
            <strong class="footer-title has-text-grey-lighter">AoHal</strong>
          </nuxt-link>
          <br />
          <small>Written by</small> Evan
          <small>|</small>
          <small>Developed by</small> Alex
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
        <p><small>© 2020 AoHal</small></p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Navbar extends Vue {}
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
