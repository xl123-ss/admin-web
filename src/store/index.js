export const useAdminStore = defineStore('admin', {
	state: () => ({
		//管理员信息
		adminInfo: {},
		sideWidth: '220px'
	}),
	actions: {
		// 登录
		login(username, password) {
			return new Promise((resolve, reject) => {
				login(username, password)
					.then(res => {
						setToken(res.data.accessToken)
						resolve(res)
					})
					.catch(err => reject(err))
			})
		},
		// 获取当前登录者信息
		getAdminInfo() {
			return new Promise((resolve, reject) => {
				getInfo()
					.then(res => {
						console.log(res.data)
						this.adminInfo = res.data
						resolve(res)
					})
					.catch(err => reject(err))
			})
		},
		// 退出登录
		logout() {
			return new Promise((resolve, reject) => {
				logout()
					.then(res => {
						// 移除 cookie里的 token
						removeToken()
						// 清空状态
						this.adminInfo = {}
						resolve(res)
					})
					.catch(err => reject(err))
			})
		},
		// 伸缩
		handleSideWidth() {
			this.sideWidth = this.sideWidth === '220px' ? '64px' : '220px'
		}
	}
})
