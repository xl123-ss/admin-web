<script setup>
const store = useAdminStore()
const { adminInfo, sideWidth } = storeToRefs(store)
const { handleSideWidth } = store

const { isFullscreen, toggle } = useFullscreen()

const handleRefresh = () => location.reload()

const { handleLogout } = useLogout()

const { formDrawerRef, form, rules, formRef, onSubmit, openRepasswordForm } = usePassword()
</script>

<template>
	<div class="f-header v-center">
		<RouterLink to="/">
			<div class="f-center text-[1.5rem] transition-all duration-500" :style="{ width: sideWidth }">
				<IEpElementPlus class="mr-3" />
				<span v-show="sideWidth === '220px'">极客空间</span>
			</div>
		</RouterLink>

		<div @click="handleSideWidth" class="icon v-center">
			<IEpFold v-if="sideWidth === '220px'" />
			<IEpExpand v-else />
		</div>

		<div class="ml-auto v-center">
			<IEpRefresh @click="handleRefresh" class="icon" />
			<div @click="toggle" class="icon v-center">
				<IEpFullScreen v-if="!isFullscreen" />
				<IEpAim v-else />
			</div>
			<IEpPrinter class="icon" />
			<IEpSetting class="icon" />

			<el-dropdown class="dropdown">
				<span class="v-center text-light-50">
					<el-avatar class="mr-2" :size="32" :src="adminInfo.avatar" />
					{{ adminInfo.realName }}
					<IEpArrow-down class="icon" />
				</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item @click="openRepasswordForm">修改密码</el-dropdown-item>
						<el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>

	<FormDrawer ref="formDrawerRef" title="修改密码" destroyOnClose @submit="onSubmit">
		<el-form ref="formRef" :rules="rules" :model="form" label-width="80px">
			<el-form-item prop="oldPassword" label="旧密码">
				<el-input v-model="form.oldPassword" placeholder="请输入旧密码"></el-input>
			</el-form-item>
			<el-form-item prop="newPassword" label="新密码">
				<el-input type="password" v-model="form.newPassword" placeholder="请输入密码" show-password></el-input>
			</el-form-item>
			<el-form-item prop="rePassword" label="确认密码">
				<el-input type="password" v-model="form.rePassword" placeholder="请输入确认密码" show-password></el-input>
			</el-form-item>
		</el-form>
	</FormDrawer>
</template>

<style scoped>
.f-header {
	@apply bg-gradient-to-r from-cyan-600 to-sky-600 text-light-50 fixed top-0 left-0 right-0 h-16 shadow-xl shadow-gray-400;
}
.icon {
	@apply mx-1 cursor-pointer hover: opacity-70 text-xl;
}
.f-header .dropdown {
	cursor: pointer;
	@apply flex justify-center items-center mx-5 h-16;
}
.btn {
	@apply w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full;
}
</style>
