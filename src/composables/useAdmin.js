export function usePassword() {
	const router = useRouter()
	const store = useAdminStore()
	const { logout } = store
	const formDrawerRef = ref(null)
	const openRepasswordForm = () => formDrawerRef.value.open()

	const form = reactive({
		oldPassword: '123456',
		newPassword: 'admin',
		rePassword: 'admin'
	})

	const rePassRule = (rule, value, callback) => {
		if (value === '') {
			callback(new Error('确认密码不能为空！'))
		} else if (value !== form.newPassword) {
			callback(new Error('确认密码必须和新密码一致！'))
		} else {
			callback()
		}
	}

	const rules = {
		oldPassword: [
			{
				required: true,
				message: '旧密码不能为空',
				trigger: 'blur'
			}
		],
		newPassword: [
			{
				required: true,
				message: '新密码不能为空',
				trigger: 'blur'
			}
		],
		rePassword: [
			{
				validator: rePassRule,
				trigger: 'blur'
			}
		]
	}

	const formRef = ref(null)

	const onSubmit = () => {
		formRef.value.validate(valid => {
			if (!valid) {
				return false
			}
			const data = {
				oldPassword: form.oldPassword,
				newPassword: form.newPassword
			}
			formDrawerRef.value.showLoading()
			rePassword(data)
				.then(res => {
					console.log(res)
					if (res.code == 1) {
						toast('修改密码成功，请重新登录')
						logout().then(() => {
							router.push('/login')
						})
					} else {
						toast(res.msg, 'error')
					}
				})
				.finally(() => {
					formDrawerRef.value.hideLoading()
				})

			// formDrawerRef.value.showLoading()
			// setTimeout(() => {
			// 	rePassword(oldPassword, newPassword)
			// 		.then(res => {
			// 			console.log(res)
			// 			if (res.code == 1) {
			// 				toast('修改密码成功，请重新登录')
			// 				logout().then(() => {
			// 					router.push('/login')
			// 				})
			// 			} else {
			// 				toast(res.msg, 'error')
			// 			}
			// 		})
			// 		.finally(() => {
			// 			formDrawerRef.value.hideLoading()
			// 		})
			// }, 2000)
		})
	}

	return {
		formDrawerRef,
		form,
		rules,
		formRef,
		openRepasswordForm,
		onSubmit
	}
}
