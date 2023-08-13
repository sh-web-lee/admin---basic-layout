<template>
  <hover-container
    tooltip-content="github"
    class="w-40px h-full"
    @click="handleClickLink"
  >
    <icon-mdi-github class="text-[#98A2B2] text-26px" />
  </hover-container>
</template>
<script lang="ts" setup>
import {  } from 'vue';


function handleClickLink() {
  window.open('https://github.com/sh-web-lee/admin---basic-layout', '_blank')
}
</script>
<style lang="less" scoped></style>