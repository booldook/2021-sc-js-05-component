<template>
	<div>
		<div class="container">
			<div class="input-wp my-5">
				<input type="text" class="form-control form-control-lg search">
				<i class="fa fa-times-circle bt-remove"></i>
			</div>
			<ul class="prd-wrap">
				<li class="prd">
					<img class="w-100 img">
					<div class="title"></div>
					<div class="price"></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {

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