<template>
  <div v-if="soloServicio != null" id="servicio">
    <v-row no-gutters>
      <v-col cols="12" sm="10">
        <Flotante arriba="20px" der="-60px" ancho="120px" color="ng" class="hidden-sm-and-up"></Flotante>
        <div class="portada">
          <h1 v-html="textoTitulo" class="px-4"></h1>
          <v-img :src="`/images/${ soloServicio.slug }/1.${extension}`" :srcset="`/images/${ soloServicio.slug }/1@1x.${extension} 600w, /images/${ soloServicio.slug }/1@2x.${extension} 960w, /images/${ soloServicio.slug }/1@3x.${extension} 1264w`" height="400" class="servicio-portada__img" :alt="soloServicio.name" gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,0)"></v-img>
        </div>
      </v-col>
      <v-col cols="12" sm="2" class="hidden-xs-only">
        <Lateral :texto="barraLateral"></Lateral>
      </v-col>
      <v-col cols="12">
        <div class="servicio__contenido">
          <v-container class="px-lg-5">
            <v-row class="px-lg-5">
              <v-col cols="12" sm="10">
                <v-card>
                  <v-card-text>
                    <div class="text--primary" v-html="soloServicio.description"></div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="10" id="planes-servicio">
                <h2>Encuentra el plan que deseas, al mejor precio.</h2>
                <v-container class="pa-0">
                  <v-row>
                    <v-col cols="12" sm="4" v-for="(plan, index) in variaciones" :key="index">
                      <v-card>
                        <header class="planes-servicio__head">
                          {{ plan.attributes[0].name }}
                        </header>
                        <v-card-text class="pa-3">
                          <h2 class="planes-servicio__titulo">
                            {{ plan.attributes[0].option }}
                          </h2>
                          <div v-html="plan.description" class="planes-servicio__desc"></div>
                          <div class="planes-servicio__price">
                            {{ moneda(plan.price) }} CLP
                          </div>
                          <v-divider></v-divider>
                          <v-card-actions class="px-0 pb-0 planes-servicio__action">
                            <v-btn x-large :href="`https://fitnessvita.cl/servicios/compra-servicio/?add-to-cart=${plan.id}`" width="100%">
                              CONTRATAR PLAN
                            </v-btn>
                          </v-card-actions>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
              <v-col cols="12">
                <Quienes :titulo="soloServicio.datos_pregunta" :texto="soloServicio.datos_respuesta" ancho="12"></Quienes>
              </v-col>
            </v-row>
          </v-container>
          <v-col cols="12" class="pa-0">
            <Marquesina texto="bodybuilding.strength.fitness.vida.salud.kinesiología."></Marquesina>
          </v-col>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col cols="12" sm="6" class="pa-0">
                    <Dichos></Dichos>
                  </v-col>
                  <v-col cols="12" sm="6" class="pa-0 d-flex justify-center">
                    <div class="py-5 servicio__image2">
                      <Flotante arriba="-40px" der="-60px" ancho="120px" color="ng"></Flotante>
                      <v-img :src="`/images/${ soloServicio.slug }/2.${extension}`" :srcset="`/images/${ soloServicio.slug }/2@1x.${extension} 600w, /images/${ soloServicio.slug }/2@2x.${extension} 960w, /images/${ soloServicio.slug }/2@3x.${extension} 1264w`" height="500" width="100%" :alt="`${soloServicio.name}2`"></v-img>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Flotante from "~/components/Flotante"
import Quienes from "~/components/Quienes"
import Dichos from "~/components/Dichos"
import Marquesina from "~/components/Marquesina"
import Footer from "~/components/Footer"
import Lateral from "~/components/Lateral"

export default {
  components:{
    Flotante,
    Quienes,
    Dichos,
    Marquesina,
    Lateral,
    Footer
  },
  transition: 'intro',
  data: () => ({
    plans:[
      {
        name: "MENSUAL",
        link: "https://fitnessvita.cl/servicios/compra-servicio/?add-to-cart=55",
        price: "100"
      },
      {
        name: "SEMESTRAL",
        link: "https://fitnessvita.cl/servicios/compra-servicio/?add-to-cart=56",
        price: "500"
      },
      {
        name: "ANUAL",
        link: "https://fitnessvita.cl/servicios/compra-servicio/?add-to-cart=57",
        price: "800"
      }
    ]
  }),
  created(){
    this.quitarServicio()
    this.buscarServicio(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['soloServicio','extension','variaciones']),
    textoTitulo(){
      let texto = this.soloServicio.name.split(' ')
      let titulo = texto[0]
      switch(texto.length){
        case 2:
          titulo = `${titulo}<br /><span>${texto[1]}</span>`
          break
        case 3:
          titulo = `${titulo}<br /><span>${texto[1]} ${texto[2]}</span>`
          break
        case 4:
          titulo = `${texto[1]}<br /><span>${texto[2]} ${texto[3]}</span>`
          break
      }
      return titulo
    },
    barraLateral(){
      let aux = ''
      if(this.soloServicio != null)
        aux = `#${this.soloServicio.slug}`
      return aux
    },
    nombrePagina(){
      let aux = ''
      if(this.soloServicio != null)
        aux = this.soloServicio.name
      return aux
    },
    descripcionPagina(){
      let aux = ''
			if(this.soloServicio != null)
				aux = this.soloServicio.yoast_meta.yoast_wpseo_metadesc
			return aux
    },
    tituloPagina(){
      let aux = ''
			if(this.soloServicio != null)
        aux = this.soloServicio.yoast_meta.yoast_wpseo_title
      return aux
    },
    imagenPagina(){
      let aux = ''
      if(this.soloServicio != null)
        aux = `https://www.fitnessvita.cl/images/${this.soloServicio.slug}/1.jpg`
      return aux
    },
    urlPagina(){
      let aux = ''
      if(this.soloServicio != null)
        aux = `https://www.fitnessvita.cl/asesorias/${this.soloServicio.slug}`
      return aux
    },
    planes(){
      if(this.soloServicio != null)
        this.buscarVariaciones(this.soloServicio.id)
      return false
    },
  },
  methods: {
    ...mapActions(['buscarServicio','quitarServicio']),
    moneda(valor){
      const formatterPeso = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
      })
      return formatterPeso.format(valor)
    }
  },
  head() {
		return {
			title: this.tituloPagina,
      meta: [
        { hid: 'description', name: 'description', content: this.descripcionPagina },
        { property: 'og:type', content: 'og:product' },
        { property: 'og:url', content: this.urlPagina },
        { property: 'og:site_name', content: 'Servicios Fitness Vita' },
        { property: 'og:title', content: this.tituloPagina },
        { property: 'og:image', content: this.imagenPagina },
        { property: 'og:description', content: this.descripcionPagina },
        { property: 'product:plural_title', content: this.nombrePagina },
        { property: 'product:price:currency', content: 'CLP' }
      ],
		}
  }
}
</script>

<style lang="stylus">
#servicio
  position relative
  h1
    -webkit-text-fill-color transparent
    -webkit-text-stroke-color #121212
    -webkit-text-stroke-width .02em
    color transparent
    font-size 55px
    line-height 1
    margin-top -58px
    position absolute
    z-index 1
    span 
      -webkit-text-fill-color initial
      -webkit-text-stroke-width 0
      color #fff !important
      text-shadow 1px 1px 1px #000
    @media (min-width 960px)
      font-size 5rem
      margin-top -77px
  h2
    margin-bottom 10px
  .clases-contenido
    margin-top 10px
    .v-card
      border 1px solid rgba(17,150,185,.1)
      border-left 5px solid #1196B9
      display flex
      .v-card__text
        display flex
        font-size 18px
  #planes-servicio
    .planes-servicio__head
      border-bottom 1px solid rgba(0,0,0,.1)
      padding 5px 12px
    .planes-servicio__price
      color #1196B9
      font-size 32px
      font-weight bold
      margin-bottom 20px
      text-align center
    .planes-servicio__desc
      font-size 16px
      line-height 1.2
      padding 20px 0
    .planes-servicio__titulo
      font-size 32px
    .v-btn
      background #1196B9
      color #fff
    .v-card
      border-bottom 5px solid #1196B9
  .servicio__contenido
    margin-top -100px
  .servicio__image2
    margin-top 50px
    position relative
    width 300px
  .text--primary
    font-size 16px
    line-height 1.5
    p
      margin 0
      &:first-child
        font-size 18px
        font-weight bold
      &:last-child
        margin-bottom 10px 
  .portada
    margin-top 13rem
</style>