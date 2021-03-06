<template>
  <div>
    <div class="product-desc">
      北富联机电给您提供高端精密五金紧固件，能快速供货欢迎联系我们！^_^
    </div>
    <div class="product-center">
      <div class="tab">
        <div class="top-tilte">
          <a-icon type="like"></a-icon><span>所有产品</span>
        </div>
        <ul>
          <li
            v-for="target in productList"
            :key="target.key"
            :class="[{ current: target.url == current }]"
          >
            <nuxt-link :to="{ name: target.url }">
              <span>{{ target.title }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="product">
        <div class="product-detail">
          <p>
            <img :src="selectedTarget.logo" alt="" />
          </p>
          <div>
            {{ selectedTarget.detail }}
          </div>
        </div>
        <div class="product-list">
          <div
            v-for="(target, index) in selectedTarget.productList"
            :key="index"
            class="product-item"
          >
            <nuxt-link
              :to="{
                path: `/${
                  $route.name === 'product' ? 'mcmastercarr' : $route.name
                }/detail`,
                query: { key: target.key },
              }"
            >
              <img :src="target.img" :alt="target.alt" />
            </nuxt-link>

            <p>{{ target.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { layoutMockJson } from '@/assets/js/layoutMockJson'
export default {
  props: {
    productIndex: {
      type: String,
      default: '1',
    },
  },
  data() {
    return {
      current:
        this.$route.name === 'product' ? 'mcmastercarr' : this.$route.name,
      productList: layoutMockJson,
      selectedList: [],
      isSub: false,
      subObj: {},
      moreDetail: [],
    }
  },
  computed: {
    selectedTarget() {
      const item = this.productList.find((item) => item.url === this.current)
      return item || this.tabList[0]
    },
  },
  watch: {
    $route: {
      handler: () => {
        this.current =
          this.$route.name === 'product' ? 'mcmastercarr' : this.$route.name
      },
    },
    // current: {
    //   deep: true,
    //   handler(val, oldVal) {
    //     this.isSub = false
    //     this.selectTab(this.tabList[+this.current - 1])
    //   },
    // },
    // '$store.state.tabNative': {
    //   handler(val, oldVal) {
    //     this.current[0] = val
    //   },
    // },
  },
  mounted() {
    // console.log(this.tabList, 999)
    // this.$store.commit('toggleTab', '1')
    // setTimeout(() => {
    //   this.current =
    //     this.$store.state.tabNative !== 'home' && this.productIndex === '1'
    //       ? [this.$store.state.tabNative]
    //       : [this.productIndex]
    //   console.log(this.current, this.productIndex)
    // }, 100)
  },
  methods: {
    // selectTab({ key }) {
    //   this.$store.commit('toggleTab', key)
    //   // this.$router.push({ path: `/${this.tabList[+key - 1].url}` })
    // },
    // toggleSub(target) {
    //   console.log(target)
    //   if (target.hasDetai) {
    //     this.isSub = true
    //     this.subObj = target.expand
    //     this.moreDetail = target.detailList || []
    //     console.log(this.moreDetail)
    //   }
    // },
  },
}
</script>
<style lang="less" scoped>
.product-desc {
  width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 6px;
  font-size: 13px;
  color: #999999;
}
.product-center {
  width: 1000px;
  margin: 0 auto;
  // margin-top: 60px;
  border-top: 1px solid #cdcdcd;
  padding-top: 30px;
  color: #333333;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  .top-tilte {
    font-size: 26px;
    font-weight: bold;
    color: #001578;
    border-bottom: 2px dotted #cacaca;
    text-align: center;
    padding-bottom: 10px;
    span {
      margin-left: 6px;
    }
  }
  ul {
    padding: 0;
  }
  li {
    height: 59px;
    // padding-top: 20px;

    text-align: center;
    border-bottom: 2px dotted #cacaca;
    cursor: pointer;
    a {
      width: 100%;
      height: 100%;
      padding-top: 20px;
      display: inline-block;
    }
    &.current {
      background: #001578;
      span {
        color: #ffffff;
      }
    }

    &:hover {
      background: #001578;
      span {
        color: #ffffff;
      }
    }
    span {
      font-size: 18px;

      color: #333333;
    }
  }
  .tab {
    width: 260px;
  }
}
.product {
  // border: 1px solid @gray-color;
  scrollbar-width: none; // firefox
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 70%;
  // overflow: auto;
  // margin: 20px 20px 20px 60px;
  min-height: 700px;
  &-detail {
    min-height: 120px;
    background: @gray-color;
    padding: 20px;
    div {
      line-height: 2;
    }
    // display: inline-block;
    p {
      font-size: 28px;
      font-weight: 600;
      img {
        width: 170px;
        height: 68px;
      }
    }
    div {
      text-indent: 2em;
      // max-width: 900px;
    }
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &-item {
    // min-width: 150px;
    // min-height: 150px;
    width: 180px;
    height: 200px;
    margin: 20px 0 0 20px;
    .flex-center();
    a {
      display: inline-block;
      // width: 100%;
      // height: 100%;
      height: 200px;
      .flex-center();
    }
    flex-direction: column;
    // border: 1px solid @gray-color;
    img {
      // max-width: 50%;
      max-height: 30%;
      // height: 80px;
      margin-bottom: 20px;
      // flex: 1;
    }
    p {
      border-top: 1px solid #cdcdcd;
      width: 100%;
      padding-top: 6px;
      text-align: center;
      font-size: 16px;
      height: 100px;
    }
    &:hover {
      color: @blue-color;
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
        max-width: 100px;
        max-height: 100px;
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
p {
  margin-bottom: 10px;
}
</style>
