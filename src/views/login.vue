<script setup>
import { login } from '@/api/auth'
import { useCookies } from '@vueuse/integrations/useCookies'
const router = useRouter()

const form = reactive({
	username: 'admin',
	password: '123456'
})
const rules = {
	username: [
		{
			required: true,
			message: '用户名不能为空',
			trigger: 'blur'
		}
	],
	password: [
		{
			required: true,
			message: '密码不能为空',
			trigger: 'blur'
		}
	]
}

const formRef = ref(null)

const onSubmit = () => {
	console.log('submit!')
	formRef.value.validate(valid => {
		if (!valid) {
			return false
		}
		login(form.username, form.password).then(res => {
			console.log(res)
			if (res.code == 1) {
				ElNotification({
					message: '登录成功',
					type: 'success',
					duration: 1000
				})
				const cookie = useCookies()
				cookie.set('accessToken', res.data.accessToken)
				router.push('/')
			} else {
				ElNotification({
					message: res.msg,
					type: 'error',
					duration: 1000
				})
			}
		})
	})
}
</script>

<template>
	<el-row class="w-full h-screen bg">
		<el-col :span="12" class="flex flex-col justify-center items-center text-light-50">
			<p class="text-5xl font-bold mb-4">Admin Web</p>
			<p class="text-3xl">基于 Vue 3 和 Vite 的后台管理系统</p>
		</el-col>

		<el-col :span="12" class="flex flex-col justify-center items-center">
			<h2 class="text-gray-600 text-3xl font-bold">后台登录</h2>
			<div class="flex justify-center items-center my-5 space-x-2">
				<span class="h-[1px] w-24 bg-gray-200"></span>
				<span class="text-gray-400">账号密码登录</span>
				<span class="h-[1px] w-24 bg-gray-200"></span>
			</div>

			<el-form :model="form" class="w-[50%]" ref="formRef" :rules="rules">
				<el-form-item prop="username">
					<el-input placeholder="Username" v-model="form.username">
						<template #prefix>
							<IEpUser class="text-gray-400"></IEpUser>
						</template>
					</el-input>
				</el-form-item>

				<el-form-item prop="password">
					<el-input type="password" placeholder="Password" v-model="form.password">
						<template #prefix>
							<IEpLock class="text-gray-400"></IEpLock>
						</template>
					</el-input>
				</el-form-item>

				<el-form-item>
					<el-button
						class="w-full py-5 bg-gradient-to-r from-blue-300 to-indigo-400 text-white rounded-full text-lg"
						@click="onSubmit"
						>登 录</el-button
					>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>

<style scoped>
.bg {
	background-image: url('/login_bg.png');
	background-size: cover;
}
</style>
