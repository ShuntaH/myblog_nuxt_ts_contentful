<template>
  <div>
    <h1 class="is-size-1 has-text-dark has-text-centered article-header">
      Contact Form
    </h1>
    <div class="has-text-dark article-content">
      <section>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
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
          <div data-netlify-recaptcha="true"></div>
          <b-field>
            <p class="control">
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
import { Component, Vue } from 'vue-property-decorator'
@Component({
  layout: 'article'
})
export default class contact extends Vue {}
</script>
<style lang="scss" scoped>
.article-header {
  padding-bottom: 60px;
}

.article-content {
  padding-bottom: 100px;
  line-height: 2;
  letter-spacing: 0.07em;
}
</style>
