<template>
  <div class="page-container">
    <div class="dec"><span>任务转换指的是个体在不同任务中灵活切换的能力，能够协助个体适应不同环境需求的变化，这种能力是执行功能的一种，任务转换能力反映了个体在认知灵活性的水平。</span></div>
    <iframe class="if" src="/static/cuedSwitch.html" title="cuedSwitch"></iframe>
    <div class="dec"><span>您的测试得分为：200分</span></div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function goHome() {
  router.push('/');
}
</script>

<style lang="less" scoped>
.page-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  .if{
    width: 800px;
    height: 650px;
  }
  .dec{
    word-break:break-all;
    white-space:pre-wrap;
    width: 200px;
    height: 100%;
    font-size: 18px;
  }
}
</style>
