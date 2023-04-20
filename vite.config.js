import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		WindiCSS(),
		AutoImport({
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: [
				'vue',
				'vue-router',
				'@vueuse/core',
				'pinia',
				//自定义导入
				{
					// onBeforeRouteLeave 'vue-router’的这个 API 未被自动导入，在这里补充
					'vue-router': ['onBeforeRouteLeave'],
					'@/composables/util': ['toast', 'showModal', 'showFullLoading', 'hideFullLoading'],
					'@/composables/token': ['setToken', 'getToken', 'removeToken'],
					'@/composables/useAuth': ['useAccountLogin', 'useMobileLogin', 'useLogout'],
					'@/composables/useAdmin': ['usePassword'],
					'@/api/auth': ['login', 'logout', 'getCaptcha'],
					'@/api/admin': ['getInfo', 'rePassword'],
					'@vueuse/integrations/useCookies': ['useCookies'],
					'@/store': ['useAdminStore']
				}
			],
			// 生成 auto-import.d.ts 声明文件
			dts: 'src/auto-import.d.ts',
			// 解析Api
			resolvers: [
				// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
				ElementPlusResolver(),
				// 自动导入图标组件
				IconResolver({ prefix: 'Icon' })
			]
		}),
		Components({
			// 指定组件所在位置，免去 import 的麻烦
			dirs: ['src/components/', 'src/layout/components/'],
			// 配置将 vue 后缀类型的文件进行自动按需引入
			extensions: ['vue'],
			resolvers: [
				ElementPlusResolver(),
				// 自动注册图标组件
				IconResolver({ enabledCollections: ['ep'] })
			],
			// 生成 components.d.ts
			dts: true,
			// 遍历子目录
			deep: true
		}),
		// 自动安装图标
		Icons({
			autoInstall: true
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
			// '@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		host: '0.0.0.0',
		port: 3000, // 端口号
		open: true // 是否自动打开浏览器
	}
})
