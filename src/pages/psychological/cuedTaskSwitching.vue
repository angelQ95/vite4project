<template>
  <div class="page-container">
    <iframe class="if" src="/static/cuedSwitch.html" title="cuedSwitch"></iframe>
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
