<template>
  <div class="about">
    <div class="banner" />
    <div class="top">
      <div class="theme-title title-pos contact-title">
        <p>北富联机电</p>
        <img :src="require('@/assets/img/third/about-title.png')" alt="" />
      </div>
      <div class="about-content">
        <div>
          <img :src="require('@/assets/img/third/nf_logo.png')" alt="" />
        </div>

        <div class="right">
          <p>
            深圳市北富联机电有限公司（www.northfull.com）是一家工业高精密紧固件销售、服务为一体的专业公司，为客户提供高品质五金紧固件工业服务商！
          </p>
          <p>
            北富联机电主要代理McMASTER-CARR、Helicoil螺套、Berg定位销、Keensert插销螺套、Recoil螺纹护套、Kato螺套、Ensat螺套及配套机电工具等。提供美国标准ANSI（M）、ASME（M）、ASTM（M）、ISO国际标准、DIN德国标准、JIS日本标准等。
          </p>
          <p>
            本公司以“用心服务，客户为核心”为宗旨，坚持以用户的要求为中心，提供高效服务，为客户解决问题。北富联机电是您值得信赖的合作伙伴！
          </p>
        </div>
      </div>
    </div>

    <div class="about-content2">
      <div class="theme-title title2">为什么选择我们</div>
      <div class="contact-desc">
        深圳市北富联机电有限公司秉承“专业、高效、快速、严谨”原则，以“优质服务+快速供货”为特色，五金紧固件专业化服务，真正做到“专心、良心、真心”的高端服务理念。遵循“用心服务，客户至上”的宗旨，本着“顾客是企业发展的源泉”的发展理念，真正做到以客户实际需求为出发点，快速、高效解决难题，追求长远的合作。
      </div>
    </div>
    <div class="about-content3">
      <div class="theme-title title3">
        <div>高品质 保证优质品质</div>
        <img :src="require('@/assets/img/third/about-title.png')" alt="" />
      </div>

      <div class="content-detail">
        <div>
          <img :src="require('@/assets/img/third/banner/home_1.jpg')" alt="" />
          <p>高端五金工业紧固件</p>
        </div>
        <div>
          <img :src="require('@/assets/img/third/about-detail2.png')" alt="" />
          <p>以顾客为本</p>
        </div>
        <div>
          <img :src="require('@/assets/img/third/about-detail3.png')" alt="" />
          <p>专业解决方案</p>
        </div>
      </div>
    </div>
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
        '深圳市北富联机电有限公司-northfull公司简介-高精密紧固件-标准件供应商-高端五金',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '深圳市北富联机电有限公司www.northfull.com是一家工业高精密紧固件公司',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '深圳市北富联机电有限公司www.northfull.com是一家工业高精密紧固件公司',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.about {
  // z-index: 999;
  // margin-top: -400px;
  p {
    margin-bottom: 0px;
  }
  .about-content {
    font-size: 15px;
    display: flex;
    width: 800px;
    margin: 0 auto;
    div {
      width: 50%;
      display: flex;
      // justify-content: center;
    }
    border-bottom: 1px solid #f2f2f2;
  }
  .img-detail {
    margin: 0 auto;
  }
  .about-content2 {
    width: 100%;
    background: url('~@/assets/img/third/about-bg2.jpg') no-repeat center / 100%
      100%;
    height: 500px;
    color: #ffffff !important;
    margin-top: 40px;
    .title2 {
      color: #ffffff;
      padding-top: 80px;
    }
  }
  .contact-desc {
    width: 700px;
    // box-shadow: 0 4px 10px #eaeaea;
    margin: 0 auto;
    line-height: 2;
    font-size: 15px;
    text-indent: 2rem;
    margin-top: 80px;
    margin-bottom: 30px;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    p {
      margin-bottom: 20px;
    }
  }
  .title3 {
    color: #333333;
  }
  .about-content3 {
    margin-top: 40px;
  }
  .content-detail {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: bold;
    p {
      text-align: center;
      margin: 40px 0;
    }
    img {
      width: 372px;
      height: 142px;
    }
  }
}
.contact-title {
}
.top {
  background: #ffffff;
  // position: absolute;
  // height: 600px;
  // margin-top: -300px;
  z-index: 999;
  box-sizing: border-box;
  overflow: hidden;
  width: 60%;
  height: 600px;
  border-radius: 20px;
  // border: 1px solid red;
  margin: -60px auto 100px auto;
}
.banner {
  z-index: -1;
  width: 100%;
  background: url('~@/assets/img/fourth/banner1.jpg');
  height: 400px;
}
</style>
