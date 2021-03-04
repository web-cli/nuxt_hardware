<template>
  <div class="solute">
    <div class="theme-title solute-title">解决方案</div>
    <div class="sub-title">OUR SOLUTION</div>
    <div class="solute-list">
      <div v-for="(item, index) in soluteList" :key="index" class="solute-item">
        <img :src="item.img" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      soluteList: [
        {
          img: require('@/assets/img/third/solute_1.png'),
          name: '机电行业方案',
        },
        {
          img: require('@/assets/img/third/solute_2.png'),
          name: '航空行业方案',
        },
        {
          img: require('@/assets/img/third/solute_3.png'),
          name: '电子行业方案',
        },
        {
          img: require('@/assets/img/third/solute_4.png'),
          name: '军事行业方案',
        },
        {
          img: require('@/assets/img/third/solute_5.png'),
          name: '建筑行业方案',
        },
      ],
    }
  },
}
</script>

<style lang="less">
.solute {
  background: url('~@/assets/img/third/solutebg.png') no-repeat center / 100%
    100%;
  height: 900px;
  width: 100%;
  .solute-title {
    padding-top: 200px;
  }
  .sub-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .solute-list {
    display: flex;
    justify-content: center;
    .solute-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 40px;
      margin-top: 40px;
      img {
        width: 180px;
        height: 180px;
        &:hover {
          animation: turn 2s linear 1;
        }
      }
      p {
        margin-top: 10px;
        font-size: 17px;
      }
    }
  }
}
</style>
