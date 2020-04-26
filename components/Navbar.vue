<template>
  <b-navbar
    class="has-text-grey-dark navbar-container"
    type="is-white"
    has-text-centered
    :fixed-top="fixedTop"
  >
    <!--spの時に表示-->
    <template slot="brand">
      <b-navbar-item
        class="is-hidden-desktop"
        tag="router-link"
        :to="{ path: '/' }"
      >
        ambiguous memo
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
      <b-navbar-item class="navbar-end columns" tag="div">
        <div class="column navbar-end-items">
          <b-field>
            <b-input
              placeholder="Search..."
              type="search"
              icon-pack="fas"
              icon="search"
            >
            </b-input>
          </b-field>
        </div>
      </b-navbar-item>
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

.navbar-end-items {
  display: flex;
  align-items: center;
}
</style>
