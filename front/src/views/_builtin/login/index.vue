<template>
  <div class="relative flex-center wh-full">
    <dark-mode-switch 
      :dark="theme.darkMode"
      class="absolute left-48px top-24px z-3 text-20px"
      @update:dark="theme.setDarkMode"
    />
    <n-space :bordered="true" size="large" class="z-4 !w-auto rounded-20px relative">
      <div class="w-400px sm:w-1300px flex-center gap-5%">
        <div class="flex-2">
          <login-text />
        </div>
        <div class="flex-1">
          <login-pic />
        </div>
        <div class="flex-1">
          <main class="">
            <h3 class="text-18px text-primary font-medium">{{ activeModule.label }}</h3>
            <div class="pt-24px">
              <transition name="fade-slide" mode="out-in" appear>
                <component :is="activeModule.component" />
              </transition>
            </div>
          </main>
        </div>
      </div>
      <login-bg :theme-color="theme.themeColor" />
    </n-space>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { Component } from 'vue';
import { EnumLoginModule } from '@/enum';
import { useThemeStore } from '@/store'
import { LoginBg, PwdLogin, LoginText, LoginPic } from './components'


interface Props {
  /** 登录模块分类 */
  module: EnumType.LoginModuleKey;
}

const props = defineProps<Props>();
const theme = useThemeStore()

interface LoginModule {
  key: EnumType.LoginModuleKey;
  label: EnumLoginModule;
  component: Component;
}

const modules: LoginModule[] = [
  { key: 'pwd-login', label: EnumLoginModule['pwd-login'], component: PwdLogin }
  // { key: 'code-login', label: EnumLoginModule['code-login'], component: CodeLogin },
  // { key: 'register', label: EnumLoginModule.register, component: Register },
  // { key: 'reset-pwd', label: EnumLoginModule['reset-pwd'], component: ResetPwd },
  // { key: 'bind-wechat', label: EnumLoginModule['bind-wechat'], component: BindWechat }
];

const activeModule = computed(() => {
  const active: LoginModule = { ...modules[0] };
  const findItem = modules.find(item => item.key === props.module);
  if (findItem) {
    Object.assign(active, findItem);
  }
  return active;
});


</script>
<style lang="less" scoped></style>