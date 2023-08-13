<template>
  <n-form size="medium" :show-label="false">
    <n-form-item>
      <n-input v-model:value="model.username" placeholder="Username" class="bg-[#EAF0F7] rounded-5px" :bordered="false" />
    </n-form-item>
    <n-form-item>
      <n-input v-model:value="model.password" type="password" show-password-on="click" placeholder="Password" class="bg-[#EAF0F7] rounded-5px" :bordered="false" />
    </n-form-item>
    <n-space :vertical="true" :size="24">
      <div class="flex-y-center justify-between">
        <n-checkbox>
          <template #default>
            <span class="text-[#C7C7C7]">Remember</span>
          </template>
        </n-checkbox>
        <n-button class=" text-[#C7C7C7]" :text="true">Recover Password?</n-button>
      </div>
      <n-button
        type="primary"
        size="large"
        :block="true"
        class="rounded-5px drop-shadow-2xl"
        :loading="auth.loginLoading"
        @click="handleSubmit"
      >Sign In</n-button>
      <div class="flex-y-center justify-between">
        <n-button class="flex-1" :block="true">
          {{ EnumLoginModule['code-login'] }}
        </n-button>
        <div class="w-12px"></div>
        <n-button class="flex-1" :block="true">
          {{ EnumLoginModule['register'] }}
        </n-button>
      </div>
    </n-space>
    <other-account @login="handleLoginOtherAccount" />
  </n-form>
</template>
<script lang="ts" setup>
import {  } from 'vue';
import { EnumLoginModule } from '@/enum'
import { OtherAccount } from './components'
import { useAuthStore } from '@/store'
import { reactive } from 'vue';


const model = reactive({
  username: 'lijianyang',
  password: 'zxc123zxc..'
})

function handleLoginOtherAccount() {}

const auth = useAuthStore()
const { login } = useAuthStore();

function handleSubmit() {
  const { username, password } = model;

  login(username, password)
}
</script>
<style lang="less" scoped></style>