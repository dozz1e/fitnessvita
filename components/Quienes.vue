<template>
  <div id="quienes">
    <v-row class="px-2 ma-0">
      <v-col cols="12" :md="ancho" class="pa-0">
        <v-row class="pa-0 ma-0">
          <v-col cols="8" class="pa-0">
            <h3 class="my-4" v-html="titulo"></h3>
          </v-col>
          <v-col cols="4" class="pa-0"></v-col>
          <v-col cols="3" class="pa-0"></v-col>
          <v-col cols="9" class="pa-0">
            <div class="ma-4" v-html="texto"></div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: `Bienvenido a Fitness Vita<br />¿Por qué elegirnos?`
    },
    texto: {
      type: String,
      default: `Contamos con profesionales formados en instituciones tradicionales con amplia trayectoria y prestigio a nivel nacional, destacan entre nuestros colaboradores un acentuado espíritu critico que los lleva a estar cuestionando constantemente su quehacer en busca de mejoras.`
    },
    ancho:{
      type: String,
      default: '10'
    }
  }
}
</script>

<style lang="stylus">
#quienes
  h3
    font-size 2rem
    line-height 1
</style>