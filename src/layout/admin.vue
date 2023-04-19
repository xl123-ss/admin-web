<script setup>
const store = useAdminStore()
const { sideWidth } = storeToRefs(store)
</script>

<template>
	<el-container>
		<el-header>
			<top-nav />
		</el-header>

		<el-container>
			<el-aside :style="{ width: sideWidth }">
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
	padding: 0;
}
.el-aside {
	transition: all 0.2s;
}
</style>
