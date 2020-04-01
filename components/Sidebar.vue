<template>
  <b-menu>
    <h3 class="subtitle"></h3>
    <b-menu-list>
      <b-menu-item icon="information-outline" label="Beauty" :active="isActive">
      </b-menu-item>
      <b-menu-item icon="edit" label="Travel"> </b-menu-item>
      <b-menu-item icon="computer" label="Cafe shops"></b-menu-item>
      <b-menu-item icon="computer" label="Life in Kyoto"></b-menu-item>
      <b-menu-item icon="computer" label="Events"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Sidebar extends Vue {
  isActive: boolean = true
}
</script>
<style lang="scss" scoped></style>
