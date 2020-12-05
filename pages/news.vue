<template>
  <div class="contact">
    <div class="contact-title">深圳市北富联机电有限公司(企业新闻)</div>
    <div class="contact-detail">
      <!-- <p>企业新闻</p> -->
      <p>多谢您的关注哦，我们会在后期发布我们的机器新闻，请关注我们吧！</p>
      <p>质量、诚信、道德、服务于一体的机电公司，高兴于您地合作～</p>
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
  width: 800px;
  display: flex;
  min-height: 600px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  &-title {
    font-weight: 600;
    margin: 20px 0;
  }
  p {
    text-align: center;
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
