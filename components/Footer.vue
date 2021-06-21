<template>
  <div id="footer">
		<Marquesina texto="Contáctenos para más información" color="#fff"></Marquesina>
		<v-footer class="pt-0">
			<v-container class="pt-0">
				<v-row>
					<v-col cols="12" class="pa-0">
						<v-row>
							<v-col cols="12" sm="6" lg="3" class="pt-0">
								<h2>FITNESS VITA</h2>
								<v-list>
									<v-list-item class="pa-0" cols="12" md="4" v-for="(dato, index) in datos" :key="index">
										<v-icon class="mr-2">{{ dato.icono }}</v-icon>
										<div v-html="dato.texto"></div>
									</v-list-item>
								</v-list>
								<v-list class="d-flex">
									<v-list-item v-for="(red, index) in redesSociales" :key="index">
										<a :href="red.ruta" target="_blank">
											<v-img :src="red.icono" height="50" width="50" :alt="red.nombre"></v-img>
										</a>
									</v-list-item>
								</v-list>
							</v-col>
							<v-col cols="12" sm="6" lg="3">
								<h2>MAPA DEL SITIO</h2>
								<v-list>
									<v-list-item v-for="(mb, index) in menuBasico" :key="index" class="pa-0">
										<n-link :to="mb.link">
											<v-list-item-content>
												<v-list-item class="grow">
													<v-list-item-content>
														<v-list-item-title>{{ mb.name }}</v-list-item-title>
													</v-list-item-content>
												</v-list-item>
											</v-list-item-content>
										</n-link>
									</v-list-item>
								</v-list>
							</v-col>
							<v-col cols="12" sm="6" lg="3">
								<h2>SERVICIOS</h2>
								<v-list>
									<v-list-item v-for="(listado, index) in listadoServicio" :key="index" class="pa-0">
										<n-link :to="`/asesorias/${listado.slug}`">
											<v-list-item-content>
												<v-list-item class="grow">
													<v-list-item-content>
														<v-list-item-title>{{ listado.name }}</v-list-item-title>
													</v-list-item-content>
												</v-list-item>
											</v-list-item-content>
										</n-link>
									</v-list-item>
								</v-list>
							</v-col>
							<v-col cols="12" sm="6" lg="3">
								<h2>MEDIOS DE PAGO</h2>
								<div class="d-flex">
									<v-img src="/images/logos/webpay.png" alt="Webpay" width="200px" contain></v-img>
								</div>
							</v-col>
						</v-row>
					</v-col>
					<v-col cols="12" class="pa-0">
						<hr>
					</v-col>
					<v-col cols="12" class="d-flex justify-center pb-0">
						<div class="footer__footer d-flex align-center">
							<v-img src="/images/logos/fv_logo_solo_texto_bl@2x.png" alt="Logo Fitness Vita" width="150px" class="mr-5"></v-img>
							<span>
								&copy; 2020 Fitness Vita. Todos los derechos reservados.
							</span>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</v-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Contacto from "~/components/Contacto"
import Marquesina from "~/components/Marquesina"

export default {
	components:{
		Contacto,
		Marquesina
	},
	data: () => ({
		datos: [
			{
				icono: 'mdi-map-marker-outline',
				texto: 'Viña del Mar, Chile'
			},
			{
				icono: 'mdi-cellphone-android',
				texto: '<a href="tel:+56984463216">+56 9 84463216</a>'
			},
			{
				icono: 'mdi-email-outline',
				texto: '<a href="mailto:contacto@fitnessvita.cl">contacto@fitnessvita.cl</a>'
			}
		],
		menuBasico: [
      {
        name: 'Inicio',
        link: '/',
        image: '/images/logos/fv_hojas_bl@1x.png'
      },
      {
        name: 'Servicios',
        link: '/asesorias',
        image: '/images/logos/fv_hojas_ng@1x.png'
      },
      {
        name: 'Nosotros',
        link: '/nosotros',
        image: '/images/logos/fv_musculo_bl@1x.png'
      }
    ],
	}),
	computed:{
		...mapGetters(['redesSociales','listadoServicio','extension'])
	}
}
</script>

<style lang="stylus">
#footer
	background #1196B9
	a, .v-list-item__title
		color #fff
		&:hover
			text-decoration underline
	hr
		color rgba(255,255,255,.4)
	.footer-social
		.v-icon
			font-size 3rem
	.footer__footer
		flex-direction column
		span
			padding 10px 0
			text-align center
		@media (min-width 600px)
			flex-direction row
			padding 0
			text-align left
	.v-footer
		background #1196B9
		color #fff
		.v-icon
			color #fff
	.v-list
		background transparent
		.v-list-item
			color #fff !important
			padding 0
			.v-list-item__content
				padding 0
</style>