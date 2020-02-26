<template>
  <b-menu>
    <h3 class="is-size-5 has-text-white-ter has-text-centered">Menu</h3>
    <b-menu-list>
      <b-menu-item
        icon="information-outline"
        label="Thailand"
        :active="isActive"
      >
        <b-menu-item label="Thai Language"></b-menu-item>
        <b-menu-item label="Sightseeing"></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="edit" label="English">
        <b-menu-item label="Movie"></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="computer" label="Programming">
        <b-menu-item label="Backend"></b-menu-item>
        <b-menu-item label="Frontend"></b-menu-item>
        <b-menu-item label="Infrastructure"></b-menu-item>
        <b-menu-item label="Mobile"></b-menu-item>
      </b-menu-item>
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
