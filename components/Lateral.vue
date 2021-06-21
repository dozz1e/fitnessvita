<template>
  <div id="lateral">
    {{ texto }}
  </div>
</template>

<script>
export default {
  props:{
    texto: {
			type: String,
			default: ''
		}
  }
}
</script>

<style lang="stylus">
#lateral
  font-family 'Oswald', sans-serif
  font-size 2.8rem
  margin-top 10px
  text-transform uppercase
  transform rotate(90deg)
  white-space nowrap
  -webkit-text-stroke-color #000
  -webkit-text-fill-color transparent
  -webkit-text-stroke-width .02em
  transform-origin left top 0
  z-index 4
  @media (min-width 600px)
    font-size 4.5rem
    transform-origin initial
  @media (min-width 960px)
    font-size 5.5rem
    margin-top 50px
</style>