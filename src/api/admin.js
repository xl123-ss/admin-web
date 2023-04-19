import axios from '@/request'

export function getInfo() {
	return axios.post('/sys/user/info')
}
