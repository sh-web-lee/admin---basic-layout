<template>
  <div v-if="showTooltip">
    <n-tooltip :placement="placement" trigger="hover">
      <template #trigger>
        <div class="flex-center h-full cursor-pointer dark:hover:bg-[#333]">
          <slot></slot>
        </div>
      </template>
      {{ tooltipContent }}
    </n-tooltip>
  </div>
  <div v-else class="flex-center cursor-pointer dark:hover:bg-[#333]">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import {  } from 'vue';
import type { PopoverPlacement } from 'naive-ui'
import { computed } from 'vue';

interface Props {
  /** tooltip显示文本 */
  tooltipContent?: string;
  /** tooltip的位置 */
  placement?: PopoverPlacement;
  /** class类 */
  contentClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tooltipContent: '',
  placement: 'bottom',
  contentClass: ''
})

const showTooltip = computed(() => Boolean(props.tooltipContent))

// const contentClassName = computed(() => )
</script>
<style lang="less" scoped></style>