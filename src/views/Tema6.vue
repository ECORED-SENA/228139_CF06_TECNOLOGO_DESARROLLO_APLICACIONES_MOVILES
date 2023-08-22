<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 ¿Por qué no utilizar conexión directa a base de datos?

    p.mb-5(data-aos="fade") No se recomienda conectar la base de datos, por medio de una conexión persistente, directamente a la aplicación, ya que esto podría traer complicaciones cuando hay mala conectividad o fallas de conexión móvil. En cambio, sí es recomendable utilizar un método de solicitudes HTTP, sin estado (#[em stateless HTTP requests]). Este diseño sin estado, simplifica el esquema del servidor porque no hay necesidad de asignar, dinámicamente, almacenamiento para tratar las conversaciones en curso. Si un cliente desaparece, en medio de la transacción, ninguna parte del sistema tiene que ser responsable de limpiar el estado actual del servidor.

    figure.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/tema6/1.svg")

    h5.mb-4(data-aos="fade") A continuación, se indican otras razones por las que no es recomendable la conexión directa a base de datos.

    .row.mt-5.col-md-9.m-auto
      .col-lg-6.mb-3(data-aos="fade-right")
        .p-5(style="background-color:#FFCA28;height:100%;")
          figure.text-center
            img(style="display:inline;max-width:140px;" src="@/assets/curso/temas/tema6/2.svg")
          h4.mt-4 Saturación y retrasos
          p.mt-3 Otro de los inconvenientes que se pueden llegar a presentar es la gran cantidad de conexiones que se realizan desde las aplicaciones móviles a la base de datos; esto puede generar problemas al momento de realizar el monitoreo de los procesos y limitar la capacidad de respuesta, saturando la base de datos y generando retardos en las respuestas.

      .col-lg-6.mb-3(data-aos="fade-left")
        .p-5(style="background-color:#4DD0E1;height:100%;")
          figure.text-center
            img(style="display:inline;max-width:140px;" src="@/assets/curso/temas/tema6/3.svg")
          h4.mt-4 Riesgos de seguridad
          p.mt-3 Los resultados enviados desde la DB a la aplicación consumen gran ancho de banda y energía de la batería, y otro de los grandes problemas al proceder directamente a la base de datos es la exposición de la base de datos de manera directa y se corren riesgos de seguridad por no contar con protocolos que medien la conexión y sirvan como filtros seguros de autenticación.




</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
