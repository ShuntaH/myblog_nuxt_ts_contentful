<template>
  <div class="wrapper">
    <div class="section-title">
      <h2 class="is-size-2 is-size-3-mobile has-text-centered">
        Contact
      </h2>
    </div>
    <div class="has-text-dark">
      <section>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <b-field label="Name">
            <b-input type="text" name="name"></b-input>
          </b-field>
          <b-field label="Email">
            <b-input type="email" name="email" maxlength="30"> </b-input>
          </b-field>
          <b-field label="Subject">
            <b-input type="text" name="subject"></b-input>
          </b-field>
          <b-field label="Message">
            <b-input maxlength="400" type="textarea" name="message"></b-input>
          </b-field>
          <b-field>
            <p class="control has-text-centered">
              <button type="submit" class="button is-primary">
                Send message
              </button>
            </p>
          </b-field>
        </form>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  layout: 'default'
})
export default class contact extends Vue {}
</script>
<style lang="scss" scoped>
.section-title {
  padding-top: 90px;
  padding-bottom: 20px;
}
@include pc() {
  .wrapper {
    width: 900px;
    margin: 0 auto 60px;
  }
}
@include tablet() {
  .wrapper {
    width: 90%;
    max-width: 900px;
    margin: 0 auto 60px;
  }
}
@include sp() {
  .section-title {
    margin-top: 60px;
    margin-bottom: 70px;
  }
  .wrapper {
    width: 90%;
    max-width: 410px;
    margin: 0 auto 60px;
  }
}
</style>
