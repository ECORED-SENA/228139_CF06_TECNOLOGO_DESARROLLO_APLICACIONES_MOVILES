<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 SQLite para aplicaciones livianas

    p.mb-4(data-aos="fade") Esta herramienta de uso libre permite almacenar y administrar información en dispositivos móviles como los #[em smartphones] y también en pequeños dispositivos utilizados en #[em IoT], de manera sencilla, eficaz y rápida; utiliza y soporta el lenguaje SQL sin ninguna limitación, implementando el estándar SQL92.

    .row.mb-3.mb-lg-4
      .col-md-6.mb-4(data-aos="fade-right")
        .imagen-titulo--der.color-primario
          figure
            img(src='@/assets/curso/temas/tema10/1.svg', alt='')
      .col-md-6.mb-4(data-aos="fade-left")
        h3.mt-3 Historia
        p.mt-3 Aparece en el año 2000 gracias a su desarrollador Richard Hip, bajo licencia GPL, su código es de dominio público y puede ser modificado. Su evolución es muy grande gracias a la cantidad de colaboradores que generan librerías que permiten ser utilizado en casi cualquier sistema y es soportado por muchos lenguajes de programación permitiendo una correcta integración. Es posible encontrar una gran cantidad de componentes, librerías y drivers para interactuar con SQLite desde una gran diversidad de lenguajes y plataformas de programación. Se adapta a lenguajes modernos como Java, Perl, Python, PHP, Ruby, C#, y a lenguajes más viejos como Pascal, SmallTalk, Clipper, para todos es posible librerías y ejemplos de código para SQLite (Rómmel, s. f.).

    .row.mb-3.mb-lg-4
      .col-md-6.mb-4(data-aos="fade-right")
        h3.mt-3 Principales características
        p.mt-3 SQLite promueve a trabajar con proyectos livianos. Su base de datos se encuentra en un solo archivo y su funcionamiento se puede limitar al solo uso de la memoria #[em Ram], no tiene dependencias externas todos sus procesos y actividades están autocontenidas, utiliza librerías de acceso que permite la integración con múltiples lenguajes de programación. Soporta texto en formato UTF-8 y UTF-16, así como datos numéricos de 64 bits. Trabaja con funciones SQL definidas por el usuario (UDF). Su código fuente es de dominio público y se encuentra muy bien documentado (Rómmel, s. f.). 
      .col-md-6.mb-4(data-aos="fade-left")
        .imagen-titulo--der.color-acento-botones
          figure
            img(src='@/assets/curso/temas/tema10/2.svg', alt='')

    .row
      .col-md-6.order-2.order-lg-1.mb-4(data-aos="fade-right")
        .imagen-titulo--der.color-primario
          figure
            img(src='@/assets/curso/temas/tema10/3.svg', alt='')
      .col-md-6.order-1.order-lg-2.mb-4(data-aos="fade-left")
        h3.mt-3 Migraciones a diversas plataformas
        p.mt-3 Fue diseñado con lenguaje de programación C, por esa sencilla razón es soportado para realizar migraciones sencillas a diversas plataformas de sistemas operativos y a dispositivos electrónicos que requieran bases de datos pequeñas, SQLite es una base de datos muy eficaz para cualquier desarrollo en ambientes embebidos, pues ofrece un alto rendimiento, eficacia, seguridad, estandarización e inter tolerabilidad. Todo esto la ha catapultado a convertirse en la base de datos de facto para desarrollos móviles (Rómmel, s. f.).





</template>

<script>
export default {
  name: 'Tema10',
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
