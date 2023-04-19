import axios from '@/request'

export function getInfo() {
	return axios.post('/sys/user/info')
}

export function rePassword(data) {
	return axios.post('/sys/user/password', data)
}
