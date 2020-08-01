<template>
  <section class="hero is-medium is-dark is-bold">
    <div class="hero-body">
      <div class="container">
        <h2 class="title is-size-4">
          日本の大学生とタイの女の子の恋の回顧録
        </h2>
        <h3 class="subtitle is-size-6">
          From 2018 to 2020
        </h3>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Hero extends Vue {}
</script>

<style lang="scss" scoped>
.hero-body {
  background-image: url('~assets/images/hero/artbox_pc.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
}
</style>
