<template>
  <div id="servicios">
    <v-row class="pa-0 ma-0">
      <v-col cols="12" class="pa-0">
        <div class="servicios__images">
          <v-row class="pa-0 ma-0">
            <v-col cols="12" sm="2" class="hidden-xs-only"></v-col>
            <v-col cols="8" class="pa-0 hidden-sm-and-up servicios_images-mobile">
              <Flotante ancho="100px" color="ng" der="-50px" arriba="-50px" class="hidden-sm-and-up"></Flotante>
              <v-img :src="`/images/vertical/4.${extension}`" :srcset="`/images/vertical/4@1x.${extension} 600w, /images/vertical/4@2x.${extension} 960w, /images/vertical/4@3x.${extension} 1264w`" class="servicios__img" width="100%" :height="alto">
              </v-img>
            </v-col>
            <v-col cols="12" sm="3" class="pa-0 hidden-xs-only">
              <v-img :src="`/images/vertical/4.${extension}`" :srcset="`/images/vertical/4@1x.${extension} 600w, /images/vertical/4@2x.${extension} 960w, /images/vertical/4@3x.${extension} 1264w`" class="servicios__img" :height="alto"></v-img>
            </v-col>
            <v-col cols="12" sm="5" class="hidden-xs-only pt-0 servicios_images-grande">
              <Flotante ancho="100px" color="ng" der="-40px" arriba="-72px" class="hidden-xs-only"></Flotante>
              <v-img :src="`/images/vertical/1.${extension}`" :srcset="`/images/vertical/1@1x.${extension} 600w, /images/vertical/1@2x.${extension} 960w, /images/vertical/1@3x.${extension} 1264w`" class="servicios__img2" :height="alto + 50"></v-img>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Flotante from "./Flotante"

export default {
  components:{
    Flotante
  },
  props: {
    imagen: {
      type: String,
      default: 'vertical/4'
    }
  },
  computed:{
    ...mapGetters(['extension','anchoVentana']),
    alto(){
      let h = 0
      if(this.anchoVentana < 600)
        h = 400
      else
        h = 500
      return h
    }
  }
}
</script>

<style lang="stylus">
  #servicios
    margin-top 50px
    position relative !important
    .servicios__images
      position relative
      width 100%
      .servicios_images-mobile,.servicios_images-grande
        position relative
      .servicios__img2
        margin-top -25px
</style>