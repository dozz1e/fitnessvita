export default () => ({
	namespaced: true,
  servicios: [],
	servicio: null,
	ancho: 0,
	extension: 'jpg',
	colorLogo: 'ng',
	variaciones: [],
	socials: [
		{
			icono: '/images/social/facebook.png',
			ruta: 'https://www.facebook.com/fitvitacl',
			nombre: 'Facebook'
		},
		{
			icono: '/images/social/instagram.png',
			ruta: 'https://www.instagram.com/fitvitacl',
			nombre: 'Instagram'
		},
		{
			icono: '/images/social/whatsapp.png',
			ruta: 'https://api.whatsapp.com/send?phone=56984463216',
			nombre: 'Whatsapp'
		}
	]
})