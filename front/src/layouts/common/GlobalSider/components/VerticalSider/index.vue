<template>
  <dark-mode-container class="h-full flex-col-stretch" >
    <global-logo :style="{ height: theme.header.height + 'px' }" />
    <vertical-menu />
  </dark-mode-container>
</template>
<script lang="ts" setup>
import { useThemeStore } from '~/src/store';
import { VerticalMenu } from './components'
import { GlobalLogo } from '@/layouts/common'

const theme = useThemeStore()

</script>
<style lang="less" scoped></style>