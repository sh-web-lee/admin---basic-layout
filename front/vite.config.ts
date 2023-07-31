import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugin, getRootPath, getSrcPath } from './build';

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv;

  const rootPath = getRootPath();
  const srcPath = getSrcPath();

  return {
    plugins: setupVitePlugin(viteEnv),
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath
      }
    },
    server: {
      host: '0.0.0.0',
      port: 3200,
      open: true
    }
  }
})
