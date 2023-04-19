import axios from '@/request'

export function login(username, password) {
	return axios.post('/sys/auth/login', {
		username,
		password
	})
}
