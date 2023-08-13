import { defineStore } from "pinia";

interface AppState {
  /** 侧边栏折叠状态 */
  siderCollspace: boolean;
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    siderCollspace: false
  }),
  actions: {
    /** 折叠/展开 侧边栏折叠状态 */
    toggleSiderCollspace() {
      this.siderCollspace = !this.siderCollspace;
    }
  }
})