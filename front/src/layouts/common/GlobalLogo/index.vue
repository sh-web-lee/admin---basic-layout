<template>
  <router-link :to="routeHomePath" class="flex-center w-full nowrap-hidden">
    <system-logo class="text-32px text-primary" />
    <h2
      class="pl-8px font-bold text-18px text-[#475366]"
    >Yoga Admin</h2>
  </router-link>
</template>
<script lang="ts" setup>
import {  } from 'vue';
import { routePath } from '@/router'


const routeHomePath = routePath('root')
</script>
<style lang="less" scoped></style>