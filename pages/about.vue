<template>
  <article class="wrapper">
    <div class="section-title">
      <h2 class="is-size-2 is-size-3-mobile has-text-centered">
        About this site
      </h2>
    </div>
    <div class="has-text-dark is-size-6">
      <p>
        このサイトは管理人が
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'default'
})
export default class about extends Vue {}
</script>
<style lang="scss" scoped>
.section-title {
  padding-top: 90px;
  padding-bottom: 20px;
}
@include pc() {
  .wrapper {
    width: 900px;
    margin: 0 auto 60px;
  }
}
@include tablet() {
  .wrapper {
    width: 90%;
    max-width: 900px;
    margin: 0 auto 60px;
  }
}
@include sp() {
  .section-title {
    margin-top: 60px;
    margin-bottom: 70px;
  }
  .wrapper {
    width: 90%;
    max-width: 410px;
    margin: 0 auto 60px;
  }
}
</style>
