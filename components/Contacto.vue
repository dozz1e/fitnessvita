<template>
	<div id="contacto">
		<v-container>
			<v-form ref="form" v-model="valid" lazy-validation class="px-5 pb-2">
				<v-text-field dark	v-model="name_contacto" :rules="nameRules" label="Nombre" required></v-text-field>
				<v-text-field dark	v-model="email_contacto" :rules="emailRules" label="Correo" required></v-text-field>
				<v-text-field dark v-model="phone_contacto" label="Teléfono"></v-text-field>
				<v-textarea dark v-model="texto_contacto" label="Escriba su mensaje"></v-textarea>
				<v-checkbox dark v-model="checkbox_contacto" :rules="[v => !!v || 'Debe hacer click para continuar']" label="No soy un robot" required></v-checkbox>
				<v-btn @click="validate" dark large>Enviar Mensaje</v-btn>
			</v-form>
		</v-container>
	</div>
</template>

<script>
import Marquesina from "~/components/Marquesina"

export default {
	components:{
		Marquesina
	},
	data: () => ({
		valid: true,
		name_contacto: '',
		nameRules: [
			v => !!v || 'El Nombre es requerido'
		],
		email_contacto: '',
		emailRules: [
			v => !!v || 'El Correo es requerido',
			v => /.+@.+\..+/.test(v) || 'El Correo debe ser válido',
		],
		phone_contacto: '',
		texto_contacto: '',
		checkbox_contacto: false,
	}),

	methods: {
		validate () {
			this.$refs.form.validate()
		}
	},
}
</script>

<style lang="stylus">
#contacto
	background #1196B9
	.v-btn
		background rgba(18,18,18,.5)
	@media (min-width 600px)
		height 630px
</style>