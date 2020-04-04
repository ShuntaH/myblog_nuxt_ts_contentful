<template>
  <b-menu>
    <h3 class="subtitle">Category</h3>
    <b-menu-list>
      <b-menu-item
        v-for="(category, i) in categories"
        :key="i"
        tag="router-link"
        :to="{
          name: 'categories-slug',
          params: { slug: category.fields.slug }
        }"
        :label="category.fields.name"
      >
      </b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
@Component({
  computed: {
    ...mapState(['categories'])
  }
})
export default class Sidebar extends Vue {
  isActive: boolean = true
}
</script>
<style lang="scss" scoped></style>
