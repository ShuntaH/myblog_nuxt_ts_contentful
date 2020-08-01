<template>
  <header class="heading has-background-black py-4">
    <h1 class="is-size-5 has-text-weight-semibold has-text-white">
      <slot name="title"></slot>
    </h1>
    <h2 class="is-size-7 has-text-weight-normal has-text-white">
      <slot name="description"></slot>
    </h2>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.heading {
  text-align: center;
  /*padding: 30px 0;*/
}
</style>
