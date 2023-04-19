<script setup>
const { form, formRef, rules, loading, onSubmit } = useLogin()

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
	<el-row class="login-container f-center">
		<el-col :lg="12" :md="12" class="left">
			<p>Admin Web</p>
			<p class="text-3xl">基于 Vue 3 和 Vite 的后台管理系统</p>
		</el-col>

		<el-col :lg="12" :md="12" class="right">
			<h2 class="title">后台登录</h2>
			<div>
				<span class="line"></span>
				<span>账号密码登录</span>
				<span class="line"></span>
			</div>

			<el-form :model="form" ref="formRef" :rules="rules" class="w-[50%] my-3">
				<el-form-item prop="username">
					<el-input placeholder="Username" v-model="form.username">
						<template #prefix>
							<IEpUser />
						</template>
					</el-input>
				</el-form-item>

				<el-form-item prop="password" class="my-3">
					<el-input type="password" placeholder="Password" v-model="form.password" class="py-3">
						<template #prefix>
							<IEpLock />
						</template>
					</el-input>
				</el-form-item>

				<el-form-item>
					<el-button class="login-btn" @click="onSubmit" :loading="loading">登 录</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>

<style scoped>
.login-container {
	@apply w-full h-screen;
	background-image: url('/login_bg.png');
	background-size: cover;
}

.login-container .left,
.login-container .right {
	@apply flex justify-center items-center flex-col;
}

.login-container .right {
	@apply bg-transparent;
}

.left {
	@apply text-gray-600;
}

.left > p:first-child {
	@apply text-5xl font-bold mb-6;
}

.left > p:last-child {
	@apply text-3xl;
}

.right .title {
	@apply text-gray-600 text-3xl font-bold;
}

.right > div {
	@apply flex justify-center items-center my-5 space-x-2 text-gray-500;
}

.right .line {
	@apply h-[1px] w-24 bg-gray-200;
}

.login-btn {
	@apply w-full bg-gradient-to-b from-cyan-500 to-blue-400 text-white rounded-full;
	height: 40px;
}

.login-btn:hover {
	@apply text-sky-100 bg-gradient-to-b from-cyan-500 to-blue-500;
}
</style>
