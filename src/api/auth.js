import axios from '@/request'

export function login(data) {
	return axios.post('/sys/auth/login', data)
}

export function logout() {
	return axios.post('/sys/auth/logout')
}

export function getCaptcha() {
	return axios.get('/sys/auth/captcha')
}
