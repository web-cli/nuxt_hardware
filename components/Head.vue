<template>
  <div class="top">
    <div class="phone col-xl-12 col-lg-12">
      <a-icon type="phone" class="icon" width="32" height=" 32" />：{{
        `131 8972 9968`
      }}
    </div>

    <div class="title">
      <div class="name"></div>
      <div class="tab header d-none d-lg-block">
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
.phone {
  font-size: 22px;
  font-weight: bold;
  background: #ffffff;
  // text-align: center;
  align-items: center;
  color: #001578;
  display: flex;
  justify-content: center;
  // padding-top: 6px;
  // color: #333333;
}
.top {
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  left: 0;
  background: #ffffff;
  box-shadow: 0 4px 10px #eaeaea;
}
.title {
  height: 80px;

  text-align: center;
  color: @theme-color;
  font-size: 36px;

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
