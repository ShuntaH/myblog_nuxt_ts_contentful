<template>
  <article class="has-background-black-ter">
    <figure class="media-left">
      <div class="image is-128x128">
        <img class="is-rounded" src="../assets/images/profile.jpg" />
      </div>
    </figure>
    <div class="media-content profile-passage">
      <div class="content">
        <p class="is-size-3 has-text-white-ter">
          <strong>Shunta</strong>
          <small class="has-text-white-ter">@Shunta</small>
        </p>
        <p class="is-size-4 has-text-white-ter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class about extends Vue {}
</script>
<style lang="scss" scoped>
.profile-passage {
  margin-top: 8px;
  margin-bottom: 100px;
}
</style>
