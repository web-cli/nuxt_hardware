<template>
  <div v-cloak class="container">
    <div>
      <Product></Product>
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
        'mcamster, mcmaster-carr, mcmaster官网, helicoil螺套, berg定位销, keensert插销螺套,麦克马斯特, 北富联机电',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '深圳北富联主营欧美紧固件,mcmaster carr中国代理,berg定位销,helicoil螺套,keensert插销螺套,Kato自攻螺套,能快速供货,北富联是五金紧固件供应商',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '深圳市北富联,mcmaster carr中国代理,berg定位销,helicoil螺套,keensert插销螺套,Kato自攻螺套,mcmaster官网,高端五金紧固件,欧美紧固件',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.tab-title {
  height: 80px;
  width: 256px;
  margin-left: 30px;
  background: #1890ff;
  .flex-center();
  color: #ffffff;
  font-size: 32px;
}
.titl2 {
  color: @theme-color;
}
.container {
  margin: 0 auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
