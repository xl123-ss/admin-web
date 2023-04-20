import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/layout/admin.vue'
import Index from '@/views/index.vue'
import Login from '@/views/login/index.vue'
import NotFound from '@/views/404.vue'

const routes = [
	{
		path: '/',
		name: 'admin',
		component: Admin,
		// 子路由
		children: [
			{
				path: '/',
				name: 'index',
				component: Index,
				meta: {
					title: '后台首页'
				}
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {
			title: '登录页'
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
