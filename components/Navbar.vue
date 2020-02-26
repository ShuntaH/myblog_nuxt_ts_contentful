<template>
  <b-navbar type="is-black navbar-container">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="images/bloglogo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item
        class="has-text-grey-lighter has-text-weight-medium is-italic"
      >
        About
      </b-navbar-item>
      <b-navbar-item
        href="#"
        class="has-text-grey-lighter has-text-weight-medium is-italic"
      >
        Contact
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar-container {
  padding: 6px 2rem;
}
</style>
