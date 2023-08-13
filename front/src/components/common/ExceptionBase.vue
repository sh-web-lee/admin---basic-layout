<template>
  <div class="wh-full flex-col-center">
    <div class="text-480px text-primary">
      <icon-local-no-permission v-if="type === '403'" />
      <icon-local-not-found v-if="type === '404'" />
      <icon-local-service-error v-if="type === '500'" />
    </div>
    <router-link :to="{ name: routeHomePath }">
      <n-button type="primary">Go Home</n-button>
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { routeName } from '@/router'

type ExceptionType = '403' | '404' | '500'

interface Props {
  type: ExceptionType;
}

defineProps<Props>()

const routeHomePath = routeName('root')
</script>