export default {
    listadoServicio: state => state.servicios,
    soloServicio: state => state.servicio,
    conteoServicio: state => state.servicios.length,
    anchoVentana: state => state.ancho,
    redesSociales: state => state.socials,
    logoColor: state => state.colorLogo,
    extension: state => state.extension,
    variaciones: state => state.variaciones
}