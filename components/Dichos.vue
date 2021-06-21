<template>
  <div id="dichos" class="d-flex justify-center">
    <h2 class="text-center d-flex align-center">{{ dichos[Math.floor((Math.random() * largo) + 1)] }}</h2>
  </div>
</template>

<script>
export default {
  data: () => ({
    dichos: [
      'La motivación es lo que te pone en marcha, y el hábito es lo que hace que sigas',
      'Para tener éxito, en primer lugar, debemos creer que podemos',
      'Da siempre lo mejor de ti. Lo que siembres hoy dará su fruto mañana',
      'No se es un perdedor hasta que se deja de intentarlo',
      'Acepta los retos para así poder sentir la euforia de la victoria',
      'No mires el reloj, haz lo que este hace: seguir adelante',
      'La clave para iniciar algo es dejar de hablar y ponerse a realizar',
      'Los campeones siguen jugando hasta que lo hacen bien',
      'Siempre se puede ser mejor',
      'La calidad no es un acto, sino un hábito',
      'No se puede ganar a la persona que nunca se rinde',
      'Hagas lo que hagas, hazlo intensamente',
      'Si caíste ayer, ponte en pie hoy',
      'Te creas tus oportunidades buscándolas',
      'Llega a merecer tu sueño',
      'Siempre es demasiado pronto para retirarse',
      'El éxito es el único factor motivacional que alguien con carácter necesita',
      'Todo es práctica',
      'No hay sustituto para el trabajo duro',
      'Para ganar se necesita talento, repetir requiere carácter',
      'Toda tarea noble parece imposible en un principio',
      'Si vas paso a paso y con confianza, puedes llegar lejos',
      'Siempre parece imposible, hasta que se hace',
      'Marcarse objetivos es el primer paso para convertir lo invisible en visible',
      'Ve a por ello ahora. El futuro no le es prometido a nadie',
      'Los récords están para ser superados',
      'Cuanto más difícil es la victoria, mayor es la satisfacción de ganar',
      'Persigue una gran meta decisiva con fuerza y determinación',
      'Incluso si caes de cara, sigues moviéndote hacia adelante',
      'Ponte metas altas y no pares hasta llegar a ellas',
      'No se puede poner un límite a nada. Cuanto más se sueña, más lejos se llega',
      'Una meta es un sueño con fecha de vencimiento',
      'Si le tienes miedo al fracaso no mereces tener éxito',
      'Paso a paso y el proceso se completa',
      'La persistencia puede transformar un fracaso en un logro extraordinario',
      'La edad no es una barrera, sino una limitación que le pones a tu mente',
      'Nadie que haya dado lo mejor de sí mismo lo ha lamentado nunca',
      'Si entrenas lo suficiente, no solo te vas a endurecer, sino que además serás duro de derrotar',
      'Cuanto más sudas en la práctica, menos sangras en la batalla ',
      'Si puedes creer en ello, tu mente puede alcanzarlo ',
      'Nunca te des por vencido',
      'Un campeón es alguien que se levanta cuando no puede hacerlo',
      'La voluntad es un músculo que necesita ser ejercitado, igual que el resto',
      'Si no te supone un reto, no te cambiará',
      'La adversidad hace que algunas personas se rompan y que otras rompan récords',
      'Solo quien puede ver lo invisible puede hacer lo imposible'
    ]
  }),
  computed: {
    largo() {
      return this.dichos.length
    }
  }
}
</script>

<style lang="stylus">
#dichos
  height 100%
  h2
    font-family 'Oswald', sans-serif
    line-height 1.2
    margin 0
    padding 40px 20px
    text-transform uppercase
</style>