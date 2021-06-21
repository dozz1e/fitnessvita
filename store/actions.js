export default {
	async listaServicios({commit}) {
		const posts = await this.$axios.$get('https://fitnessvita.cl/servicios/wp-json/wc/v3/products?consumer_key=ck_bfc021e83f8f78f9cce419952b852f26035d6be8&consumer_secret=cs_a466b1830c93c6d27a2896d8dc0d6d1fe312a328')
		commit('SET_SERVICIOS', posts)
	},
	async buscarServicio({commit}, idServicio) {
		const post = await this.$axios.$get(`https://fitnessvita.cl/servicios/wp-json/wc/v3/products/?slug=${idServicio}&consumer_key=ck_bfc021e83f8f78f9cce419952b852f26035d6be8&consumer_secret=cs_a466b1830c93c6d27a2896d8dc0d6d1fe312a328`)
		commit('SET_SERVICIO', post[0])
		if(post[0] != null){
			const post2 = await this.$axios.$get(`https://fitnessvita.cl/servicios/wp-json/wc/v3/products/${post[0].id}/variations?consumer_key=ck_a6d8b0415ae751374ca2487084e4cf0ed02d4c88&consumer_secret=cs_ff8e5620cac73a2063aaeb62f419f0134f795ccc`)
			
			commit('SET_VARIACIONES', Object.values(post2))
		}
	},
	tamanoWindow({commit}, anchoWindow){
		commit('SET_ANCHO', anchoWindow)
	},
	colorLogo({commit}, color){
		commit('SET_COLOR_LOGO', color)
	},
	quitarServicio({commit}){
		commit('SET_SERVICIO', null)
	},
	setIOS({commit}){
		const aux = ['iPad Simulator','iPhone Simulator','iPod Simulator','iPad','iPhone','iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
		let ext = 'jpg'
		if(!aux)
			ext = 'webp'
		commit('SET_EXTENSION', ext)
	}
}