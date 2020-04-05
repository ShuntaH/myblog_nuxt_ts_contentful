<template>
  <section>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <b-field label="Name">
        <b-input type="text" name="name"></b-input>
      </b-field>
      <b-field label="Email">
        <b-input type="email" name="email" maxlength="30"> </b-input>
      </b-field>
      <b-field label="Message">
        <b-input maxlength="400" type="textarea"></b-input>
      </b-field>
      <b-field>
        <p class="control">
          <button type="submit" class="button is-primary">
            Send message
          </button>
        </p>
      </b-field>
    </form>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class contact extends Vue {}
</script>
<style lang="scss" scoped>
.profile-passage {
  margin-top: 8px;
  margin-bottom: 100px;
}
</style>
