<template>
  <n-grid x-gap="12" :cols="2">
    <n-gi>
      <n-card>
        <div class="flex">
          <div class="flex-1-hidden h-full">
            <div ref="lineRef" class="wh-full"></div>
          </div>
        </div>
      </n-card>
    </n-gi>
    <n-gi>
      <n-grid x-gap="12" :cols="2">
        <n-gi>
          <n-card class="bg-primary">
            chart
          </n-card>
        </n-gi>
        <n-gi>
          <n-card>
            chart
          </n-card>
        </n-gi>
      </n-grid>
    </n-gi>
  </n-grid>
</template>
<script lang="ts" setup>
import {  } from 'vue';



</script>
<style lang="less" scoped></style>