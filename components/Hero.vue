<template>
  <div>
    <section class="hero has-background-white-ter has-text-centered">
      <div class="hero-body  hero-wrapper">
        <div class="container">
          <h1 class="title is-size-2-mobile extra-font">
            LingoDev
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Hero extends Vue {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
.extra-font {
  font-family: 'Caveat', cursive;
}
</style>
