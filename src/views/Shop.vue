<template>
	<div>
		<div class="container">
			<div class="input-wp my-5">
				<input type="text" class="form-control form-control-lg search" v-model="search" autofocus v-on:keyup="onKeyup">
				<i class="fa fa-times-circle bt-remove" v-show="search.length" v-on:click="resetInput"></i>
			</div>
			<ul class="prd-wrap">
				<li class="prd" v-for="v in searchPrds" v-bind:key="v.id">
					<img class="w-100 img" v-bind:src="v.src">
					<div class="title">{{ v.title }}</div>
					<div class="price">${{ v.price }}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
// modern javascript: ES6/Node/Express/React/Vue ...
import axios from 'axios';

export default {
	name: 'Shop',
	data() {
		return {
			prds: [],
			searchPrds: [],
			search: ''
		}
	},
	async created() {
		let { data } = await axios.get('/json/products.json')
		this.prds = data.prds;
		this.searchPrds = data.prds;
	},
	methods: {
		resetInput(e) {
			this.search = '';
			this.searchPrds = this.prds;
		},
		onKeyup(e) {
			this.searchPrds = this.prds.filter((v) => {
				return v.title.toLowerCase().includes(this.search.toLowerCase()) || v.price.includes(this.search)
			})
		}
	}
}
</script>

<style lang="scss">
.input-wp {
	position: relative;
	.bt-remove {
		position: absolute;
		font-size: 1.25em;
		cursor: pointer;
		right: .5em;
		top: 50%;
		transform: translateY(-50%);
	}
}

.prd-wrap {
	display: flex;
	flex-wrap: wrap;
	.prd {
		width: 25%;
		padding: 1%;
		.title {
			font-size: 1.25em;
			padding: .5em;
			background-color: #555;
			color: #fff;
		}
		.price {
			font-size: 1.25em;
			color: #920707;
			text-align: right;
			padding: .5em;
		}
	}
}
</style>