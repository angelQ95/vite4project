<template>
  <NConfigProvider :locale="zhCN" :theme="getDarkTheme" :theme-overrides="getThemeOverrides"
    :date-locale="dateZhCN">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import {zhCN, dateZhCN, darkTheme, NLoadingBarProvider } from 'naive-ui'

</script>
<style lang="less">
@import 'styles/index.less';
</style>
