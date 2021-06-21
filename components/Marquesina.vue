<template>
	<div id="marquee">
		<div class="marquee__item">
			<h2 :style="cssProps" class="texto-bordeado">
				{{textoCompleto}}
			</h2>
			<h2 :style="cssProps">
				{{textoCompleto}}
			</h2>
		</div>
		<div class="marquee__item">
			<h2 :style="cssProps" class="texto-bordeado">
				{{textoCompleto}}
			</h2>
			<h2 :style="cssProps">
				{{textoCompleto}}
			</h2>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		texto: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: '#121212'
		}
	},
	computed:{
		cssProps(){
			return {
				'--color-borde': this.color
			}
		},
		textoCompleto(){
			return this.texto
		}
	}
}
</script>

<style lang="stylus">
#marquee
	position relative
	overflow hidden
	white-space nowrap
	pointer-events none
	user-select none
	.marquee__item
		white-space nowrap
		pointer-events none
		display inline-flex
		animation marqueeAnimation 50s linear infinite
		font-family 'Oswald', sans-serif
		padding-right 1rem
		h2
			color var(--color-borde)
			font-size 3.5rem
			text-shadow 1px 1px 1px #121212
		.texto-bordeado
			-webkit-text-stroke-color var(--color-borde)
			-webkit-text-fill-color transparent
			-webkit-text-stroke-width .02em
			padding-right 1rem
			text-shadow none

@keyframes marqueeAnimation {
	0% {
		-webkit-transform translateZ(0)
		transform translateZ(0)
	}
	100% {
			-webkit-transform translate3d(-100%,0,0)
			transform translate3d(-100%,0,0)
	}
}
</style>