export const useAdminStore = defineStore('admin', {
	state: () => ({
		//管理员信息
		adminInfo: {},
		sideWidth: '220px',
		menus: [
			{
				name: '仪表盘',
				icon: 'DataBoard',
				frontpath: '/'
			},
			{
				name: '系统设置',
				icon: 'Setting',
				frontpath: '/setting',
				child: [
					{
						name: '菜单管理',
						icon: 'Memo',
						frontpath: '/menu'
					},
					{
						name: '角色管理',
						icon: 'Edit',
						frontpath: '/role'
					}
				]
			},
			{
				name: '接口文档',
				icon: 'Document',
				frontpath: '/docs'
			},
			{
				name: '用户管理',
				icon: 'User',
				frontpath: '/user'
			},
			{
				name: '通知管理',
				icon: 'Bell',
				frontpath: '/notice'
			},
			{
				name: '商品管理',
				icon: 'Goods',
				frontpath: '/goods'
			},
			{
				name: '订单管理',
				icon: 'ShoppingCart',
				frontpath: '/order'
			}
		]
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
