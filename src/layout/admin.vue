<script setup>
import TopNav from './components/TopNav.vue'
import SideMenu from './components/SideMenu.vue'
import BreadCrumbs from './components/BreadCrumbs.vue'
</script>

<template>
	<el-container>
		<el-header>
			<top-nav />
		</el-header>

		<el-container>
			<el-aside>
				<side-menu />
			</el-aside>

			<el-main>
				<bread-crumbs />
				<router-view />
			</el-main>
		</el-container>
	</el-container>
</template>

<style scoped>
.el-main {
	@apply w-full h-screen text-left;
}
</style>
