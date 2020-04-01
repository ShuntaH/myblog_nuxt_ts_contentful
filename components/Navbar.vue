<template>
  <b-navbar
    class="has-background-black navbar-container"
    type="is-black"
    :fixed-top="fixedTop"
  >
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <p class="blog-title has-text-weight-medium">Sararin Blog</p>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item
        class="blog-title has-text-weight-medium"
        tag="router-link"
        :to="{ path: '/about' }"
      >
        About
      </b-navbar-item>
      <b-navbar-item
        class="blog-title has-text-weight-medium"
        tag="router-link"
        :to="{ path: '/about' }"
      >
        Contact
      </b-navbar-item>
      <b-navbar-dropdown label="Category" hoverable>
        <b-navbar-item href="#">Beauty</b-navbar-item>
        <b-navbar-item href="#">Travel</b-navbar-item>
        <b-navbar-item href="#">Cafe shops</b-navbar-item>
        <b-navbar-item href="#">Life in Kyoto</b-navbar-item>
        <b-navbar-item href="#">Events</b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Navbar extends Vue {
  fixedTop: boolean = true
}
</script>

<style lang="scss" scoped>
.blog-title {
  color: deeppink;
  font-family: 'HanziPen SC', sans-serif;
  font-size: 20px;
  font-weight: bold;
}
.navbar-container {
  padding: 6px 2rem;
  margin-bottom: 30px;
}
</style>
