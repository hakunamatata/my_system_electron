import { defineConfig } from 'umi';
import {proxy, routes} from './config';


export default defineConfig({
  npmClient: 'pnpm',
  plugins: [
    require.resolve('umi-plugin-electron-builder'),
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
  ],
  model:{},
  routes:routes,
  initialState: {},
  proxy:proxy,
  electronBuilder: {
    rendererTarget: 'web',
    builderOptions: {
      appId: 'com.wzx.electron',
      productName: '测试',
      publish: [
        {
          provider: 'generic',
          url: 'http://localhost/test',
        },
      ],
    },
  },
});
