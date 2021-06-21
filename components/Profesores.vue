<template>
  <v-container class="profesores mt-5">
    <h2 class="h2-titulo">NUESTRO EQUIPO</h2>
    <v-row>
      <v-col cols="12" lg="4" :offset-sm="index === 3 ? 2 : 0" v-for="(profesor, index) in profesores" :key="index">
        <v-card height="430">
          <v-row class="ma-0">
            <v-col cols="5" class="pa-0">
              <v-img :src="`/images/profesores/${profesor.image}.${extension}`" height="430" :alt="profesor.name"></v-img>
            </v-col>
            <v-col cols="7" class="pa-5">
              <v-card-text class="pa-0">
                <h2 class="mb-5">{{ profesor.name }}</h2>
                <div class="text--primary" v-html="profesor.info"></div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data: () => ({
    profesores: [
      {
        name: 'Rodrigo Arro',
        info: `<ul>
          <li><strong>Licenciado en educación, Profesor de Educación Física</strong></li>
          <li>Pontificia Universidad Católica De Valparaíso</li>
          <li><strong>Certificación Internacional Entrenamiento Funcional Nivel Coach</strong></li>
          <li>Funcional Training High Performance</li>
        </ul>`,
        image: 'rodrigo'
      },
      {
        name: 'Katherine Pavez',
        info: `<ul>
          <li><strong>Técnico superior en Preparación Física</strong></li>
          <li>DUOC UC</li>
          <li><strong>Licenciada en Nutrición y Dietética</strong></li>
          <li>Universidad Tecnológica de Chile, INACAP</li>
        </ul>`,
        image: 'katherine'
      },
      {
        name: 'Felipe Becerra Urbina',
        info: `<ul>
          <li><strong>Licenciado en educación, profesor de Educación Física</strong></li>
          <li>Universidad de Playa Ancha</li>
          <li><strong>Diplomado en Ciencias de la Actividad Física</strong></li>
          <li>Universidad de Chile</li>
          <li><strong>Diplomado en Fisiología del Ejercicio</strong></li>
          <li>Universidad Finis Terrae</li>
          <li><strong>Magister Entrenamiento Deportivo</strong></li>
          <li>Universidad Mayor</li>
        </ul>`,
        image: 'felipe'
      },
      {
        name: 'Adolfo Leighton',
        info: `<ul>
          <li><strong>Licenciado en Kinesiología</strong></li>
          <li>Pontificia Universidad Católica De Valparaíso</li>
          <li><strong>Atleta Federado Powerlifting</strong></li>
          <li>FECHIPO</li>
          <li><strong>Especialista en entrenamiento de fuerza</strong></li>
          <li>FECHIPO</li>
        </ul>`,
        image: 'adolfo'
      },
      {
        name: 'Ignacio Salazar',
        info: `<ul>
          <li><strong>Licenciado en educación, Profesor de Educación Física</strong></li>
          <li>Universidad Andrés Bello</li>
          <li><strong>Especialista en entrenamiento deportivo</strong></li>
          <li>COCH</li>
          <li><strong>Certificación entrenamiento funcional</strong></li>
          <li>Potencia muscular capacitaciones</li>
          <li><strong>Profesor Staff</strong></li>
          <li>Gimnasio Sportlife</li>
          <li><strong>Clases dirigidas</strong></li>
          <li>Entrenamiento funcional – TrX</li>
        </ul>`,
        image: 'ignacio'
      }
    ]
  }),
  computed:{
    ...mapGetters(['extension']),
  },
}
</script>

<style lang="stylus">
.profesores
  ul
    padding 0
  .h2-titulo
    background url('/images/logos/fondo-titulo.png'),#1196B9
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    color #fff
    text-shadow 1px 1px 1px #121212
    padding 5px 10px
  .v-card__text
    h2
      font-family 'Oswald', sans-serif
      text-transform uppercase
</style>