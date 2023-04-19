import axios from 'axios'

const service = axios.create({
	baseURL: 'http://localhost:8080'
})

// 添加请求拦截器
service.interceptors.request.use(
	config => {
		// 往header头自动添加token
		const token = getToken()
		if (token) {
			config.headers['Authorization'] = token
		}
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	res => {
		return res.data
	},
	error => {
		toast(error.response.data.msg || '请求失败', 'error')
		return Promise.reject(error)
	}
)

export default service
