<template>
  <div class="contact">
    <div class="theme-title title-pos">产品中心</div>
    <div class="product-list">
      <div v-for="item in productTypeList" :key="item.url" class="product-item">
        <nuxt-link :to="{ name: item.url }">
          <img :src="item.img" alt="" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @title mcmatercarr页面
 */
export default {
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
          img: require('@/assets/img/third/product-type/qita1.png'),
          url: 'qita1',
        },
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
.title-pos {
  margin: 60px 0px;
}
.product-list {
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  .product-item {
    margin-bottom: 80px;
  }
  img {
    width: 300px;
    height: 120px;
  }
}
</style>
