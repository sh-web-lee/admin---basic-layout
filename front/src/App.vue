<script setup lang="ts">
</script>

<template>
  <n-config-provider
    class="h-full"
  >
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import { subscribeStore } from '@/store'

subscribeStore()
</script>

<style scoped></style>
