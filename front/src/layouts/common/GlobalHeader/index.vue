<template>
  <dark-mode-container class="h-full flex-y-center">
    <div class="flex-1-hidden flex-y-center h-full">
      <menu-collspace />
      <global-breadcrumb />
    </div>
    <div class="flex-y-center h-full justify-end">
      <global-search />
      <github-site />
      <full-screen />
      <user-avatar />
    </div>
  </dark-mode-container>

</template>
<script lang="ts" setup>
import {  } from 'vue';
import GlobalSearch from '../GlobalSearch/index.vue'
import {
  GithubSite,
  UserAvatar,
  FullScreen,
  MenuCollspace,
  GlobalBreadcrumb
} from './components'

</script>
<style lang="scss" scoped>
</style>