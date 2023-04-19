import axios from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'

const service = axios.create({
	baseURL: 'http://localhost:8080'
})

// 添加请求拦截器
service.interceptors.request.use(
	config => {
		// 往 header 自动添加 token
		const cookie = useCookies()
		const token = cookie.get('accessToken')
		if (token) {
			config.headers['Authorization'] = token
		}
		return config
	},
	function (error) {
		// 对请求错误的处理
		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	res => {
		// 对响应数据解析
		return res.data
	},
	function (error) {
		ElNotification({
			message: error.response.data.msg || '请求失败',
			type: 'error',
			duration: 1000
		})
		return Promise.reject(error)
	}
)

export default service
