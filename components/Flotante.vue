<template>
  <div class="flotante" :style="estiloFlotante">
		<v-img :src="imagenFlotante" alt="Flotante BSF"></v-img>
	</div>
</template>

<script>
export default {
	props: {
		arriba: {
      type: String,
      default: 'auto'
		},
		abajo: {
      type: String,
      default: 'auto'
		},
		izq: {
      type: String,
      default: 'auto'
		},
		der: {
      type: String,
      default: 'auto'
		},
		ancho: {
      type: String,
      default: '100%'
		},
		color: {
      type: String,
      default: 'bl'
    },
	},
	computed: {
		estiloFlotante(){
			return `top: ${this.arriba}; bottom: ${this.abajo}; left: ${this.izq}; right: ${this.der}; width: ${this.ancho}`
		},
		imagenFlotante(){
			return require(`../static/images/flotante/${this.color}.png`)
		}
	}
}
</script>

<style lang="stylus">
.flotante
	animation rotation 20s linear infinite;
	position absolute
	z-index 3
	.v-image
		background transparent !important
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
</style>