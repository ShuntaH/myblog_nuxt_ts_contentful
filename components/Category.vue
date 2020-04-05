<template>
  <b-menu>
    <h3
      class="has-text-centered has-text-dark has-text-weight-semibold is-size-4 sidebar-header"
    >
      Category
    </h3>
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
<style lang="scss" scoped>
.sidebar-header {
  display: flex; /* 横並びにする */
  align-items: center; /* 垂直方向に中央 */
  text-align: center; /* 文字のセンタリング(複数行になったとき用) */
  margin-bottom: 50px;
  /* 共通部分はまとめる */
  &::before,
  &::after {
    content: '';
    flex-grow: 1; /* 線の伸び率 */
    border-bottom: 1px solid #333;
  }

  /* 左側の線 */
  &::before {
    margin-right: 10px; /* 線と文字の間のスペース */
    padding-left: 15px; /* 線の長さが、最低でも15px以上になるように余白をとる */
  }

  /* 右側の線 */
  &::after {
    margin-left: 10px; /* 線と文字の間のスペース */
    padding-right: 15px; /* 線の長さが、最低でも15px以上になるように余白をとる */
  }
}
</style>
