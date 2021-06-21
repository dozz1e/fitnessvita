<template>
	<div id="portada" class="d-flex flex-column align-center mb-5">
		<v-row class="d-flex">
			<v-col cols="12" sm="10" class="pa-0 head-portada__imagen d-flex align-center flex-column">
				<v-img :src="`/images/portada/1.${extension}`" :srcset="`/images/portada/1@1x.${extension} 600w, /images/portada/1@2x.${extension} 960w`" alt="Imagen Portada" width="100%" :height="alto"  gradient="to right, rgba(0,0,0,0.05),rgba(0,0,0,0)">
					<div class="titulo-pagina d-flex flex-column">
						<h1 class="hidden-xs-only">FITNESS VITA</h1>
						<span class="subtitulo hidden-xs-only">REVISA NUESTROS SERVICIOS</span>
						<v-btn href="/asesorias" width="250">CONTRATA AHORA<v-icon>mdi-play</v-icon></v-btn>
					</div>
				</v-img>
				<v-card elevation="5" id="card-portada">
					<Flotante arriba="-90px" der="-90px" ancho="180px" color="ng" class="hidden-sm-and-down"></Flotante>
					<v-img :src="`/images/portada/2.${extension}`" :srcset="`/images/portada/2@1x.${extension} 600w, /images/portada/2@2x.${extension} 960w, /images/portada/2@3x.${extension} 1264w`" alt="Card Portada" class="card-portada__img"></v-img>
					<v-card-text class="text--primary hidden-lg-and-up">
						<p class="ma-0">
							Somos una empresa que busca entregar soluciones en materia de salud, estética y rendimiento, a través de la actividad física programada.<br />
							Contamos con profesionales altamente calificados con estudios de posgrado y amplia experiencia.
						</p>
					</v-card-text>
				</v-card>
				<div class="v-card-text-web hidden-md-and-down">
					<v-card>
						<v-card-text class="text--primary">
							Somos una empresa que busca entregar soluciones en materia de salud, estética y rendimiento, a través de la actividad física programada.<br />
							Contamos con profesionales altamente calificados con estudios de posgrado y amplia experiencia.
						</v-card-text>
					</v-card>
				</div>
			</v-col>
			<v-col cols="12" sm="2" class="head-portada__lateral pa-0">
				<Lateral texto="#strength-fitness-bodybuilding"></Lateral>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import { mapGetters } from "vuex"
import Flotante from "./Flotante"
import Lateral from "./Lateral"

export default {
	components:{
		Flotante,
		Lateral
	},
  computed:{
		...mapGetters(['extension','anchoVentana']),
		alto(){
      let h = 0
      if(this.anchoVentana < 600)
        h = 720
      else
        h = 1000
      return h
    }
  }
}
</script>

<style lang="stylus">
#portada
	min-height 760px
	position relative
	#card-portada
		width 95%
		border-radius 0
		margin -300px 0 0
		.card-portada__img
			height 200px
	.row
		width 100%
	.head-portada__lateral
		margin-right -500px

.titulo-pagina
	bottom 500px
	color #fff
	left 50px
	text-shadow 1px 1px 1px #000
	position absolute
	h1
		font-size 5rem
		line-height 1
	.subtitulo
		color #1976d2
		font-size 22px
		font-weight bold
		margin 10px 0 20px
		text-shadow none
	.v-icon
		margin-left 6px
	.v-btn
		background-color #1976d2 !important
		color #fff
		font-size 18px
		padding 25px !important

@media (max-width 599px)
	.titulo-pagina
		bottom 320px
		left 12px
		.v-btn
			font-size 14px
			width 200px !important

@media (min-width 600px)
	#portada
		min-height 875px
		overflow hidden
		#card-portada
			margin -200px 0 10px
			width 90%
			.v-image__image
				background-size cover 
		.head-portada__imagen
			.v-image
				background #fff
			.v-image__image
				background-position top center !important
				background-size contain 
		.head-portada__lateral
			margin-right 0

@media (min-width 960px)
	#portada
		min-height 1200px
		overflow initial
		#card-portada
			margin -300px 100px 10px auto
			width 750px
			.card-portada__img
				height 420px
		.head-portada__imagen
			.v-image__image
				background-size cover !important
		.v-card-text-web
			margin -100px 0 0 -100px
			width 800px
			.v-card__text
				font-size 20px
				padding 40px
</style>