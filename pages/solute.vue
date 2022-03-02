<template>
  <div class="solute-detail">
    <div class="theme-title title-pos">案例演示</div>
    <div v-for="(item, index) in soluteList" :key="index" class="solte-item">
      <div v-if="index % 2 === 0" class="inner">
        <img :src="item.img" alt="" />
        <div class="content1 content">
          {{ item.name }}
        </div>
      </div>
      <div v-else class="inner">
        <div class="content2 content">
          {{ item.name }}
        </div>
        <img :src="item.img" alt="" />
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
import { seo } from '@/static/js/common'
export default {
  data() {
    return {
      soluteList: [
        {
          img: require('@/assets/img/third/solute/jidian.png'),
          name: '机电行业解决方案',
        },
        {
          img: require('@/assets/img/third/solute/hangkong.png'),
          name: '航空行业解决方案',
        },
        {
          img: require('@/assets/img/third/solute/dianzi.png'),
          name: '电子行业解决方案',
        },
        {
          img: require('@/assets/img/third/solute/junshi.png'),
          name: '军事行业解决方案',
        },
        {
          img: require('@/assets/img/third/solute/jianzhu.png'),
          name: '建筑行业解决方案',
        },
      ],
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
  },
  head() {
    return {
      title: 'mcmaster中国代理,berg,helicoil,keensert插销螺套的行业应用',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'mcmaster中国代理,berg,helicoil,keensert插销螺套的行业应用',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'mcmaster中国代理,berg,helicoil,keensert插销螺套的行业应用',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.solte-item {
  margin: 0px auto 80px auto;
  display: flex;
  justify-content: center;
  img {
    width: 500px;
    height: 250px;
  }
  .inner {
    display: flex;
    align-items: center;
  }
  .content {
    background: #ffffff;
    box-shadow: #333333;
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px 10px 10px #eaeaea;
    font-size: 18px;
    font-weight: bold;
  }
  .content1 {
    margin-left: -40px;
  }
  .content2 {
    margin-right: -40px;
    z-index: 990;
  }
}
</style>
