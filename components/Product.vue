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
          <img :src="target.img" :alt="target.alt" />
          <p>{{ target.name }}</p>
        </div>
      </div>
      <div v-show="isSub">
        <div class="detail">
          <a-button type="primary" @click="isSub = false">
            返回列表页
          </a-button>
          <h3>{{ subObj.title }}</h3>
          <div
            v-for="(target, index) in subObj.subList"
            :key="index"
            class="detail-item"
          >
            <img :src="target.img" :alt="target.alt" />
            <div class="detail-right">
              <p>{{ target.name }}</p>
              <div class="desc">{{ target.desc }}</div>
            </div>
          </div>
          <div
            v-if="subObj.subList && subObj.subList.length === 0"
            class="no-more"
          >
            暂无数据
          </div>
          <div v-for="detail in moreDetail" :key="detail.title" class="more">
            <div class="more-title">
              {{ detail.title }}
            </div>
            <p v-for="(item, index2) in detail.list">
              <span>{{ index2 + 1 }}.</span> {{ item }}
            </p>
          </div>
          <div class="tips">更多内容请咨询客服~</div>
        </div>
      </div>
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
      subObj: {},
      moreDetail: [],
    }
  },
  computed: {
    selectedTarget() {
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
    setTimeout(() => {
      this.current =
        this.$store.state.tabNative !== 'home'
          ? [this.$store.state.tabNative]
          : ['1']
    }, 100)
  },
  methods: {
    selectTab({ key }) {
      this.$store.commit('toggleTab', key)
    },
    toggleSub(target) {
      console.log(target)
      if (target.hasDetai) {
        this.isSub = true
        this.subObj = target.expand
        this.moreDetail = target.detailList || []
        console.log(this.moreDetail)
      }
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
  scrollbar-width: none; // firefox
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 70%;
  overflow: auto;
  margin: 20px 20px 20px 60px;
  height: 700px;
  &-detail {
    min-height: 120px;
    background: @gray-color;
    padding: 40px;
    // display: inline-block;
    p {
      font-size: 28px;
      font-weight: 600;
    }
    div {
      text-indent: 2em;
      // max-width: 900px;
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
  .detail {
    margin: 20px 0 0 40px;
    h3 {
      font-weight: 600;
      margin: 20px 0;
    }
    &-item {
      display: flex;
      align-items: center;
      border: 2px dotted #f2f2f2;
      margin-top: 20px;
      // padding-left: 40px;
      // width: 100px;
      height: 100px;
      img {
        width: 60px;
        height: 60px;
        margin: 0 40px;
      }
    }
    &-right {
      p {
        font-weight: 600;
        font-size: 14px;
      }
      .desc {
        font-size: 13px;
      }
    }
  }
  .tips {
    font-weight: 600;
    text-align: center;
    margin: 40px 0;
  }
  .more {
    font-size: 13px;
    margin-top: 30px;
    line-height: 2;
    &-title {
      font-weight: 600;
      font-size: 18px;
    }
    span {
      font-weight: 600;
      font-size: 16px;
    }
  }
}
</style>
