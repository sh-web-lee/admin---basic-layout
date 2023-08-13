<template>
  <div class="flex-col">
    <h2 class="text-58px line-height-77px">Sign In to <br /><span class="text-primary">{{ title }}</span></h2>
    <n-gradient-text class="text-[#000] mt-44px text-24px">
      if you don't have an account<br />
      you can
      <n-button :text="true" class="text-primary text-24px cursor-pointer z-99">Register here!</n-button>
    </n-gradient-text>
  </div>
</template>
<script lang="ts" setup>
import {  } from 'vue';
import { useAppInfo } from '@/composables'

const { title } = useAppInfo();

</script>
<style lang="less" scoped></style>