<template>
  <div>
    <figure class="image is-128x128 profile-pic">
      <img class="is-rounded" src="~/assets/images/profile.jpg" />
    </figure>
    <p class="profile-text">
      Take a picture, Art, Music and Cafe, Japan, travel รีวิวตามใจฉัน
      ร้านนวดสปา ทำผม ร้านคาเฟ่ แชร์ประสบการ์ณเดทกับหนุ่มญี่ปุ่น
      ประสบการ์ณเรียนต่อที่ญี่ปุ่น เพื่อนคนต่างชาติ
    </p>
    <p>
      <a href="https://www.facebook.com/sararin.michaelis"
        ><font-awesome-icon :icon="['fab', 'facebook']"
      /></a>
      <a href="https://mobile.twitter.com/rin36xxx"
        ><font-awesome-icon :icon="['fab', 'twitter']"
      /></a>
      <a href="https://www.instagram.com/rin36xxx/"
        ><font-awesome-icon :icon="['fab', 'instagram']"
      /></a>
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Slider extends Vue {}
</script>

<style lang="scss" scoped>
.profile-pic {
  margin: 0 auto 30px;
}
.profile-text {
  margin-bottom: 14px;
}
</style>
