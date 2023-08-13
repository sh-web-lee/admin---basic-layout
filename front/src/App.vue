<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    :theme-overrides="theme.naiveThemeOverrides"
    class="h-full"
  >
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import { subscribeStore, useThemeStore } from '@/store'

const theme = useThemeStore();

subscribeStore()
</script>

<style scoped></style>
