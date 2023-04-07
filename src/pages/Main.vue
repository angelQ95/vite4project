<template>
    <n-config-provider :theme-overrides="themeOverrides" :theme="theme" :locale="zhCN" style="height: 100%">
        <n-global-style />
    </n-config-provider>
</template>
<script setup lang="ts">
import useAppConfigStore from '@/store/modules/app-config'
import { NButton, NLayoutSider, NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from 'naive-ui';
import { computed, defineComponent, onBeforeUnmount, onMounted } from 'vue'

const appConfig = useAppConfigStore();
const themeOverrides = computed(()=>{
    return {
        common: {
            primaryColor: appConfig.themeColor,
            primaryColorHover: appConfig.themeColor
        }
    }
})
</script>