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
            '深圳市北富联机电有限公司负责mcmastercarr中国代理的高精密标准紧固件,mcmastercarr紧固件,mcmastercarr代理五金紧固件,mcmastercarr螺丝螺母,mcmastercarr圆柱销等,是一家可以快速供货的mcmastercarr代理商.',
        },
        {
          hid: 'mcmastercarr-keywords',
          name: 'keywords',
          content:
            'mcmastercarr中国代理,mcmastercarr螺母,mcmastercarr螺丝,mcmastercarr螺钉,mcmastercarr圆柱销,mcmastercarr销,mcmastercarr代理,mcmastercarr中国总代理,mcmastercarr供应商,mcmastercarr供应商,北富联机电,深圳北富联,mcmastercarr中国官网,mcmastercarr官网,五金紧固件,高精密工业紧固件，高品质工业紧固件',
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
