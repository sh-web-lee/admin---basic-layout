<template>
  <n-loading-bar-provider>
    <n-notification-provider>
      <n-message-provider>
        <slot></slot>
        <naive-provider-content />
      </n-message-provider>
    </n-notification-provider>
  </n-loading-bar-provider>
</template>
<script lang="ts" setup>
import { useLoadingBar, useMessage, useNotification } from 'naive-ui';
import { defineComponent, h } from 'vue';


// 挂载naive组件的方法至window, 以便在路由钩子函数和请求函数里面调用
function registerNaiveTools() {
  window.$loadingBar = useLoadingBar();
  window.$message = useMessage();
  window.$notification = useNotification();
}

const NaiveProviderContent = defineComponent({
  name: 'NaiveProviderContent',
  setup() {
    registerNaiveTools()
  },
  render() {
    return h('div')
  }
})
</script>
<style lang="less" scoped></style>