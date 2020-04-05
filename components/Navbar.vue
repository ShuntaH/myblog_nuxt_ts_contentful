<template>
  <b-navbar
    class="has-text-grey-dark navbar-container"
    type="is-white"
    has-text-centered
    :fixed-top="fixedTop"
  >
    <template slot="brand">
      <b-navbar-item
        class="is-hidden-desktop"
        tag="router-link"
        :to="{ path: '/' }"
      >
        Rin is fine
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item
        class="has-text-weight-medium"
        tag="router-link"
        :to="{ path: '/' }"
      >
        Home
      </b-navbar-item>
      <b-navbar-item
        class="has-text-weight-medium"
        tag="router-link"
        :to="{ path: '/about' }"
      >
        About
      </b-navbar-item>
      <b-navbar-item
        class="has-text-weight-medium"
        tag="router-link"
        :to="{ path: '/contact' }"
      >
        Contact
      </b-navbar-item>
      <b-navbar-dropdown label="Category" hoverable>
        <b-navbar-item
          v-for="(category, i) in categories"
          :key="i"
          tag="router-link"
          :to="{
            name: 'categories-slug',
            params: { slug: category.fields.slug }
          }"
        >
          {{ category.fields.name }}
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template slot="end">
      <div class="navbar-end">
        <div class="control has-icons-right">
          <input class="input" type="text" placeholder="Search" />
          <span class="icon is-small is-right">
            <font-awesome-icon icon="search" />
          </span>
        </div>
        <div>
          &nbsp;
          <a href="#"><font-awesome-icon :icon="['fab', 'facebook']"/></a>
          <a href="#"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
          <a href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
        </div>
      </div>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
@Component({
  computed: {
    ...mapState(['categories'])
  }
})
export default class Navbar extends Vue {
  fixedTop: boolean = true
}
</script>

<style lang="scss" scoped>
.navbar-container {
  padding: 6px 2rem;
}
.navbar-end {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
