<template>
  <div id="menu-web">
    <v-list class="d-flex">
      <v-list-item v-for="(menu, index) in menus" :key="index" link :href="menu.link">
        <v-list-item-content>
          {{ menu.nombre }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    menus: [
      {
        nombre: 'INICIO',
        link: '/'
      },
      {
        nombre: 'SERVICIOS',
        link: '/asesorias'
      },
      {
        nombre: 'NOSOTROS',
        link: '/nosotros'
      }
    ]
  })
}
</script>

<style lang="stylus">
#menu-web
  a 
    .v-list-item__content
      color #1976d2
      font-size 18px
  .v-list
    background transparent
</style>