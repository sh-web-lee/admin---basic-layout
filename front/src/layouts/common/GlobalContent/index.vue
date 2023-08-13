<template>
  <div
    :class="{ 'p-16px': showPadding }"
    class="h-full bg-[#F7F8FA] dark:bg-[#101014] transition duration-300 ease-in-out">
    <router-view v-slot="{ Component, route }">
      <transition :name="theme.pageAnimateMode" mode="out-in" :appear="true">
        <keep-alive>
          <component :is="Component" ::key="route.fullPath"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { useThemeStore } from '@/store'

interface Props {
  /** 显示padding */
  showPadding?: boolean;
}

withDefaults(defineProps<Props>(), {
  showPadding: true
})

defineOptions({ name: 'GlobalContent' });
const theme = useThemeStore();

</script>
<style lang="less" scoped></style>