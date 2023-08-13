<template>
  <n-dropdown :options="options" @select="handleDropdown">
    <hover-container class="px-12px">
      <img :src="auth.userInfo.avatar" alt="avatar" v-if="auth.userInfo.avatar">
      <icon-local-avatar class="text-44px" />
      <div class="flex-col pl-20px">
        <span class="text-16px text-[#294566] font-bold">{{ auth.userInfo.userName }}</span>
        <span class="text-[#A3B6CC]">{{ auth.userInfo.userRole }}</span>
      </div>
    </hover-container>
  </n-dropdown>
</template>
<script lang="ts" setup>
import {  } from 'vue';
import type { DropdownOption } from 'naive-ui'
import { useAuthStore } from '@/store'


const auth = useAuthStore();

const options: DropdownOption[] = [
  {
    label: 'Your Account',
    key: 'user-center'
  },
  {
    label: 'Log out',
    key: 'logout'
  }
]

type DropdownKey = 'user-center'| 'logout'

function handleDropdown(optionKey: string) {
  // window.$message.success(optionKey)
  const key = optionKey as DropdownKey
  console.log(key)
}
</script>
<style lang="less" scoped></style>