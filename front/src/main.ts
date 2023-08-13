import { createApp } from 'vue'
import App from './App.vue'
import AppLoading from '@/components/common/AppLoading.vue'
import { setupAssets } from './plugins'
import { setupRouter } from './router';
import { setupStore } from './store';


async function setupApp() {
  setupAssets();

  const apploading = createApp(AppLoading)

  apploading.mount("#apploading")

    
  const app = createApp(App);

  // pinia
  setupStore(app)

  // vue router
  await setupRouter(app)



  app.mount("#app")
}

setupApp();