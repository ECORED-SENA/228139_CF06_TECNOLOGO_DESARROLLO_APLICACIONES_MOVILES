<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Vinculación de Firebase a la aplicación móvil
    
    p.mb-4(data-aos="fade") El primer paso para realizar la vinculación de Firebase a la aplicación móvil, es crear un proyecto en Firebase definiendo las características necesarias para su funcionamiento. Esta vinculación es importante porque es una de las plataformas más usadas en el desarrollo de apps móviles por sus ventajas y recursos ofrecidos.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema9/1.svg')})`}")
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Firebase presenta la posibilidad de utilizar un #[em hosting] gratuito y una base de datos que puede ser administrada; también permite hacer monitoreo de las actividades y procesos de la base de datos.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.p-3(style="background: linear-gradient(#ffca28, #bd8f00)")
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img.px-lg-4(src="@/assets/curso/temas/tema9/2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mt-3 Para asimilar y aplicar la vinculación de Firebase al proyecto de aplicación móvil, visite y estudie el #[strong(style="color: #12263F !important;") Anexo_1_VinculacionDeFirebaseALaAppMovil]. Desarrolle los pasos que allí se muestran y refuerce los aspectos más importantes de este desarrollo.
                .col-sm-auto
                  a.boton.boton--b.color-acento-contenido(:href="obtenerLink('downloads/Firebase.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema9',
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
