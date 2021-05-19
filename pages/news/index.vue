<template>
  <div class="contact">
    <div class="theme-title title-pos mb20">-企业动态-</div>
    <div class="new-desc">
      深圳市北富联机电有限公司成立于广东深圳市宝安区，是工业高精密紧固件的供应商，主要代理美国品牌McMaster-carr，WMBerg，HeliCoil，Recoil螺纹护套等等。有着稳定的国外供应商，能快速完成交货任务。我们承诺：以最快的交期，优质的服务，优良的质量和合理的价格，成为你最值得信赖的供应商。如果你有其它的需求,请随时联系我。If
      you have any other needs, please feel free to contact me thx2。
    </div>
    <div v-for="(item, index) in newList" :key="index" class="news-item">
      <nuxt-link :to="{ path: '/news/detail', query: { id: item.id } }">
        <div class="item-title">
          {{ item.title }}
          <span>发布时间：{{ item.time }}</span>
        </div>
        <div class="item-desc">
          {{ item.desc }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { newList } from '@/assets/js/news'
/**
 * @title 联系我们页面
 */
export default {
  data() {
    return {
      newList: newList.reverse(),
    }
  },
}
</script>

<style lang="less" scoped>
.contact {
  margin-bottom: 100px;
  .mb20 {
    margin-bottom: 20px;
  }
  .new-desc {
    width: 1000px;
    // box-shadow: 0 4px 10px #eaeaea;
    margin: 0 auto;
    line-height: 1.7;
    font-size: 16px;
    text-indent: 2rem;
    margin-bottom: 60px;
  }
  .news-item {
    height: 120px;
    width: 1000px;
    border: 1px dotted #e0e0e0;
    box-shadow: 0 4px 10px #eaeaea;
    margin: 20px auto;
    padding: 20px 40px 0 40px;
    cursor: pointer;
  }
  .item-title {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 1px solid #f2f2f2;
    color: #333333;
    span {
      font-size: 12px;
      margin-left: 40px;
      color: #999999;
    }
  }
  .item-desc {
    font-size: 14px;
    color: #999999;
    margin-top: 10px;
  }
}
</style>
