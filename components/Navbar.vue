<template>
  <b-navbar
    class="has-background-black navbar-container"
    type="is-black"
    fixed-top="true"
  >
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img :src="blogLogo" alt="Shunta's Blog" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item
        class="has-background-black has-text-grey-lighter has-text-weight-medium is-italic"
        tag="router-link"
        :to="{ path: '/about' }"
      >
        About
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import blogLogo from 'static/images/bloglogo.png'

@Component({})
export default class Navbar extends Vue {
  blogLogo = blogLogo
}
</script>

<style lang="scss" scoped>
.navbar-container {
  padding: 6px 2rem;
  margin-bottom: 30px;
}
</style>
