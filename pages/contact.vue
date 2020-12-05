<template>
  <div class="contact">
    <div class="contact-title">深圳市北富联机电有限公司</div>
    <div class="contact-detail">
      <p>手机：13570342539</p>
      <p>QQ：374853121</p>
      <p>企业邮箱：northfull@163.com</p>
      <!-- <p>地址：深圳</p> -->
      <p>欢迎添加我的微信～期待你的到来</p>
      <img src="@/assets/img/weixin.png" alt="深圳市北富联机电有限公司" />
      <p class="tips">备注：添加好友，请备明来历哦～</p>
    </div>
  </div>
</template>

<script>
/**
 * @title 联系我们页面
 */
export default {}
</script>

<style lang="less" scoped>
.contact {
  background: #f7f7f7;
  margin: 40px auto 40px auto;
  border: 2px solid @gray-color;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-title {
    font-weight: 600;
    margin: 20px 0;
  }
  img {
    width: 120px;
    height: 120px;
  }
  .tips {
    margin: 20px 0;
  }
}
</style>
