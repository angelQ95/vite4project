<template>
    <div class="view-account">
        <div class="view-account-header"></div>
        <div class="view-account-container">
            <div class="view-account-top">
                <div class="view-account-top-logo">
                    <img :src="websiteConfig.loginImage" alt="" />
                </div>
                <div class="view-account-top-desc">{{ websiteConfig.loginDesc }}</div>
            </div>
            <div class="view-account-form">
                <n-form ref="formRef" label-placement="left" size="large" :model="formInline" :rules="rules">
                    <n-form-item path="username">
                        <n-input v-model:value="formInline.username" placeholder="请输入用户名">
                            <template #prefix>
                                <n-icon size="18" color="#808695">
                                    <PersonOutline />
                                </n-icon>
                            </template>
                        </n-input>
                    </n-form-item>
                    <n-form-item path="password">
                        <n-input v-model:value="formInline.password" type="password" showPasswordOn="click"
                            placeholder="请输入密码">
                            <template #prefix>
                                <n-icon size="18" color="#808695">
                                    <LockClosedOutline />
                                </n-icon>
                            </template>
                        </n-input>
                    </n-form-item>
                    <n-form-item class="default-color">
                        <div class="flex justify-between">
                            <div class="flex-initial">
                                <n-checkbox v-model:checked="autoLogin">自动登录</n-checkbox>
                            </div>
                            <div class="flex-initial order-last">
                                <a href="javascript:">忘记密码</a>
                            </div>
                        </div>
                    </n-form-item>
                    <n-form-item>
                        <n-button type="primary" @click="handleSubmit" size="large" :loading="loading" block> 登录 </n-button>
                    </n-form-item>
                    <n-form-item class="default-color">
                        <div class="flex view-account-other">
                            <div class="flex-initial">
                                <span>其它登录方式</span>
                            </div>
                            <div class="flex-initial mx-2">
                                <a href="javascript:">
                                    <n-icon size="24" color="#2d8cf0">
                                        <LogoGithub />
                                    </n-icon>
                                </a>
                            </div>
                            <div class="flex-initial mx-2">
                                <a href="javascript:">
                                    <n-icon size="24" color="#2d8cf0">
                                        <LogoFacebook />
                                    </n-icon>
                                </a>
                            </div>
                            <div class="flex-initial" style="margin-left: auto">
                                <a href="javascript:">注册账号</a>
                            </div>
                        </div>
                    </n-form-item>
                </n-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import { useUserMenuStore } from '@/store/modules/menu';
import { useMessage } from 'naive-ui';
import { ResultEnum } from '@/enums/httpEnum';
import { PersonOutline, LockClosedOutline, LogoGithub, LogoFacebook } from '@vicons/ionicons5';
import { PageEnum } from '@/enums/pageEnum';
import { websiteConfig } from '@/config/website.config';
interface FormState {
    username: string;
    password: string;
}

const formRef = ref();
const message = useMessage();
const loading = ref(false);
const autoLogin = ref(true);
const LOGIN_NAME = PageEnum.BASE_LOGIN_NAME;

const formInline = reactive({
    username: 'admin',
    password: '123456',
    isCaptcha: true,
});

const rules = {
    username: { required: true, message: '请输入用户名', trigger: 'blur' },
    password: { required: true, message: '请输入密码', trigger: 'blur' },
};

const userStore = useUserStore();
const UserMenuStore = useUserMenuStore();
const router = useRouter();
const route = useRoute();

const handleSubmit = (e) => {
    e.preventDefault();
    formRef.value.validate(async (errors) => {
        if (!errors) {
            const { username, password } = formInline;
            message.loading('登录中...');
            loading.value = true;

            const params: FormState = {
                username,
                password,
            };

            try {
                const { code, message: msg } = await userStore.login(params);
                message.destroyAll();
                if (code == ResultEnum.SUCCESS) {
                    const toPath = decodeURIComponent((route.query?.redirect || '/') as string);
                    message.success('登录成功，即将进入系统');
                    if (route.name === LOGIN_NAME) {
                        UserMenuStore.setMenu([
                            {
                                name: '地图',
                                color: 'light-green',
                                path: '/map',
                            },
                            {
                                name: '数据可视化',
                                color: 'green',
                                path: '/dataVisual',
                            },
                            {
                                name: '心理测试',
                                color: 'light-green',
                                path: '/psychological',
                            },
                        ]);
                        router.replace('/');
                        //接口返回对应类型权限的菜单数据，设置菜单数据。

                        //路由传参
                    } else router.replace(toPath);
                } else {
                    message.info(msg || '登录失败');
                }
            } finally {
                loading.value = false;
            }
        } else {
            message.error('请填写完整信息，并且进行验证码校验');
        }
    });
};

import { createScheduler } from '@maverick-js/scheduler';

const scheduler = createScheduler();

const taskA = () => { };
const taskB = () => { };
async function doTask() {
    // flush 指的是将调度器中的任务队列立即执行的操作
    // // Queue tasks. 事件队列
    scheduler.enqueue(taskA);
    scheduler.enqueue(taskB);

    // // Be notified of a flush.收到flush通知
    const stop = scheduler.onFlush(() => {
        console.log('Flushed!');
    });

    stop(); // unsubscribe 退订

    // // Schedule a flush - can be invoked more than once.
    //安排冲洗 - 可以多次调用。
    scheduler.flush();

    // // Wait for flush to complete.//等待冲洗完成
    await scheduler.tick;

    // // Synchronously flush the queue whenever desired.
    scheduler.flushSync();
}

doTask();
</script>

<style lang="less" scoped>
.view-account {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;

    &-container {
        flex: 1;
        padding: 32px 12px;
        max-width: 384px;
        min-width: 320px;
        margin: 0 auto;
    }

    &-top {
        padding: 32px 0;
        text-align: center;

        &-desc {
            font-size: 14px;
            color: #808695;
        }
    }

    &-other {
        width: 100%;
    }

    .default-color {
        color: #515a6e;

        .ant-checkbox-wrapper {
            color: #515a6e;
        }
    }
}

@media (min-width: 768px) {
    .view-account {
        background-image: url('../../assets/images/login.svg');
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100%;
    }

    .page-account-container {
        padding: 32px 0 24px 0;
    }
}
</style>
