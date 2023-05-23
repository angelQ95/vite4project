<template>
  <div id="main" class="page-container">
    fsgdgds
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';
let myChart;
onMounted(()=>{
  myChart = echarts.init(document.getElementById('main') as HTMLElement);
  myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});
})
</script>

<style lang="less" scoped>
  .page-container {
    width:100%;
    height: 100%;
  }
</style>
