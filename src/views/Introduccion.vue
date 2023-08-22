<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade") Los dispositivos móviles generan nuevos requerimientos y con ellos aparecen nuevas herramientas que se adaptan a las necesidades emergentes. La demanda de bases de datos para dispositivos móviles ha creado un ecosistema de aplicaciones y servicios, organizando una gran comunidad de diseñadores, desarrolladores y grandes empresas que trabajan y enfocan todos sus esfuerzos en suplir necesidades del mercado de aplicaciones. Este constante desarrollo tecnológico ha llevado a crear diversos métodos de almacenamiento de información en dispositivos móviles. El siguiente video presenta, de manera genérica, lo que se desarrollará alrededor de la estructuración de la base de datos para aplicaciones móviles híbridas.

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
      figcaption Video.   

    .cajon.color-acento-contenido.p-4(data-aos="fade")
      p.mb-0 Tal necesidad ha provocado, también, que el almacenamiento de los datos en estos dispositivos haya mejorado, tanto en capacidad como en herramientas. Por dicha razón, en la actualidad, se cuenta con diversas opciones de manejadores de bases de datos para aplicaciones móviles que permiten una administración desde las bases de datos más pequeñas y fáciles de implementar, por lo general de manera local, hasta las más robustas que requieren todo un equipo de trabajo (Silberschatz, Korth y Sudarshan, 2006 ).

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
