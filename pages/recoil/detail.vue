<template>
  <div>
    <div class="product-desc">
      <nuxt-link :to="{ name: backUrl }">
        <a-icon type="backward" /> 返回
      </nuxt-link>
      <div>
        {{ backUrl }}<span style="margin: 0px 10px">/</span>{{ subObj.title }}
      </div>
    </div>
    <div class="product-center">
      <div>
        <ul class="detail">
          <li
            v-for="(target, index) in subObj.subList"
            :key="index"
            class="detail-item"
          >
            <div class="img">
              <img :src="target.img" :alt="target.alt" />
            </div>

            <div class="detail-right">
              <p>{{ target.name }}</p>
              <div class="desc">{{ target.desc }}</div>
            </div>
          </li>
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
            <p v-for="(item, index2) in detail.list" :key="index2">
              <span>{{ index2 + 1 }}.</span> {{ item }}
            </p>
          </div>
          <div class="tips">更多内容请咨询客服~</div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { layoutMockJson } from '@/assets/js/layoutMockJson'
const URL_KEY = 'recoil'
export default {
  data() {
    return {
      backUrl: URL_KEY,
      productList: layoutMockJson,
      subObj: {},
      selectedObj: {},
      moreDetail: [],
    }
  },
  mounted() {
    const topObj = this.productList.find((item) => item.url === URL_KEY) || {
      productList: [],
    }
    const key = this.$route.query.key
    const list = topObj.productList
    this.selectedObj = list.find((item) => +item.key === +key) || {}
    this.subObj = this.selectedObj.expand
    this.moreDetail = this.selectedObj.detailList || []
  },
}
</script>

<style lang="less" scoped>
.product-desc {
  width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 6px;
  font-size: 17px;
  display: flex;
  color: #999999;
  a {
    color: #364d79;
  }
  div {
    margin-left: 30px;
    font-size: 13px;
  }
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
}
.detail-item {
  min-height: 120px;
  width: 900px;
  border: 1px dotted #e0e0e0;
  box-shadow: 0 4px 10px #eaeaea;
  margin: 20px auto;
  padding: 20px 40px 0 40px;
  cursor: pointer;
  display: flex;
  .img {
    padding-top: 20px;
  }
  img {
    // max-height: 60%;
    // max-width: 60px;
    max-height: 80px;
    max-width: 80px;
  }
  .detail-right {
    flex: 1;
    margin-left: 20px;
    p {
      border-bottom: 1px dotted #cdcdcd;
      width: 100%;
      font-weight: bold;
      font-size: 17px;
      padding-bottom: 10px;
    }
  }
  .desc {
    line-height: 2;
    margin-bottom: 10px;
  }
}
li {
  list-style: true;
}
</style>
