<template>
  <NConfigProvider v-if="!isLock" :locale="zhCN" :theme="getDarkTheme" :theme-overrides="getThemeOverrides"
    :date-locale="dateZhCN">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
  <transition v-if="isLock && $route.name !== 'login'" name="slide-up">
    <LockScreen />
  </transition>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import {zhCN, dateZhCN, darkTheme, NLoadingBarProvider } from 'naive-ui'

import { LockScreen } from '@/components/Lockscreen'
</script>
<style lang="less">
@import 'styles/index.less';
</style>
