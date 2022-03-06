<template>
  <div class="contact">
    <div class="theme-title title-pos contact-title">
      <!-- <img
        :src="require('@/assets/img/third/small_logo.png')"
        alt="北富联logo"
        class="logo"
      /> -->
      -关于我们-
    </div>
    <div class="contact-desc">
      深圳市北富联机电有限公司成立于广东深圳市宝安区，是工业高精密紧固件的供应商，主要代理美国品牌McMaster-carr，Berg，HeliCoil，Recoil螺纹护套等等。有着稳定的国外供应商，能快速完成交货任务。我们承诺：以最快的交期，优质的服务，优良的质量和合理的价格，成为你最值得信赖的供应商。如果你有其它的需求,请随时联系我们。
    </div>
    <div class="contact-desc">
      <div><a-icon type="team" class="icon" /> Lisa Leung</div>
      <div><a-icon type="mail" class="icon" /> northfull@foxmail.com</div>
      <div><a-icon type="phone" class="icon" />131 8972 9968</div>
      <div><a-icon type="qq" class="icon" />318203871</div>
      <div class="tips">欢迎添加我的微信～期待你的到来</div>
      <div>
        <img src="@/assets/img/weixin.png" alt="深圳市北富联机电有限公司" />
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
      title: '联系北富联机电拨打13189729968,微信：beifulian',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'mcmaster五金,berg定位销,keensert插销螺套可拨打13189729968或微信WX:beifulian',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '北富联,深圳北富联机电,深圳市北富联机电有限公司,northfull,beifulian,13189729968,北富联机电微信',
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
      height: 200px;
      margin-left: 20px;
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
