<template>
  <div class="detail">
    <div class="theme-title title-pos mb20 detial-title">
      {{ detailObj.title }}
    </div>
    <div class="time">发布时间:{{ detailObj.time || '无' }}</div>
    <div
      v-for="(item, index) in detailObj.content"
      :key="index"
      class="content"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import { newList } from '@/assets/js/news'
export default {
  data() {
    return {
      detailObj: {
        title: '找不到文章',
        content: [],
      },
    }
  },
  created() {
    const id = this.$route.query.id
    console.log(this.$route.query)
    this.detailObj = newList.find((item) => +item.id === +id) || {
      title: '找不到文章',
      content: [],
    }
    // console.log(this.detailObj)
  },
}
</script>

<style lang="less" scoped>
.detail {
  margin-bottom: 80px;
}
.detial-title {
  color: #333333;
  font-size: 20px;
  margin-bottom: 14px;
}
.content {
  width: 600px;
  line-height: 2;
  color: #999999;
  margin: 0 auto 20px auto;
  text-indent: 2rem;
  font-size: 15px;
}
.time {
  text-align: center;
  font-size: 12px;
  color: #999999;
  margin-bottom: 30px;
}
</style>
