<template>
  <div class="footer">
    <div class="footer-contact col-12">
      <div class="footer-about col-12 col-lg-3">
        <h1>关于我们</h1>
        <div>
          深圳市北富联机电有限公司是一家集销售、服务为一体的高精密五金紧固件公司，为客户提供高品质欧美紧固件工业服务商！
        </div>
        <div class="mt30">
          深圳北富联提供美式标准ANSI、ASME、ASTM、ISO、DIN、JIS等标准紧固件。
          北富联公司以“用心服务，客户为核心”为宗旨，坚持以客户的要求为中心，提供高效服务，为客户解决问题！
        </div>
      </div>
      <div class="mid col-12 col-lg-1">
        <h1>产品中心</h1>
        <div>
          <nuxt-link
            :to="{
              path: `/mcmastercarr`,
            }"
          >
            McMaster
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            :to="{
              path: `/helicoil`,
            }"
          >
            Helicoil
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            :to="{
              path: `/berg`,
            }"
          >
            Berg
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            :to="{
              path: `/recoil`,
            }"
          >
            Rceoil
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            :to="{
              path: `/kato`,
            }"
          >
            Kato
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            :to="{
              path: `/ensat`,
            }"
          >
            Ensat
          </nuxt-link>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <h1>联系我们</h1>
        <div>
          <a-icon type="phone" class="icon" width="32" height=" 32" />：{{
            footerDetail.phone
          }}
        </div>
        <div class="mtb20">
          <a-icon type="phone" class="icon" />：0755-23309243
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
        phone2: '0755-23309423',
        email: 'sales@northfull.com',
        name: '深圳市北富联机电有限公司',
        weixinImg: require('@/assets/img/fourth/weixin.jpeg'),
      }),
    }
  },
}
</script>

<style lang="less" scoped>
.mid {
  margin-right: 30px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
}
.footer {
  min-height: 225px;
  background: #2e2e2e;
  border-top: 2px solid #e8e8e8;
  color: #ffffff;
  .flex-column();
  justify-content: center;
  &-contact {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 60px;
    // align-items: flex-start;
    // justify-content: center;
  }

  img {
    width: 120px;
    height: 120px;
  }
  h1 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    margin-top: 40px;
  }
  &-about {
    // width: 40%;
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
