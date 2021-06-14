<template>
  <div class="detail">
    <div class="theme-title title-pos mb20 detial-title">
      {{ detailObj.title }}
    </div>
    <div class="time">发布时间:{{ detailObj.time || new Date(detailObj.createdAt).toLocaleString() || '无' }}</div>
    <div
      v-for="(item, index) in detailObj.content"
      :key="item.id"
      class="content"
      v-html="item"
      v-if="detailObj.id"
    >
    </div>
       <div
      v-if="detailObj._id"
         class="content"
      v-html="detailObj.content"
    >
    </div>
    <!-- <img src="../../assets/img/third/tab2-logo.png"  alt="" width="600" height="200"/> -->
  </div>
</template>

<script>
import { newList } from '@/assets/js/news'
import { getArticleById } from '@/network/home'
export default {
  data() {
    return {
      detailObj: {
        title: '找不到文章',
        content: [],
      },
    }
  },
  async created() {
    const id = this.$route.query.id
    console.log(this.$route.query)
    const defaultId = newList.find((item) => +item.id === +id) 
    if(!defaultId){
      await this.getArticleById()
    }else{
      this.detailObj = newList.find((item) => +item.id === +id)
    }
    // console.log(this.detailObj)
  },
  methods:{
      async getArticleById() {
      const res = await getArticleById(this.$route.query.id)
      if (!res) return
      this.detailObj = res.data
      console.log(  this.detailObj,9999999)
    },
  }
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
  // line-height: 2;
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
