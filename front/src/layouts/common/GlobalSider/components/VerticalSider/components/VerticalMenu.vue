<template>
  <n-scrollbar>
    <n-menu
      :options="menus"
      :value="activeKey"
      @update:value="handleUpdateMenu"
    />
  </n-scrollbar>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouteStore } from '@/store'
import { MenuOption } from 'naive-ui';
import { useRouterPush } from '@/composables'

const routeStore = useRouteStore()
const route = useRoute();
const { routerPush } = useRouterPush()

const menus = computed(() => routeStore.menus as App.GlobalMenuOption[])

const activeKey = route.name as string

function handleUpdateMenu(key: string, item: MenuOption) {
  const menuItem = item as App.GlobalMenuOption;
  routerPush(menuItem.routePath)
}

</script>
<style lang="less" scoped></style>