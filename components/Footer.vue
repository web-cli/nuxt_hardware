<template>
  <div class="footer">
    <div class="footer-contact">
      <div class="footer-about">
        <h1>关于我们</h1>
        <div>
          深圳市北富联机电有限公司（www.northfull.com）是一家工业高精密紧固件销售、服务为一体的专业公司，为客户提供高品质五金紧固件工业服务商！
        </div>
        <div class="mt30">
          北富联机电提供ISO国际、美国米制ANSI（M）、ASME（M）、ASTM（M）、JIS日本、DIN德国、EN欧盟、GB中国、BS英国（M）、AS（M）澳大利亚的系列标准件。主要代理McMASER-CARR、Helicoil螺套、BERG定位销、RECOIL螺纹护套及配套机电工具等。
          本公司以“用心服务，客户为核心”为宗旨，坚持以用户的要求为中心，提供高效服务，为客户解决问题。北富联机电是您值得信赖的合作伙伴！
        </div>
      </div>
      <div>
        <h1>联系我们</h1>
        <div>
          <a-icon type="phone" class="icon" width="32" height=" 32" />：{{
            footerDetail.phone
          }}
        </div>
        <div class="mtb20"><a-icon type="qq" class="icon" />：318203871</div>
        <div class="mtb20">企业邮箱：{{ footerDetail.email }}</div>

        <div><img :src="footerDetail.weixinImg" alt="" /></div>
      </div>
    </div>
    <div>
      <div style="width: 300px; margin: 0 auto; padding: 0px 0">
        <a
          target="_blank"
          href=" "
          style="
            display: inline-block;
            text-decoration: none;
            height: 20px;
            line-height: 20px;
          "
        >
          <img
            src="@/assets/img/gongan.png"
            style="float: left; width: 18px; height: 18px"
          />
          <p
            style="
              float: left;
              height: 20px;
              line-height: 20px;
              margin: 0px 0px 0px 5px;
              color: #939393;
            "
          >
            粤公网安备 44030602005168号
          </p></a
        >
      </div>
      <p class="bottom">版权所有:{{ footerDetail.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerDetail: Object.freeze({
        phone: '131 8972 9968',
        email: 'northfull@163.com',
        name: '深圳市北富联机电有限公司',
        weixinImg: require('@/assets/img/weixin.png'),
      }),
    }
  },
}
</script>

<style lang="less" scoped>
.footer {
  min-height: 225px;
  background: #2e2e2e;
  border-top: 2px solid #e8e8e8;
  color: #ffffff;
  .flex-column();
  justify-content: center;
  &-contact {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  img {
    width: 100px;
    height: 100px;
  }
  h1 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    margin-top: 40px;
  }
  &-about {
    width: 40%;
    min-height: 260px;
    border-bottom: 1px solid #4d4d4d;
    margin-bottom: 20px;
    margin-right: 30px;
    div {
      color: #ffffff;
      font-size: 14px;
    }
  }
  .mt30 {
    margin-top: 30px;
    padding-bottom: 20px;
  }
  .icon {
    font-size: 24px;
  }
  .icons-list {
    &.anticon {
      margin-right: 6px;
      font-size: 24px;
    }
  }
  .mtb20 {
    margin: 20px 0;
  }
  div {
    line-height: 1.8;
  }
}
</style>
