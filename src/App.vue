<template>
	<div class="app-container">
		<Header />
		<router-view class="router-wrapper" />
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
	components: { Header, Footer }
}
</script>

<style lang="scss">
.app-container {
	height: 100vh;
	display: flex;
	flex-direction: column;
	.router-wrapper {
		flex-grow: 1;
	}
}
</style>