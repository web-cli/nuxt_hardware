<template>
  <div class="contact">
    <div class="theme-title title-pos mb20">-企业动态-</div>
    <div class="new-desc">
      深圳市北富联机电有限公司成立于广东深圳市宝安区，是工业高精密紧固件的供应商，主要代理美国品牌McMaster-carr，WMBerg，HeliCoil，Recoil螺纹护套等等。有着稳定的国外供应商，能快速完成交货任务。我们承诺：以最快的交期，优质的服务，优良的质量和合理的价格，成为你最值得信赖的供应商。如果你有其它的需求,请随时联系我。If
      you have any other needs, please feel free to contact me 。
    </div>
    <div v-for="(item, index) in newList" :key="index" class="news-item">
      <nuxt-link
        :to="{ path: '/news/detail', query: { id: item.id || item._id } }"
      >
        <div class="item-title">
          {{ item.title }}
          <span
            >发布时间：{{
              item.time || new Date(item.createdAt).toLocaleString()
            }}</span
          >
        </div>
        <div class="item-desc">
          <div v-if="item.desc">
            {{ item.desc }}
          </div>
          <div v-else v-html="item.subTitle"></div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-undef
LA.init({ id: 'JbzX32k5xqOUNWdg', ck: 'JbzX32k5xqOUNWdg' })
// eslint-disable-next-line no-undef
</script>
<script>
import { seo } from '@/static/js/common'
import { newList } from '@/assets/js/news'
import { getNews } from '@/network/home'
export default {
  data() {
    return {
      newList: JSON.parse(JSON.stringify(newList.reverse())),
      allNewList: [],
    }
  },
  computed: {
    tabNative() {
      return this.$store.state.tabNative
    },
  },
  methods: {
    _initLA() {
      window.LA.init({ id: 'JbzX32k5xqOUNWdg', ck: 'JbzX32k5xqOUNWdg' })
    },
    async getNews() {
      const res = await getNews()
      if (!res) return
      this.allNewList = res.data
        .find((item) => item.name === '新闻')
        .news_list.reverse()
      this.newList = JSON.parse(JSON.stringify(this.newList.reverse()))
      this.newList.unshift(...this.allNewList)
      console.log(this.allNewList, res.data, 999)
    },
  },
  mounted() {
    seo()
    // 统计脚本
    // eslint-disable-next-line no-var
    var _hmt = _hmt || []
    ;(function () {
      const hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?72df00f71260cd01bb2b8b9dd44ef549'
      const s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()
    this._initLA()
    this.getNews()
  },
  head() {
    return {
      title:
        '深圳北富联提供mcmaster中国,wmberg,helicoil螺套等五金紧固件最新资讯',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '深圳北富联提供mcmaster中国,wmberg,helicoil螺套等五金紧固件最新资讯',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '深圳市北富联机电有限公司新闻,北富联,深圳北富联资讯,北富联机电企业动态,mcmaster五金紧固件,Wmberg,',
        },
      ],
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
