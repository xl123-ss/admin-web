<script setup>
import { getInfo } from '@/api/admin'
import { logout } from '@/api/auth'

const router = useRouter()

getInfo().then(res => {
	console.log(res.data)
	adminInfo.value = res.data
})

const adminInfo = ref({})

const handleLogout = () => {
	showModal('确定退出吗?').then(() => {
		logout().then(() => {
			removeToken()
			router.push('/login')
		})
	})
}
</script>

<template>
	<div class="flex h-16 bg-sky-500">
		<span>顶部导航</span>
		<button @click="handleLogout">退出登录</button>
		<span>{{ adminInfo.realName }}</span>
		<img :src="adminInfo.avatar" class="w-16 h-16 rounded-full" />
	</div>
</template>

<style scoped></style>
