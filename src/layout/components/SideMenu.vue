<script setup>
const store = useAdminStore()
const { sideWidth, menus } = storeToRefs(store)
const router = useRouter()
const route = useRoute()
// 默认选中当前路由
const defaultActive = ref(route.path)
// 是否折叠
const isCollapse = computed(() => sideWidth === '220px')
const handleSelect = e => {
	router.push(e)
}
</script>

<template>
	<div class="f-menu" :style="{ width: sideWidth }">
		<el-menu
			:default-active="defaultActive"
			:collapse="isCollapse"
			class="border-0"
			:collapse-transition="false"
			@select="handleSelect"
		>
			<template v-for="(item, index) in menus" :key="index">
				<el-sub-menu v-if="item.child && item.child.length > 0" :index="item.name">
					<template #title>
						<el-icon>
							<component :is="item.icon"></component>
						</el-icon>
						<span class="pl-4">{{ item.name }}</span>
					</template>
					<el-menu-item v-for="(item2, index2) in item.child" :key="index2" :index="item2.frontpath">
						<el-icon>
							<component :is="item2.icon"></component>
						</el-icon>
						<span class="pl-4">{{ item2.name }}</span>
					</el-menu-item>
				</el-sub-menu>

				<el-menu-item v-else :index="item.frontpath">
					<el-icon>
						<component :is="item.icon"></component>
					</el-icon>
					<span class="pl-4">{{ item.name }}</span>
				</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<style scoped>
.f-menu {
	@apply fixed top-0 left-0 bottom-0 top-16 overflow-y-auto overflow-x-hidden transition-all duration-500 bg-gradient-to-b from-cyan-500 to-sky-500;
}
.f-menu::-webkit-scrollbar {
	width: 0px;
}
.el-sub-menu,
.el-menu-item {
	@apply bg-sky-100 border-solid border-b-sky-300 border-1;
}
.el-menu-item.is-active {
	@apply text-sky-700 bg-sky-300;
}
</style>
