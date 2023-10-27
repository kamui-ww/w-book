// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt','@pinia-plugin-persistedstate/nuxt'],
  vite: {
    plugins: [
      // 按需引入组件
      Components({
        resolvers: [AntDesignVueResolver({
          importStyle: 'less' //css样式类型配置为less
        })]
      })
    ],
    // 配置主题
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': '#DB7093'
          },
          javascriptEnabled: true,
        }
      }
    },
    ssr: {
      noExternal: ['ant-design-vue']
    }

  }
})

