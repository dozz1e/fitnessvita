<template>
  <v-app>
    <div>
      <v-navigation-drawer v-model="drawer" width="26rem" app id="menu-mobile" disable-resize-watcher>
        <header class="d-flex align-center">
          <div id="cerrar-mobile" @click="drawer = false" class="d-flex px-5">
            <v-img src="/images/logos/fv_logo_solo_texto_bl@2x.png" alt="Banner Fitness Vita" width="20"></v-img>
            <v-spacer></v-spacer>
            <v-icon class="white--text pa-0">mdi-close</v-icon>
          </div>
        </header>
        <div class="menu-mobile">
          <div class="py-3">
            <v-list>
              <v-list-item v-for="(mb, index) in menuBasico" :key="index">
                <n-link :to="mb.link">
                  <v-list-item-content>
                    <v-list-item class="grow">
                      <v-list-item-avatar>
                        <v-img :src="mb.image" :alt="mb.name"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>{{ mb.name }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-content>
                </n-link>
              </v-list-item>
            </v-list>
              <hr>
              <h5 class="pl-3">NUESTROS SERVICIOS</h5>
            <v-list>
              <v-list-item v-for="(listado, index) in listadoServicio" :key="index">
                <n-link :to="`/asesorias/${listado.slug}`">
                  <v-list-item-content>
                    <v-list-item class="grow">
                      <v-list-item-avatar>
                        <v-img :src="`/images/${listado.slug}/1@1x.${extension}`" :alt="listado.name"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>{{ listado.name }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-content>
                </n-link>
              </v-list-item>
            </v-list>
            <v-list>
              <v-list-item class="flex-column align-center">
                <ul class="d-flex pa-0">
                  <li v-for="(social, index) in redesSociales" :key="index" class="pa-2">
                    <a :href="social.ruta" target="_blank" @click="drawer = false">
                      <v-img :src="social.icono" height="60" width="60" :alt="social.nombre"></v-img>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li><hr /></li>
                  <li class="white--text">CONTACTO@FITNESSVITA.CL</li>
                </ul>
              </v-list-item>
            </v-list>
          </div>
        </div>
      </v-navigation-drawer>

      <v-app-bar app :hide-on-scroll="hideScroll" dense color="#f5f5f5">
        <v-container class="container-menu-web d-flex align-center">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up" color="#1196B9"></v-app-bar-nav-icon>
          <v-toolbar-title>
            <n-link to ="/">
              <v-img src="/images/logos/fv_logo_solo_texto@2x.png" alt="Banner Fitness Vita" width="150"></v-img>
            </n-link>
          </v-toolbar-title>
          <v-spacer class="hidden-md-and-down"></v-spacer>
          <div class="hidden-md-and-down">
            <v-toolbar-items>
              <MenuWeb></MenuWeb>
            </v-toolbar-items>
          </div>
        </v-container>
      </v-app-bar>

      <v-main>
        <nuxt/>
      </v-main>
      <div>
        <!-- Load Facebook SDK for JavaScript -->
        <div id="fb-root"></div>
          <!-- Your Chat Plugin code -->
        <div class="fb-customerchat"
          attribution=install_email
          page_id="101336855020973"
          logged_in_greeting="Hola!, Te has contactado con Fitness Vita cuéntanos en que podemos ayudarte."
          logged_out_greeting="Hola!, Te has contactado con Fitness Vita cuéntanos en que podemos ayudarte.">
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import MenuWeb from "~/components/MenuWeb"

export default {
  transition: 'intro',
  scrollToTop: true,
  components:{
    MenuWeb
  },
  data: () => ({
    drawer: false,
    offsetTop: 0,
    hideScroll: true,
    menuBasico: [
      {
        name: 'INICIO',
        link: '/',
        image: '/images/logos/fv_hojas_bl@1x.png'
      },
      {
        name: 'SERVICIOS',
        link: '/asesorias',
        image: '/images/logos/fv_hojas_ng@1x.png'
      },
      {
        name: 'NOSOTROS',
        link: '/nosotros',
        image: '/images/logos/fv_musculo_bl@1x.png'
      }
    ]
  }),
  beforeMount(){
    this.setIOS()
  },
  mounted() {
    this.listaServicios()
    this.tamanoWindow(this.anchoVentana)
    window.addEventListener('scroll', this.onScroll)
    this.hideMenu(this.anchoVentana)
  },
  created() {
    this.$vuetify.theme.dark = false
  },
  computed:{
    ...mapGetters(['redesSociales','listadoServicio','logoColor','extension']),
    anchoVentana(){
      return window.innerWidth
    }
  },
  methods: {
    ...mapActions(['listaServicios', 'tamanoWindow','setIOS']),
    onScroll() {
      this.offsetTop = window.scrollY
    },
    hideMenu(ventana){
      if(960 < ventana)
        this.hideScroll = false
    }
  }
}
</script>

<style lang="stylus">
html
  background #e5eaf5
a
  text-decoration none

body
  margin 0 auto
  max-width 1366px
  overflow hidden

h1, h2, h3, h4, h5, h6
  font-family 'Oswald', sans-serif
ul, li
  list-style-type none
  padding 0

.container-menu-web
  padding 0
  @media (min-width 600px)
    padding 12px

.lateralBl
  background #fff

.v-application--wrap, .lateral
  background #e5eaf5

.v-main
  background #e5eaf5 //#f8f8f8
  overflow hidden

#menu-mobile
  background #1196B9
  max-width 100%
  z-index 11
  h5
    color rgba(0,0,0,.4)
  hr
    color rgba(0,0,0,.1)
  .menu-mobile
    display flex
  .v-navigation-drawer__content
    @media (min-width 960px)
      overflow hidden
  .v-list-item
    padding 0 8px
    hr
      color rgba(255,255,255,.2)
    .v-list-item__content
      padding 5px 0
      .v-list-item__title
        color #fff
        font-size 16px
        text-transform uppercase
        text-shadow 1px 1px 1px #121212
#cerrar-mobile
  margin-top 25px
  width 100%
  .v-icon
    padding 0 17px 0 23px
  .v-image__image
    background-size contain
</style>
