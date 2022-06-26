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
          <div v-if="selectedTarget.key === '2'">
            <p class="p2">
              Helicoil螺套是由极硬不锈钢菱形线制成的螺旋缠绕精密成型线圈。当安装到
              HeliCoil
              螺纹进入孔中时，刀片可提供永久的常规螺纹，是一个高端紧固件，其品质极高，具有很强的螺纹修复功能。
            </p>
            <p class="p2">Helicoil螺套标准：主要有公制和英制。</p>
            <p class="p2">
              Helicoil螺纹护套特性：helicoil镶嵌件具有自由运行嵌件的特性，其表面的线圈通过夹紧已安装螺钉的螺纹起到锁定装置的作用，可以有效防止在震动或者冲击下松动。最厉害的是，Helicoil钢丝螺套允许频繁拆卸和重新组装，而不会造成明显的扭矩损失。Helicoil螺套可以有效的固定螺钉，防止因振动和冲击导致的松动，即使在铁、合金钢、钛等坚韧金属中也不会松动的。
            </p>
            <p class="p2">
              Helicoil螺纹护套特性：helicoil镶嵌件具有自由运行嵌件的特性，其表面的线圈通过夹紧已安装螺钉的螺纹起到锁定装置的作用，可以有效防止在震动或者冲击下松动。最厉害的是，Helicoil钢丝螺套允许频繁拆卸和重新组装，而不会造成明显的扭矩损失。Helicoil螺套可以有效的固定螺钉，防止因振动和冲击导致的松动，即使在铁、合金钢、钛等坚韧金属中也不会松动的。
            </p>
            <p class="p2">
              Helicoil螺套应用领域：Helicoil官网中的螺套广受大家的欢迎，主要应用在军事、航空、机电、汽车、军工、发电、造船等行业。
            </p>
            <p class="p2">
              Helicoil螺套型：Helicoil螺纹护套类型较多，详情请咨询深圳市北富联机电有限公司。
            </p>
            <p class="p2">
              螺套的类型：Helicoil螺纹护套、Helicoil钢丝螺套、Helicoil有尾螺套、Helicoil无尾螺套、Helicoil插销螺套、Helcoil自攻螺套等，如下所示。
            </p>
          </div>
          <div v-else-if="selectedTarget.key === '4'">
            <p class="p2">
              深圳市北富联机电有限公司主营Kato自攻螺套、KATO不锈钢螺套、KATO无尾螺套、KATO有尾螺套、kato钢丝螺套等，KATO螺纹护套型号和材质较多，具体KATO精密五金紧固件请咨询北富联机电客服。
            </p>
            <p class="p2">
              KATO螺套特点：KATO螺纹护套适用于螺纹连接，具有结构性良好，方便使用的功能，螺套安装于螺孔或者螺母中，可以减轻螺纹牙因为受力不均匀和抵抗冲击震动的效果，很大程度提高了螺纹的使用寿命，减少螺纹的抗腐蚀性和磨损程度，可提供高强度的KATO内置螺纹。
            </p>
            <p class="p2">
              Kato螺套应用场景：航空行业、国防行业、汽车工业、机电设备行业、电子、汽车等领域。
              <!-- <img src="../assets/img/fourth/banner1.jpg" alt="" /> -->
            </p>
            <p class="p2">
              <a href="/kato.pdf" download="北富联kato型号.pdf" target="_blank">
                Kato螺纹护套型号大全,欢迎各位来咨询北富联客服哦～
              </a>
            </p>
          </div>
          <div v-else-if="selectedTarget.key === '5'">
            <p class="p2">
              Ensat自攻螺套具有多种型号，Ensat螺套有碳钢、不锈钢等材质，ENSAT螺纹护套具有很好的紧固作用，具有超强的硬度，更多Ensat螺套型号及详细内容请咨询深圳市北富联机电有限公司。
            </p>
            <p class="p2">
              Ensat® 自攻螺纹嵌件，ENSAT
              自攻螺套是一种自攻螺纹刀片，具有外螺纹和内螺纹、切削槽或切削孔。Ensat®-S（带切割槽）推荐用于大多数应用情况。在某些材料中，
              Ensat自攻螺套
              表现出最小的向内弹性作用，因此产生了一定的螺钉锁定效果，具有很强的紧固作用。
            </p>
            <p class="p2">Ensat插销螺套材质：STEEL, STAINLESS STEEL, BRASAA</p>
            <p class="p2">
              行业应用：电子设备、汽车、军工、电路轨道、半导体、建筑、医疗器械等。
            </p>
            <p class="p2">
              型号大小：型号种类繁多，尺寸大小很多，更多请咨询深圳北富联机电有限公司13189729968。
            </p>
          </div>
          <div v-else-if="selectedTarget.key === '6'">
            Berg是全球微型精密机械零件的领先制造商。我们深圳市北富联机电有限公司公司主要销售WMBerg任何材质的圆柱销。BERG圆柱销属于BERG定位销，用于固定零件之间的相对位置，Berg销钉是组合加工和装配时候的重要辅助零件。
            <p class="p2">
              <a href="/berg.pdf" download="北富联berg型号.pdf" target="_blank">
                berg型号大全,欢迎各位来咨询北富联客服哦～
              </a>
            </p>
          </div>
          <div v-else-if="selectedTarget.key === '7'">
            深圳市北富联机电有限公司主营keensert插销螺套，Keensert插销螺套在市面上广泛使用。KeensertS®螺纹嵌件是防止螺纹在机械或精密工程，航空和军工等领域被剥离的完美解决方案。KeensertS®由不锈钢碳钢、不锈钢、镍、青铜等材质制成。Keenserts插销螺套非常耐用，可承受许多松动和拧紧循环，无需拆线。Keensert螺套可以容易地用于轻金属，钢或铸铁的应用。Keenserts螺套还可用作对昂贵部件中的受损螺纹的简单且有效的替换。
            <div>
              <img :src="key6Img" alt="" />
            </div>
            <p class="p2">Keensert插销螺套材质主要有：</p>
            <div>碳钢carbon steel</div>
            <div>不锈钢stainless steel</div>
            <div>青铜bronze</div>
            <div>镍Nitronic 60</div>
            <p class="p2">Keensert插销螺套分类：</p>
            <div>
              1、按Thread Types螺纹型号可分：Metric公制、UNC粗牙、UNF细牙。
            </div>
            <div>
              2、按Insert Types螺套型号可分：Miniature轻型、Lightweight
              (Thinwall)薄壁型、Heavy Duty重型、Extra Heavy Duty特重型。
            </div>
            <p class="p2">Keensert插销螺套表面处理主要有以下三种形式：</p>
            <div>镀银silver plate</div>
            <div>镀镉cadmium plate</div>
            <div>干燥膜润滑剂dry film lubricant</div>
            <p class="p2">
              深圳市北富联机电有限公司具有keensert插销螺套的全型号，具体请咨询。
            </p>
          </div>
          <div v-else v-html="selectedTarget.detail">
            <!-- {{ selectedTarget.detail }} -->
          </div>
        </div>
        <div class="product-list">
          <div
            v-for="(target, index) in selectedTarget.productList"
            :key="index"
            class="product-item"
          >
            <nuxt-link
              v-if="+selectedTarget.key !== 2"
              :to="{
                path: `/${
                  $route.name === 'product' ? 'mcmastercarr' : $route.name
                }/detail`,
                query: { key: target.key },
              }"
            >
              <img :src="target.img" :alt="target.alt" />
            </nuxt-link>
            <img v-else :src="target.img" :alt="target.alt" />
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
      key6Img: require('@/assets/img/third/product-type/WechatIMG301.jpeg'),
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
    .p2 {
      font-size: 14px;
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
