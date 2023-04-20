import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
	// 开启 attributify
	attributify: true,
	shortcuts: {
		'f-center': 'flex justify-center items-center',
		'f-around': 'flex justify-around items-center',
		'f-between': 'flex justify-between items-center',
		'v-center': 'flex items-center',
		'm-btn': 'w-full bg-gradient-to-b from-cyan-500 to-blue-400 text-white rounded-full py-5'
	}
})
