<template>
  <footer class="footer has-background-dark">
    <div class="container">
      <div class="content has-text-centered has-text-grey">
        <p>
          <nuxt-link to="/">
            <strong class="footer-title has-text-grey-light">AoHal</strong>
          </nuxt-link>
          <br />
          <small
            >Powered by
            <strong>
              <a href="https://nuxtjs.org/" class="footer-link">
                Nuxt.js
              </a>
            </strong>
            with
            <strong>
              <a href="https://www.typescriptlang.org/" class="footer-link">
                TypeScript
              </a>
            </strong>
            | Theme by
            <strong>
              <a href="https://buefy.org/" class="footer-link">
                Buefy
              </a>
            </strong>
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
@import '~/assets/css/buefy.scss';
.footer-title {
  color: #4a4a4a;
}
.footer-link {
  color: $primary;
}
@include pc() {
  .container {
    margin: 0 auto;
    min-height: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

@include tablet() {
  .container {
    margin: 0 auto;
    min-height: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

@include sp() {
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
</style>
