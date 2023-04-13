<template>
  <NConfigProvid>
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvid>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import { AppProvider } from '@/components/Application';
import {zhCN, dateZhCN, darkTheme, NLoadingBarProvider } from 'naive-ui'

</script>
<style lang="less">
@import 'styles/index.less';
</style>
