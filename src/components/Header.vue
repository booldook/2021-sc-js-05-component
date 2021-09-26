<template>
	<div class="header-wrapper">
		<div class="logo">
			<i class="fa fa-bars"></i> Weather
		</div>
		<ul class="navi-wrap">
			<li><router-link to="/">Weather</router-link></li>
			<li><router-link to="/shop">Shop</router-link></li>
		</ul>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header-wrapper {
	background-color: #efefef;
	border-bottom: 1px solid #bbb;
	display: flex;
	justify-content: space-between;
	.logo {
		padding: 1em;
	}
	.navi-wrap {
		display: flex;
		li {
			padding: 1em;
		}
	}
}
</style>