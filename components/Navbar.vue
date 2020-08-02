<template>
  <b-navbar class="has-text-white navbar-container" type="is-black">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1 class="is-size-4 has-text-weight-semibold">AoHal</h1>
      </b-navbar-item>
    </template>
    <template slot="end">
      <!--      <b-navbar-dropdown label="Category" hoverable>-->
      <!--        <b-navbar-item-->
      <!--          v-for="(category, i) in categories"-->
      <!--          :key="i"-->
      <!--          tag="router-link"-->
      <!--          :to="{-->
      <!--            name: 'categories-slug',-->
      <!--            params: { slug: category.fields.slug }-->
      <!--          }"-->
      <!--        >-->
      <!--          {{ category.fields.name }}-->
      <!--        </b-navbar-item>-->
      <!--      </b-navbar-dropdown>-->
      <b-navbar-item
        class="has-text-weight-normal has-background-black"
        tag="router-link"
        :to="{ path: '/about' }"
      >
        About
      </b-navbar-item>
      <b-navbar-item
        class="has-text-weight-normal has-background-black"
        tag="router-link"
        :to="{ path: '/contact' }"
      >
        Contact
      </b-navbar-item>
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
.navbar-container {
  padding: 6px 2rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}

.navbar-end-items {
  display: flex;
  align-items: center;
}
</style>
