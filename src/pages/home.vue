<template>
    <n-loading-bar-provider :to="loadingBarTargetRef" container-style="position: absolute;">
        <div ref="loadingBarTargetRef">dsdssds
            <n-button @click="handleFinish"> naive-ui </n-button>
        </div>
    </n-loading-bar-provider>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { NButton, NLoadingBarProvider } from 'naive-ui';
import { useLoadingBar } from 'naive-ui';
import { useRouter } from 'vue-router'



const router = useRouter()
const loadingBar = useLoadingBar()
router.beforeEach(() => {
    loadingBar?.start()
})
router.afterEach(() => {
    loadingBar?.finish()
})

const handleFinish = () => {
    loadingBar?.start();
    setTimeout(() => {
        loadingBar.finish();
    }, 3000);
};
const loadingBarTargetRef = ref<undefined | HTMLElement>(undefined)



</script>