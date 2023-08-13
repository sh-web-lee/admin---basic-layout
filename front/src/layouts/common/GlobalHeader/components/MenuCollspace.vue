<template>
  <hover-container @click="app.toggleSiderCollspace">
    <icon-line-md-menu-unfold-left v-if="app.siderCollspace" class="text-16px" />
    <icon-line-md-menu-fold-left v-else class="text-16px" />
  </hover-container>
</template>
<script lang="ts" setup>
import {  } from 'vue';
import { useAppStore } from '@/store';


const app = useAppStore()
</script>
<style lang="less" scoped></style>