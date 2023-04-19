<script setup>
import { logout } from '@/api/auth'

const router = useRouter()

const handleLogout = () => {
	showModal('确定退出吗?').then(() => {
		logout().then(res => {
			console.log(res)
			removeToken()
			router.push('/login')
		})
	})
}
</script>

<template>
	<div>
		顶部导航
		<button @click="handleLogout">退出登录</button>
	</div>
</template>

<style scoped></style>
