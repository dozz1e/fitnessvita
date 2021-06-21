<template>
  <div>
    <Portada></Portada>
    <Marquesina texto="bodybuilding.strength.fitness.vida.salud.kinesiología."></Marquesina>
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12">
          <Quienes></Quienes>
          <Servicios></Servicios>
          <MenuServicios></MenuServicios>
          <Profesores></Profesores>
        </v-col>
        <!-- <v-col cols="12" class="pa-0">
          <v-row>
            <v-col cols="12" sm="6">
              <Hechos></Hechos>
            </v-col>
          </v-row>
        </v-col> -->
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import Portada from "~/components/Portada"
import Servicios from "~/components/Servicios"
import Quienes from "~/components/Quienes"
import Profesores from "~/components/Profesores"
import Hechos from "~/components/Hechos"
import Marquesina from "~/components/Marquesina"
import Footer from "~/components/Footer"
import Contacto from "~/components/Contacto"

export default {
  components: {
    Portada,
    Marquesina,
    Servicios,
    Quienes,
    Profesores,
    Hechos,
    Contacto,
    Footer
  },
  data: () => ({}),
  head() {
		return {
      meta: [
        { hid: 'description', name: 'description', content: 'Entrenamiento y nutrición. Profesionales calificados con especializaciones en actividad física y salud. Le apoyaremos durante el proceso.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fitnessvita.cl/' },
        { property: 'og:site_name', content: 'Fitness Vita' },
        { property: 'og:title', content: 'Fitness Vita | Entrenamiento y Nutrición, Chile' },
        { property: 'og:image', content: 'https://www.fitnessvita.cl/images/logos/fv_logo.png' },
        { property: 'og:description', content: 'Entrenamiento y nutrición. Profesionales calificados con especializaciones en actividad física y salud. Le apoyaremos durante el proceso.' }
      ],
		}
  }
}
</script>
