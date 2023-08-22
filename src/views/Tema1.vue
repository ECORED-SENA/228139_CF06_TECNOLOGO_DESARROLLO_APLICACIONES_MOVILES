<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diseño de bases de datos
      
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.svg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Este diseño se realiza cuando se cuenta con toda la información disponible del proyecto; esta información debe estar catalogada y ordenada de manera clara para iniciar la clasificación de datos y su organización, con lo que se genera el modelo lógico y conceptual, basado y fundamentado en el modelo físico que se obtuvo como resultado de la investigación y levantamiento de la información.

    p.mb-4(data-aos="fade") Este diseño se realiza cuando se cuenta con toda la información disponible del proyecto; esta información debe estar catalogada y ordenada de manera clara para iniciar la clasificación de datos y su organización, con lo que se genera el modelo lógico y conceptual, basado y fundamentado en el modelo físico que se obtuvo como resultado de la investigación y levantamiento de la información, tal como se aprecia a continuación.

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Figura 1.] Base de datos relacional

    figure.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/tema1/2.svg" alt="Proceso esquemático en el diseño de una base de datos, que inicia con el levantamiento y organización de información para luego clasificarla.")

    p.mb-4(data-aos="fade") Algunos parámetros en la generación del diseño de la base de datos son:

    .row.align-items-center.p-5.bg-1
      .col-lg-7.mb-3(data-aos="fade-right")
        ul.lista-ul.fa-ul
          li
            i.fas.fa-check(style="color: #FFA726;")
            |  Determinar el propósito de la base de datos.
          li
            i.fas.fa-check(style="color: #FFA726;")
            |  Buscar y organizar la información.
          li
            i.fas.fa-check(style="color: #FFA726;")
            |  Dividir la información en tablas.
          li
            i.fas.fa-check(style="color: #FFA726;")
            |  Convertir los elementos de información en columnas.
          li
            i.fas.fa-check(style="color: #FFA726;")
            |  Especificar las claves principales. 
          li
            i.fas.fa-check(style="color: #FFA726;")
            |  Establecer las relaciones de tablas. 
          li
            i.fas.fa-check(style="color: #FFA726;")
            |  Aplicar las reglas de normalización.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema1/3.svg")



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
