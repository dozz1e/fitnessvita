<template>
  <div id="faq">
    <v-card tile flat>
      <v-img :src="`/images/faq/1.${extension}`" :srcset="`/images/faq/1@1x.${extension} 600w, /images/faq/1@2x.${extension} 960w, /images/faq/1@3x.${extension} 1264w`" height="300" class="servicio-portada__img"></v-img>
      <v-card-text>
        <v-container>
          <v-row v-for="index in 2" :key="index">
            <v-col v-if="preguntas[index - 1] != ''">
              <span>{{ preguntas[index - 1] }}</span>
              <p>{{ respuestas[index - 1] }}</p>
              <hr v-if="1 === index" class="separador" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props:['preguntas', 'respuestas'],
  computed:{
    ...mapGetters(['extension'])
  }
}
</script>

<style lang="stylus">
#faq
  margin-top 20px
  .v-card
    background #1196B9
    text-shadow 1px 1px 1px #121212
    span
      color white
      display block
      font-family 'Oswald', sans-serif
      font-size 30px
      line-height 1.2
      width 70%
    p
      color white
      font-size 20px
      margin-bottom 0
      margin-left 30%
      padding 20px 0
    .separador
      color rgba(255,255,255,.3)
      margin-top 20px
</style>