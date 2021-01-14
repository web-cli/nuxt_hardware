<template>
  <div class="contact">
    <div class="contact-title">深圳市北富联机电有限公司</div>
    <div class="contact-detail">
      <div class="sub-title">关于我们</div>
      <p>
        深圳市北富联机电有限公司（www.northfull.com）是一家专业进口高端机电零部件销售、服务为一体的专业公司，为客户提供高品质五金紧固件工业服务商!
      </p>
      <div class="sub-title">公司详情</div>
      <p>
        北富联机电位于深圳市宝安区，提供McMASER-CARR中国代理(高端螺丝和螺栓，螺纹杆和螺柱，吊环螺栓,U型螺栓,坚果类,垫圈,垫片，螺旋和螺纹刀片，垫片和支座，销，锚点,钉，射钉枪，柳钉，柳钉工具，斯台普斯，订书机，关键股票等)、Helicoil螺套（金属螺纹嵌件，塑料螺纹嵌件，木螺纹嵌件，复合材料的螺纹嵌件，紧固件分类，管状腿的调平安装插件等）、BERG连接器、RECOIL螺纹护套及配套机电工具等。
        本公司以“用心服务，不断提升自我”为宗旨，坚持以用户的要求为中心，提供高效服务，为客户解决问题，北富联机电致力于为客户提供高效服务的五金机电服务商
      </p>
    </div>
  </div>
</template>

<script>
/**
 * @title 联系我们页面
 */
export default {
  data() {
    return {}
  },
  head() {
    return {
      title: '深圳北富联-公司简介',
      meta: [
        {
          hid: 'description2222',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.contact {
  background: #f7f7f7;
  margin: 40px auto 40px auto;
  border: 2px solid @gray-color;
  width: 800px;
  display: flex;
  min-height: 600px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  &-title {
    font-weight: 600;
    margin: 20px 0;
  }
  p {
    text-align: left;
    margin-top: 10px;
    line-height: 2;
    text-indent: 2em;
    margin: 0px 20px;
  }
  .sub-title {
    font-weight: 600;
    margin-top: 30px;
    margin-left: 20px;
  }
  .tips {
    margin: 20px 0;
  }
}
</style>
