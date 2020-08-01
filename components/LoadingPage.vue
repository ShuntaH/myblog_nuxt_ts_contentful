<template>
  <div></div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  @Component({})
  export default class extends Vue {@Component({
    components: {},
    computed: {
      ...mapState(['series'])
    },
    layout: 'default'
  })
  export default class extends Vue {    name: 'LoadingPage'
  }
</script>

<style scoped>

</style>
