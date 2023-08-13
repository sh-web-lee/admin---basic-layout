<template>
  <admin-layout
    :header-height="theme.header.height"
    class="123">
    <template #header>
      <global-header />
    </template>
    <global-content />
    <template #sider>
      <global-sider />
    </template>
    <template #footer>
      <global-footer />
    </template>
  </admin-layout>
</template>
<script lang="ts" setup>
import { AdminLayout } from '@soybeanjs/vue-materials'
import {
  GlobalHeader,
  GlobalFooter,
  GlobalContent,
  GlobalSider
} from '../common'
import { useThemeStore } from '~/src/store';

const theme = useThemeStore()
</script>
<style lang="less" scoped></style>