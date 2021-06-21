<template>
  <client-only>
    <v-btn :class="clases" text nuxt :data-text="texto" class="btn_basico" :style="cssProps">
      {{ texto }}
    </v-btn>
  </client-only>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      default: 'Enviar'
    },
    clases: {
      type: String,
      default: 'pa-0'
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    cssProps() {
      return {
        '--color-borde': this.color
      }
    }
  }
}
</script>

<style lang="stylus">
.btn_basico
  position relative
  &:hover::before
    max-width 100% !important
    opacity 1 !important
  &::before
    position absolute
    opacity initial
    top 0
    left 0
    width 100%
    overflow hidden
    white-space nowrap
    content attr(data-text)
    -webkit-transition max-width .8s cubic-bezier(.22,.61,.36,1)
    transition max-width .8s cubic-bezier(.22,.61,.36,1)
    -webkit-text-fill-color var(--color-borde)
    max-width 0
    font-size 2rem
    line-height 1.15
    background transparent
  .v-btn__content
    -webkit-text-fill-color transparent
    -webkit-text-stroke-color var(--color-borde)
    -webkit-text-stroke-width .02em
    color transparent
    font-size 2rem
    line-height 1
</style>