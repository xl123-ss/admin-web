<script setup>
const { form, formRef, rules, loading, onSubmit, onCaptcha, captchaBase64 } = useAccountLogin()

// 监听回车事件
function onKeyUp(e) {
	if (e.key == 'Enter') {
		onSubmit()
	}
}

// 添加键盘监听
onMounted(() => {
	document.addEventListener('keyup', onKeyUp)
})
// 移除键盘监听
onBeforeUnmount(() => {
	document.removeEventListener('keyup', onKeyUp)
})
</script>

<template>
	<el-form :model="form" ref="formRef" :rules="rules" class="w-[80%]">
		<el-form-item prop="username" class="py-3">
			<el-input placeholder="Username" v-model="form.username">
				<template #prefix>
					<IEpUser />
				</template>
			</el-input>
		</el-form-item>

		<el-form-item prop="password" class="py-3">
			<el-input type="password" placeholder="Password" v-model="form.password">
				<template #prefix>
					<IEpLock />
				</template>
			</el-input>
		</el-form-item>

		<el-form-item prop="captcha" class="flex">
			<el-input v-model="form.captcha" placeholder="请输入验证码" class="flex-1">
				<template #prefix>
					<IEpKey />
				</template>
			</el-input>
			<img :src="captchaBase64" class="w-32 h-10 ml-2 cursor-pointer" @click="onCaptcha" />
		</el-form-item>

		<el-form-item>
			<el-button class="m-btn" @click="onSubmit" :loading="loading">登 录</el-button>
		</el-form-item>
	</el-form>
</template>

<style scoped>
.login-btn {
	@apply w-full bg-gradient-to-b from-cyan-500 to-blue-400 text-white rounded-full;
	height: 40px;
}

.login-btn:hover {
	@apply text-sky-100 bg-gradient-to-b from-cyan-500 to-blue-500;
}
</style>
