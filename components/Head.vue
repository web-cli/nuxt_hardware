<template>
  <div class="title">
    <div class="name">北富联机电|NorthFull</div>
    <div class="tab">
      <a-menu v-model="current" mode="horizontal" @select="selectTab">
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><a-icon type="setting" />产品中心</span
          >
          <a-menu-item-group title="NorthFull 优质系列">
            <a-menu-item v-for="item in productDetail" :key="item.key">
              {{ item.title }}
            </a-menu-item>
          </a-menu-item-group>
          <!-- <a-menu-item-group title="Item 2">
          <a-menu-item key="productList:3"> Option 3 </a-menu-item>
          <a-menu-item key="productList:4"> Option 4 </a-menu-item>
        </a-menu-item-group> -->
        </a-sub-menu>
        <a-menu-item v-for="target in tabList" :key="target.key">
          <NuxtLink :to="{ name: target.link }">
            <a-icon :type="target.type" />{{ target.title }}</NuxtLink
          >
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
import { layoutMockJson } from '@/assets/js/layoutMockJson'
const tabList = [
  {
    title: '首页',
    key: 'home',
    type: 'appstore',
    link: 'index',
  },
  {
    title: '公司简介 ',
    key: 'introduce',
    type: 'appstore',
    link: 'about',
  },
  {
    title: '企业新闻',
    key: 'dynamic',
    type: 'appstore',
    link: 'news',
  },
  {
    title: '联系我们',
    key: 'contact',
    type: 'phone',
    link: 'contact',
  },
]
export default {
  data() {
    return {
      current: ['1'],
      tabList: Object.freeze(tabList),
      productDetail: Object.freeze(layoutMockJson),
    }
  },
  methods: {
    selectTab({ key }) {
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
  }
}
.tab {
  .flex-center();
}
</style>
