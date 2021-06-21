<template>
  <div class="menuServicios px-2">
		<h2 class="h2-titulo">NUESTROS SERVICIOS</h2>
		<v-row>
			<v-col v-for="(servicio, index) in listadoServicio" :key="index" cols="12" sm="6" lg="4">
				<v-card height="200">
					<n-link :to="`/asesorias/${servicio.slug}`">
						<v-img :src="`/images/${servicio.slug}/1.${extension}`" :srcset="`/images/${servicio.slug}/1@1x.${extension} 600w, /images/${servicio.slug}/1@2x.${extension} 960w`" :alt="servicio.name" height="200">
							<v-img src="/images/logos/fv_logo.png" srcset="/images/logos/fv_logo@1x.png 600w, /images/logos/fv_logo@2x.png 960w" width="70" alt="Logo Fitness Vita" class="card__logo"></v-img>
							<v-list-item class="d-flex align-end">
								<v-list-item-content>
									<v-list-item-subtitle class="ma-0">SERVICIOS</v-list-item-subtitle>
									<v-list-item-title class="headline">{{ servicio.name }}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-img>
					</n-link>
				</v-card>
			</v-col>
		</v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	data: () => ({}),
	computed:{
		...mapGetters(['listadoServicio', 'extension']),
	}
}
</script>

<style lang="stylus">
	.menuServicios
		ul, ol
			list-style-type none
			li
				text-decoration none
		.h2-titulo
			background url('/images/logos/fondo-titulo.png'),#1196B9
			background-size: contain;
			background-repeat: no-repeat;
			background-position: right;
			color #fff
			text-shadow 1px 1px 1px #121212
			padding 5px 10px
		.v-card
			position relative
			overflow hidden
			a
				display block
				height 200px
			.card__logo
				left 16px
				position absolute
				top 12px
			.header 
				left 16px
				position absolute
				top 12px
			.v-list-item
				background linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)
				border-radius 4px
				height 100%
				.v-list-item__title, .v-list-item__subtitle
					font-family 'Oswald', sans-serif !important
					line-height 1
					text-shadow 1px 1px 1px #121212
				.v-list-item__title
					color #eee
					font-size 1.8rem
				.v-list-item__subtitle
					color #aaa
				.v-list-item__content
					align-self auto
	</style>