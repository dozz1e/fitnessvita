<template>
  <div id="asesorias">
    <v-row>
      <v-col cols="12" sm="10" class="pa-0">
        <v-row>
          <v-col cols="12" class="pa-0">
            <Flotante arriba="40px" der="-60px" ancho="120px" color="bl" class="hidden-sm-and-up"></Flotante>
            <div class="portada">
              <v-img :src="`/images/horizontal/1.${extension}`" :srcset="`/images/horizontal/1@1x.${extension} 600w, /images/horizontal/1@2x.${extension} 960w, /images/horizontal/1@3x.${extension} 1264w`" height="400" class="servicio-portada__img" alt="NUESTROS SERVICIOS" gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,0)"></v-img>
            </div>
          </v-col>
          <v-col cols="12">
            <v-container class="pt-0">
              <v-row>
                <v-col cols="12" class="pt-0">
                  <MenuServicios></MenuServicios>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="2" class="head-portada__lateral pa-0">
				<Lateral texto="#NUESTROS-SERVICIOS"></Lateral>
			</v-col>
    </v-row>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuServicios from "~/components/MenuServicios"
import Footer from "~/components/Footer"

export default {
  components:{
    MenuServicios,
    Footer
  },
  computed:{
    ...mapGetters(['extension']),
  },
  head() {
		return {
			title: 'Servicios Fitness Vita',
      meta: [
        { hid: 'description', name: 'description', content: 'Entrenamiento y nutrición. Profesionales calificados con especializaciones en actividad física y salud. Le apoyaremos durante el proceso.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fitnessvita.cl/asesorias' },
        { property: 'og:site_name', content: 'Servicios Fitness Vita' },
        { property: 'og:title', content: 'Servicios Fitness Vita' },
        { property: 'og:image', content: 'https://fitnessvita.cl/images/horizontal/1.jpg' },
        { property: 'og:description', content: 'Entrenamiento y nutrición. Profesionales calificados con especializaciones en actividad física y salud. Le apoyaremos durante el proceso.' }
      ],
		}
  }
}
</script>

<style lang="stylus">
#asesorias
  margin-top 50px
  .head-portada__lateral
    margin-top -38px
    #lateral
      margin-left -20px
.head-asesorias__texto
  font-family 'Oswald', sans-serif
  font-size 5.6rem
  position absolute
  right 0
  text-transform uppercase
  top 80px
  transform rotate(90deg)
  white-space nowrap
  -webkit-text-stroke-color #000
  -webkit-text-fill-color transparent
  -webkit-text-stroke-width .02em

</style>