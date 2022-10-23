import Vue from 'vue'
import Router from 'vue-router'
import System from '@/views/System.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'System',
			component: System
		}
	]
})
