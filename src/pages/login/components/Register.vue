<template>
    <form 
    ref="form"
    :class="['item-container',`register-${type}`]">
    :data="formData"
    :rules="FORM_RULES"
    label-width="0"
    @submit="onSubmit"
    </form>
    <template v-if="type == 'phone'">
    <t-form-item name="phone">
        <t-input v-model="formData.phone" :maxlength="11" size="large" placeholder="请输入您的手机号">
        
        </t-input>
        "
    </t-form-item>
    </template>

</template>
<script setup lang="ts">
import { ref } from 'vue';
import { MessagePlugin, FormRule } from 'tdesign-vue-next';
import { useCounter } from '@/hooks';

const INITIAL_DATA = {
    phone: '',
    email: '',
    password: '',
    verifyCode:'',
    checked: false,
};

const FORM_RULES:Record<string, FormRule[]> = {
    phone: [{ required:true, message: '手机号必填', type: 'error' }],
    email: [
        { require: true,message:'邮箱必填',type:'error'},
        { email: true, message:'请输入正确的邮箱', typr: 'warning' },
    ],
    password: [{ required: true, message: '密码必填', type: 'error'}],
    verifyCode: [{ required: true, message: '验证码必填', type: 'error'}]
};
</script>