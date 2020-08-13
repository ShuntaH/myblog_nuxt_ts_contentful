<template>
  <section class="hero is-dark is-fullheight-with-navbar">
    <div
      :style="{ backgroundImage: `url(${heroBackgroundImgUrl})` }"
      class="hero-body"
    >
      <div class="container">
        <h2
          class="title is-size-4 has-text-centered hero-animation"
          :class="heroTitleColor"
        >
          {{ heroTitle }}
        </h2>
        <p class="subtitle is-size-6 has-text-centered" :class="heroTitleColor">
          {{ heroSubtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Hero extends Vue {
  @Prop()
  heroTitle!: string

  @Prop()
  heroSubtitle?: string

  @Prop()
  heroTitleColor?: string

  @Prop()
  heroBackgroundImgUrl!: string
}
</script>

<style lang="scss" scoped>
.hero-body {
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.4;
  }

  .hero-title {
  }
  .hero-title-description {
  }
}

.hero-animation {
  animation-name: fade-animation;
  animation-duration: 1.5s;
  animation-delay: 2.1s;
}

@keyframes fade-animation {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
