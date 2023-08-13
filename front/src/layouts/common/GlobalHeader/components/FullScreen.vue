<template>
  <hover-container class="w-40px h-full" tooltip-content="FullScreen" :inverted="theme.header.inverted" @click="toggle">
    <icon-gridicons-fullscreen-exit v-if="isFullscreen" class="text-22px text-[#98A2B2]" />
    <icon-gridicons-fullscreen v-else class="text-22px text-[#98A2B2]" />
  </hover-container>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';
import { useThemeStore } from '@/store';

defineOptions({ name: 'FullScreen' });

const { isFullscreen, toggle } = useFullscreen();
const theme = useThemeStore();
</script>

<style scoped></style>
