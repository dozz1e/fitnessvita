<template>
  <div id="hechos">
    <v-card flat dark id="cardFooter">
			<div class="footerHeader">
        <v-img :src="`/images/horizontal/2.${extension}`" :srcset="`/images/horizontal/2@1x.${extension} 600w, /images/horizontal/2@2x.${extension} 960w, /images/horizontal/2@3x.${extension} 1264w`" height="300" alt="Hechos Fitness Vita"></v-img>
        <v-img src="/images/logos/fv_logo.png" srcset="/images/logos/fv_logo@1x.png 600w, /images/logos/fv_logo@2x.png 960w" class="cardFooter__logo" alt="Logo Fitness Vita"></v-img>
			</div>
			<v-card-text>
				<v-container>
					<h2><span>solo con</span></h2>
					<h2>hechos reales</h2>
					<p class="py-5">
						Nuestro equipo se caracteriza por comprometerse con cada persona que recibimos, poniendo a su disposición toda su experiencia y dominio técnico al servicio de los objetivos propuestos.
					</p>
				</v-container>
			</v-card-text>
  	</v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed:{
    ...mapGetters(['extension'])
  }
}
</script>

<style lang="stylus">
#hechos
  #cardFooter
    background #222 !important
    border-radius 0
    h2
      font-size 3rem
      line-height 1
      color white
      span
        -webkit-text-fill-color transparent
        -webkit-text-stroke-color #fff
        -webkit-text-stroke-width .02em
        color transparent
    .footerHeader
      position relative
      .cardFooter__logo
        bottom -12px
        position absolute
        right 1rem
        width 200px
    @media (min-width 600px)
      height 630px
</style>