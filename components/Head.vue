<template>
  <div class="title">
    <div class="name"></div>
    <div class="tab header">
      <a-menu mode="horizontal" :selectable="false">
        <a-menu-item v-for="target in tabList" :key="target.key">
          <NuxtLink :to="{ name: target.link }" target="_self">
            <div v-if="target.options && target.options.length > 0">
              <a-dropdown placement="bottomCenter">
                <div>
                  <!-- <a-icon :type="target.type" /> -->
                  <span>{{ target.title }}</span>
                  <a-icon
                    type="down"
                    :style="{ fontSize: '17px' }"
                    @click="(e) => e.preventDefault()"
                  />
                </div>
                <a-menu slot="overlay">
                  <a-menu-item v-for="item in target.options" :key="item.key">
                    <NuxtLink :to="{ name: item.link }" target="_self">
                      <span>{{ item.title }}</span>
                    </NuxtLink>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
            <div v-else>
              <!-- <a-icon :type="target.type" />  -->
              <span>{{ target.title }}</span>
            </div>
          </NuxtLink>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
import { layoutMockJson } from '@/assets/js/layoutMockJson'
import { headerTab } from '@/assets/js/headerTab'
export default {
  data() {
    return {
      current: ['1'],
      tabList: Object.freeze(headerTab),
      productDetail: Object.freeze(layoutMockJson),
    }
  },
  watch: {
    '$store.state.tabNative'(val) {
      // 你需要执行的代码
      this.current = [val]
    },
  },
  mounted() {
    const TYPE = this.tabList.find((item) => item.key === this.$route.name)
    this.current = TYPE ? [TYPE.key] : ['1']
  },
  methods: {
    selectTab({ key }) {
      // 前三个目录不刷新
      // if (
      //   ~['1', '2', '3'].indexOf(this.$store.state.tabNative) &&
      //   key === 'home'
      // ) {
      //   return
      // }
      this.$store.commit('toggleTab', key)
    },
  },
}
</script>
<style lang="less" scoped>
.title {
  padding-top: 20px;
  width: 100%;
  height: 100px;
  position: fixed;
  background: #ffffff;
  top: 0;
  z-index: 999;
  left: 0;
  text-align: center;
  color: @theme-color;
  font-size: 36px;
  box-shadow: 0 4px 10px #eaeaea;
  width: 100%;
  .flex-center();
  .name {
    margin-right: 30px;
    background: url('~@/assets/img/third/logo.png') no-repeat center / 100% 100%;
    width: 300px;
    height: 50px;
  }
}
.tab {
  .flex-center();
  font-size: 24px;
}

.header {
  span {
    font-size: 17px;
    color: #333333;
  }
}
</style>
<style lang="less">
.ant-menu-horizontal {
  border-bottom: 0px !important;
}
</style>
