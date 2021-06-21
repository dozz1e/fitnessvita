<template>
  <div id="nosotros">
    <v-row>
      <v-col cols="12" sm="10" class="pa-0">
        <v-row>
          <v-col cols="12" class="pa-0">
            <Flotante arriba="40px" der="-60px" ancho="120px" color="bl" class="hidden-sm-and-up"></Flotante>
            <div class="portada">
              <v-img :src="`/images/horizontal/5.${extension}`" :srcset="`/images/horizontal/5@1x.${extension} 600w, /images/horizontal/5@2x.${extension} 960w, /images/horizontal/5@3x.${extension} 1264w`" height="400" class="servicio-portada__img" alt="NUESTROS SERVICIOS" gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,0)"></v-img>
            </div>
          </v-col>
          <v-col cols="12">
            <Profesores></Profesores>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="2" class="head-portada__lateral pa-0">
				<Lateral texto="#NOSOTROS"></Lateral>
			</v-col>
    </v-row>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Profesores from "~/components/Profesores"
import Footer from "~/components/Footer"

export default {
  components:{
    Profesores,
    Footer
  },
  data: () => ({
    profesores: [
      {
        name: 'Roberto',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac elit enim. Phasellus faucibus, urna venenatis efficitur sollicitudin, diam nibh consectetur neque, sed malesuada lectus leo porta augue. Nullam vel diam mauris. Morbi vestibulum maximus fringilla. Sed fringilla lacinia est, at convallis augue volutpat et. Quisque in neque augue. Praesent pellentesque hendrerit quam, non varius leo consectetur vel. Etiam quis augue volutpat, sollicitudin elit vitae, vestibulum elit. ',
        image: '2'
      },
      {
        name: 'Francisca',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac elit enim. Phasellus faucibus, urna venenatis efficitur sollicitudin, diam nibh consectetur neque, sed malesuada lectus leo porta augue. Nullam vel diam mauris. Morbi vestibulum maximus fringilla. Sed fringilla lacinia est, at convallis augue volutpat et. Quisque in neque augue. Praesent pellentesque hendrerit quam, non varius leo consectetur vel. Etiam quis augue volutpat, sollicitudin elit vitae, vestibulum elit. ',
        image: '1'
      },
      {
        name: 'Elías',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac elit enim. Phasellus faucibus, urna venenatis efficitur sollicitudin, diam nibh consectetur neque, sed malesuada lectus leo porta augue. Nullam vel diam mauris. Morbi vestibulum maximus fringilla. Sed fringilla lacinia est, at convallis augue volutpat et. Quisque in neque augue. Praesent pellentesque hendrerit quam, non varius leo consectetur vel. Etiam quis augue volutpat, sollicitudin elit vitae, vestibulum elit. ',
        image: '3'
      }
    ]
  }),
  computed:{
    ...mapGetters(['extension']),
  },
  head() {
		return { 
			title: 'Nosotros | Fitness Vita',
			meta: [
        { hid: 'description', name: 'description', content: 'Entrenamiento y nutrición. Profesionales calificados con especializaciones en actividad física y salud. Le apoyaremos durante el proceso.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.fitnessvita.cl/nosotros' },
        { property: 'og:site_name', content: 'Profesores Fitness Vita' },
        { property: 'og:title', content: 'Profesores Fitness Vita' },
        { property: 'og:image', content: 'https://fitnessvita.cl/images/horizontal/5.jpg' },
        { property: 'og:description', content: 'Entrenamiento y nutrición. Profesionales calificados con especializaciones en actividad física y salud. Le apoyaremos durante el proceso.' }
      ],
		}
  }
}
</script>

<style lang="stylus">
#nosotros
  margin-top 50px
  .profesores
    .v-image
      border-radius 4px 0 0 4px
  .head-portada__lateral
    margin-top -38px
    #lateral
      margin-left -20px
</style>