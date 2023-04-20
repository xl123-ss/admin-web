<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" @keyup.enter="onLogin" class="w-[80%]">
		<el-form-item prop="mobile" class="py-3">
			<el-input v-model="loginForm.mobile" :prefix-icon="User" placeholder="请输入手机号"></el-input>
		</el-form-item>

		<el-form-item prop="code" class="flex py-3">
			<el-input v-model="loginForm.code" placeholder="请输入验证码" :prefix-icon="Key" class="flex-1"></el-input>
			<el-button v-if="!sms.disabled" type="default" @click="sendCode" class="px-2 ml-2">发送验证码</el-button>
			<el-button v-else type="default" disabled class="px-2 ml-2">{{ sms.count }} 秒后重新发送</el-button>
		</el-form-item>

		<el-form-item>
			<el-button class="login-btn" @click="onLogin()">登 录</el-button>
		</el-form-item>
	</el-form>
</template>

<script setup>
// 发送短信验证码
const sendCode = () => {
	if (!validateMobile(loginForm.mobile)) {
		showToast('请输入正确的手机号', 'error')
		return
	}

	useSendCodeApi(loginForm.mobile).then(() => {
		timerHandler()
	})
}

// 短信计时器
const sms = reactive({
	disabled: false,
	total: 60,
	count: 0
})

// 计时器处理器
const timerHandler = () => {
	sms.count = sms.total
	sms.disabled = true

	let timer = setInterval(() => {
		if (sms.count > 1 && sms.count <= sms.total) {
			sms.count--
		} else {
			sms.disabled = false
			clearInterval(timer)
		}
	}, 1000)
}

const router = useRouter()
const loginFormRef = ref()

const loginForm = reactive({
	mobile: '',
	code: ''
})

const loginRules = ref({
	mobile: [{ required: true, message: 'required', trigger: 'blur' }],
	code: [{ required: true, message: 'required', trigger: 'blur' }]
})

const onLogin = () => {
	loginFormRef.value.validate(valid => {
		if (!valid) {
			return false
		}

		// 用户登录
		login(loginForm).then(() => {
			router.push('/')
		})
	})
}
</script>

<style scoped>
.login-btn {
	@apply w-full bg-gradient-to-b from-cyan-500 to-blue-400 text-white rounded-full;
	height: 40px;
}

.login-btn:hover {
	@apply text-sky-100 bg-gradient-to-b from-cyan-500 to-blue-500;
}
</style>
