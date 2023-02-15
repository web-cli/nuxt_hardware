<template>
  <div class="contact">
    <div class="theme-title title-pos">产品中心</div>
    <div class="product-list col-11 pl2 pr2">
      <div
        v-for="item in productTypeList"
        :key="item.url"
        class="product-item col-lg-4 col-11"
      >
        <nuxt-link :to="{ name: item.url }" class="col-lg-3 col-11">
          <img :src="item.img" alt="" class="col-lg-3 col-11" />
        </nuxt-link>
      </div>
    </div>
    <Solute></Solute>
  </div>
</template>

<script>
import Solute from '~/components/Solute.vue'
/**
 * @title mcmatercarr页面
 */
export default {
  components: { Solute },
  data() {
    return {
      productTypeList: [
        {
          img: require('@/assets/img/third/product-type/mcmastercarr.png'),
          url: 'mcmastercarr',
        },
        {
          img: require('@/assets/img/third/product-type/kato.png'),
          url: 'kato',
        },
        {
          img: require('@/assets/img/third/product-type/ensat.png'),
          url: 'ensat',
        },
        {
          img: require('@/assets/img/third/product-type/helicoil.png'),
          url: 'helicoil',
        },
        {
          img: require('@/assets/img/third/product-type/recoil.png'),
          url: 'recoil',
        },
        {
          img: require('@/assets/img/third/product-type/berg.png'),
          url: 'berg',
        },
        {
          img: require('@/assets/img/third/product-type/keensert.jpeg'),
          url: 'keensert',
        },
        {},
      ],
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'mcmastercarr-description',
          name: 'description',
          content:
            '北富联机电主营mcmaster-carr, mcmaster, mcmaster官网, 麦克马斯特, mcmaster中国代理, mcmaster-carr官网, mcmaster-carr中国代理, helicoil螺套, berg定位销,kato自攻螺套,mcmastercarr, mcmaster carr官网, keensert插销螺套,mcmaster-carr中国区指定代理商的高精密紧固件公司',
        },
        {
          hid: 'mcmastercarr-keywords',
          name: 'keywords',
          content:
            'mcmaster-carr, mcmaster, mcmaster中国代理 ,berg定位销,helicoil螺套,keensert插销螺套，mcmastercarr螺丝,深圳市北富联机电有限公司,北富联,mcmaster,mcmaster carr官网,helicoil钢丝螺套,mcmaster内六角螺钉,麦克马斯特mcmaster, mcmaster官网,kato自攻螺套,mcmaster亚洲代理,helicoil螺纹护套',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.contact {
  // width: 100%;
}
.product-list {
  // width: 1100px;
  display: flex;
  justify-content: space-around;
  // align-items: center;
  margin: 0 auto;
  // padding: 0 60px;
  flex-wrap: wrap;
  border-bottom: 2px solid #f2f2f2;
  .product-item {
    margin: 0 0.2%;
    margin-bottom: 80px;

    // width: 30%;
  }
  img {
    width: 100%;
    // width: 90%;
    // width: 300px;
    // height: 120px;
  }
}
</style>
