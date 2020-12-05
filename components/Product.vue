<template>
  <div class="tab">
    <a-menu
      v-model="current"
      mode="vertical"
      style="width: 256px"
      theme="dark"
      @select="selectTab"
    >
      <a-menu-item v-for="target in tabList" :key="target.key">
        <a-icon :type="target.type" />{{ target.title }}
      </a-menu-item>
    </a-menu>
    <div class="product">
      <div class="product-detail">
        <p>
          <!-- {{ selectedTarget.title }} -->
          <img :src="selectedTarget.logo" alt="" />
        </p>
        <div>
          {{ selectedTarget.detail }}
        </div>
      </div>
      <div v-show="!isSub" class="product-list">
        <div
          v-for="(target, index) in selectedTarget.productList"
          :key="index"
          class="product-item"
          @click="toggleSub(target)"
        >
          <img :src="target.img" alt="" />
          <p>{{ target.name }}</p>
        </div>
      </div>
      <div v-show="isSub">999</div>
    </div>
  </div>
</template>
<script>
import { layoutMockJson } from '@/assets/js/layoutMockJson'
export default {
  data() {
    return {
      current: ['1'],
      tabList: Object.freeze(layoutMockJson),
      selectedList: [],
      isSub: false,
    }
  },
  computed: {
    selectedTarget() {
      console.log(this.current[0], this.$store.state.tabNative)
      const item = this.tabList.find(
        (item) => item.key === this.$store.state.tabNative
      )
      return item || this.tabList[0]
    },
  },
  watch: {
    current: {
      deep: true,
      handler(val, oldVal) {
        this.isSub = false
      },
    },
    '$store.state.tabNative': {
      handler(val, oldVal) {
        this.current[0] = val
      },
    },
  },
  mounted() {
    // this.$store.commit('toggleTab', '1')
  },
  methods: {
    selectTab({ key }) {
      this.$store.commit('toggleTab', key)
    },
    toggleSub(target) {
      this.selectedList = target.subList
      this.isSub = true
    },
  },
}
</script>
<style lang="less" scoped>
.tab {
  margin-left: 80px;
  display: flex;
  margin-top: 6px;
}
li.ant-menu-item,
li.ant-menu-submenu.ant-menu-submenu-vertical,
.ant-menu-submenu-title {
  height: 60px !important;
  line-height: 60px !important;
}
.product {
  border: 1px solid @gray-color;
  flex: 1;
  overflow: auto;
  margin: 20px 20px 20px 60px;
  height: 700px;
  &-detail {
    min-height: 120px;
    background: @gray-color;
    padding: 40px;
    p {
      font-size: 28px;
      font-weight: 600;
    }
    div {
      text-indent: 2em;
      max-width: 900px;
    }
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    min-width: 150px;
    min-height: 150px;
    margin: 20px 0 0 20px;
    .flex-center();
    flex-direction: column;
    border: 1px solid @gray-color;
    img {
      height: 80px;
      width: 80px;
      margin-bottom: 20px;
    }
    &:hover {
      color: @theme-color;
      img {
        transform: scale(1.2);
        transition-duration: 0.08s;
      }
    }
  }
}
</style>
