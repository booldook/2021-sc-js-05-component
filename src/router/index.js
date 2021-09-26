import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from '../views/Weather.vue'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Weather',
		component: Weather
	}, {
		path: '/shop',
		name: 'Shop',
		component: Shop
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
