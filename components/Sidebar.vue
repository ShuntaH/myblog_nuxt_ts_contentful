<template>
  <b-menu>
    <b-menu-list>
      <b-menu-item
        label="Expo"
        icon="link"
        tag="router-link"
        target="_blank"
        to="/expo"
        class="has-text-white-ter"
      >
      </b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Sidebar extends Vue {}
</script>
<style lang="scss" scoped></style>
