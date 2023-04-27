<template>
    <div class="tpl">
        <h1 class="marg">xxxxxxxx系统</h1>
        <n-grid x-gap="12" :cols="colsProps">
            <n-gi v-for="item in giList">
                <router-link :to="item.path">
                    <div :class="item.color">{{ item.name }}</div>
                </router-link>
            </n-gi>
            <n-gi>
                <div class="green" />
            </n-gi>
            <n-gi>
                <div class="light-green" />
            </n-gi>
            <n-gi>
                <div class="green" />
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
interface giContent {
    name: string,
    color: string,
    path: string
}
const props = defineProps({
    colsProps: {//菜单数量
        type: Number,
        default: 4,
    },
    giList: {//gilist详细内容
        type: Array<giContent>,
        default: [],
    },
})
</script>

<style scoped>
.marg {
    margin-bottom: 100px;
}

.tpl {
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.light-green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.12);
}

.green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.24);
}
</style>