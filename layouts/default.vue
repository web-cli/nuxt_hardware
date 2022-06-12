<template>
  <div v-cloak>
    <Head></Head>
    <!-- <Test></Test> -->
    <Tab></Tab>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
// eslint-disable-next-line no-undef
LA.init({ id: 'JbzX32k5xqOUNWdg', ck: 'JbzX32k5xqOUNWdg' })
// eslint-disable-next-line no-undef
</script>
<script lang="javascript">
import { seo } from '@/static/js/common'
export default {
  data () {
    return {}
  },
  methods: {
    _initLA () {
      window.LA.init({ id: 'JbzX32k5xqOUNWdg', ck: 'JbzX32k5xqOUNWdg' })
    },
    kefuSofe () {
      var _hmt = _hmt || [];
      (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?3795098a979a9086f2824d5c6f46b1d3";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();

    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        setTimeout(() => {
          seo()
          this._initLA()
        }, 300)
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted () {
    // 统计脚本
    // eslint-disable-next-line no-var
    var _hmt = _hmt || [];
    (function () {
      const hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?72df00f71260cd01bb2b8b9dd44ef549";
      const s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    this.kefuSofe()

  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
