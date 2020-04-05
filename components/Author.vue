<template>
  <div>
    <h3
      class="has-text-centered has-text-dark has-text-weight-semibold is-size-4 sidebar-header"
    >
      Profile
    </h3>
    <figure class="image is-128x128 profile-pic">
      <img class="is-rounded" src="~/assets/images/profile.jpg" />
    </figure>
    <h4
      class="has-text-centered has-text-dark has-text-weight-semibold is-size-5"
    >
      Rin36xxx
    </h4>
    <p class="has-text-centered profile-text">
      Take a picture, Art, Music and Cafe, Japan, travel รีวิวตามใจฉัน
      ร้านนวดสปา ทำผม ร้านคาเฟ่ แชร์ประสบการ์ณเดทกับหนุ่มญี่ปุ่น
      ประสบการ์ณเรียนต่อที่ญี่ปุ่น เพื่อนคนต่างชาติ
    </p>
    <p class="has-text-centered">
      <a href="https://www.facebook.com/sararin.michaelis">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a href="https://mobile.twitter.com/rin36xxx">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a href="https://www.instagram.com/rin36xxx/">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Slider extends Vue {}
</script>

<style lang="scss" scoped>
.profile-pic {
  margin: 0 auto 30px;
}
.profile-text {
  margin-bottom: 14px;
}
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
