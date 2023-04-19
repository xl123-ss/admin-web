<script setup>
import { logout } from '@/api/auth'
import { useCookies } from '@vueuse/integrations/useCookies'

const cookie = useCookies()
const router = useRouter()

const handleLogout = () => {
	logout().then(res => {
		console.log(res)
		cookie.remove('accessToken')
		router.push('/login')
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
