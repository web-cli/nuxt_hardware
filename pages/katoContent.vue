<template>
  <div class="contact">
    <div class="theme-title title-pos contact-title">
      <!-- <img
        :src="require('@/assets/img/third/small_logo.png')"
        alt="北富联logo"
        class="logo"
      /> -->
      -Kato螺纹护套型号大全-
    </div>

    <div class="contact-desc">
      <div><a-icon type="team" class="icon" /> Amy（梁小姐）</div>
      <div><a-icon type="mail" class="icon" /> sales@northfull.com</div>
      <div><a-icon type="phone" class="icon" />131 8972 9968</div>
      <div><a-icon type="phone" class="icon" />0775-23309243</div>
      <div><a-icon type="qq" class="icon" />318203871</div>
      <div>
        <a-icon type="link" class="icon" />
        <a href="https://www.northfull.com">官网链接</a>
      </div>
      <div class="tips">欢迎添加我的微信～期待你的到来</div>
      <div>
        <img
          src="@/assets/img/fourth/weixin.jpeg"
          alt="深圳市北富联机电有限公司"
        />
      </div>
      <div class="tips2">备注：添加好友，请备明来历哦～</div>
    </div>
    <!-- <div class="contact-title">深圳市北富联机电有限公司</div>
    <div class="contact-detail">
      <p>手机：13570342539</p>
      <p>QQ：374853121</p>
      <p>企业邮箱：northfull@163.com</p>
      <p>欢迎添加我的微信～期待你的到来</p>
      
      <p class="tips">备注：添加好友，请备明来历哦～</p>
    </div> -->
  </div>
</template>

<script>
// eslint-disable-next-line no-undef
LA.init({ id: 'JbzX32k5xqOUNWdg', ck: 'JbzX32k5xqOUNWdg' })
// eslint-disable-next-line no-undef
</script>
<script>
export default {
  computed: {
    tabNative() {
      return this.$store.state.tabNative
    },
  },
  head() {
    return {
      title:
        'Kato螺纹护套型号大全-kato螺套-kato钢丝螺套-kato钢丝螺套代理-kato代理-北富联机电',
      meta: [
        {
          hid: 'Kato-description',
          name: 'description',
          content:
            '深圳市北富联机电有限公司负责Kato中国代理的高精密标准紧固件,Kato紧固件,Kato代理五金紧固件,Kato螺丝螺母,Kato圆柱销等,是一家可以快速供货的Kato代理商.',
        },
        {
          hid: 'Kato-keywords',
          name: 'keywords',
          content:
            'Kato中国代理,Kato螺母,Kato螺丝,Kato螺钉,Kato圆柱销,Kato销,Kato代理,Kato中国总代理,Kato供应商,Kato供应商,北富联机电,深圳北富联,Kato中国官网,Kato官网,五金紧固件,高精密工业紧固件，高品质工业紧固件',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.contact {
  .contact-title {
    // color: @blue-color;
  }
  .logo {
    width: 30px;
    height: 30px;
  }
  .contact-desc {
    width: 1000px;
    // box-shadow: 0 4px 10px #eaeaea;
    margin: 0 auto;
    line-height: 1.7;
    font-size: 16px;
    text-indent: 2rem;
    margin-bottom: 30px;
  }
  .contact-desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
      height: 260px;
      margin-left: 20px;
      margin: 0 auto;
    }
    div {
      width: 400px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
    }
    .icon {
      margin-right: 20px;
    }
    .tips {
      color: #999999;
      font-size: 16px;
    }
    .tips2 {
      color: #999999;
      font-size: 12px;
    }
  }
}
</style>
