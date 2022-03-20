<template>
  <div v-cloak v-if="$route.name !== 'about'" class="tab">
    <a-carousel arrows :autoplay="true" style="width: 100%">
      <div slot="prevArrow" class="custom-slick-arrow left-icon">
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 50px">
        <a-icon type="right-circle" />
      </div>
      <div v-for="(target, index) in tabList" :key="index" class="inner">
        <div v-show="isShow">
          <nuxt-link :to="{ name: target.link }">
            <img :src="target.img" alt="" />
          </nuxt-link>
        </div>
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carouselObj: {
        index: [
          {
            img: require('@/assets/img/third/banner/home_1.jpg'),
            link: 'index',
          },
          {
            img: require('@/assets/img/third/banner/home_2.jpg'),
            link: 'about',
          },
        ],
        product: [
          {
            img: require('@/assets/img/third/banner/banner_product.png'),
            link: '',
          },
        ],
        solute: [
          {
            img: require('@/assets/img/third/banner/banner_solute.png'),
            link: '',
          },
        ],

        about: [
          // {
          //   img: require('@/assets/img/third/banner/banner_detail.jpg'),
          //   link: '',
          // },
        ],
        news: [
          {
            img: require('@/assets/img/third/banner/banner_news.png'),
            link: '',
          },
        ],
        'news-detail': [
          {
            img: require('@/assets/img/third/banner/banner_news.png'),
            link: '',
          },
        ],
        contact: [
          {
            img: require('@/assets/img/third/banner/banner_concat.png'),
            link: '',
          },
        ],
      },
      tabList: [
        {
          img: require('@/assets/img/fourth/banner1.jpg'),
          link: '',
        },
        {
          img: require('@/assets/img/fourth/banner2.jpg'),
          link: '',
        },
      ],
      isShow: false,
    }
  },
  watch: {
    // $route: {
    //   handler(val) {
    //     this.tabList = this.carouselObj[val.name] || this.carouselObj.product
    //     console.log(1008, val)
    //   },
    // },
  },
  mounted() {
    // this.tabList =
    //   this.carouselObj[this.$route.name] || this.carouselObj.product
    // console.log(this.$route, 99)
    this.isShow = true
  },
}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  /* max-height: 300px; */
  /* line-height: 160px; */
  /* background: #364d79; */
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.left-icon {
  left: 50px;
  z-index: 10;
}
.tab {
  margin-top: 80px;
  min-height: 100px;
}
img {
  width: 100%;
  /* height: 300px; */
  /* height: 450px; */
  /* height: 160px; */
}
.inner {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* height: 350px; */
  width: 100%;
  /* min-height: 100px; */
}
</style>
