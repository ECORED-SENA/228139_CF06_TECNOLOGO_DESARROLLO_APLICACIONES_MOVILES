<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Beneficios de un servicio web

    p(data-aos="fade") Los principales beneficios que se obtienen del uso de los servicios web, para una aplicación móvil, es que se puede lograr una conexión de corta duración, con un estado mínimo, permitiendo volver al estado inicial si la transacción o el proceso no finalizó correctamente. El dispositivo cambia de redes wifi a red móvil y viceversa, perdiendo la conexión por unos segundos, pero retoma el requerimiento.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/1.svg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 De acuerdo con Rodríguez, Martín, Valenzuela y Chávez (2009) distintas aplicaciones de #[em software], desarrolladas en lenguajes de programación diferentes y ejecutadas sobre cualquier plataforma, pueden utilizar #[em Web Service] para intercambiar información en redes de computadoras, como internet, evitando la pérdida total de la información y la conexión (p. 2).

    p.mb-4(data-aos="fade") En las figuras que se muestran, se invita a reconocer los elementos clave para el diseño de una base de datos móvil y los beneficios del uso de servidores web para las aplicaciones móviles.

    .tarjeta.bg-1.p-4.mb-5
      SlyderA(tipo="b" data-aos="fade-down")  
        .row.justify-content-center
          .col-lg-11
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3.] Elementos clave para el diseño de una base de datos móvil
          .col-lg-8
            figure.m-auto
              img(src="@/assets/curso/temas/tema7/fig10.svg" alt="Esquema en el que se representan los elementos necesarios para enfrentar problemas y generar soluciones de bases de datos móviles.")
          .col-lg-11
            figcaption.mt-3 Nota. Adaptado de Yu, W. & Sharma, S. (2007).
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4.] Webs Services
            figure.m-auto
              img(src="@/assets/curso/temas/tema7/fig11.svg" alt="Esquema en el que se presentan los componentes de los web services para las aplicaciones móviles.")
            figcaption.mt-3 Nota. Adaptado de Lázaro, D. (2018).

    p.mb-4(data-aos="fade") Se invita a dar clic sobre los términos que aquí se proponen y descubrir en ellos algunos otros beneficios y aspectos funcionales del uso de servicios web.

    AcordionA(data-aos="fade-down" tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Alojamiento en servidor")
        .col-md-11
          p Una buena práctica es estructurar y diseñar la lógica de base de datos de la aplicación y alojarla en un servidor de aplicaciones accesible desde la web y comunicarse con ese servidor de aplicaciones, por medio de protocolos HTTP + JSON, SOAP, XML-RPC o similares, dependiendo del lenguaje y #[em frameware] que se está utilizando para el desarrollo. Esto hará mucho más eficiente el uso del ancho de banda y la aplicación será más tolerante a los problemas con la conectividad. También evitará exponer la base de datos directamente a internet.
      .row.justify-content-center(titulo="SOAP - <em>Simple Object Access Protocol</em>")
        .col-md-11
          p SOAP es un protocolo escrito en XML para el intercambio de información entre aplicaciones. Es un formato para enviar mensajes, diseñado especialmente para servir de comunicación en Internet, pudiendo extender los HTTP #[em headers]. Es una forma de definir qué información se envía y cómo, mediante XML. Básicamente es un protocolo para acceder a un #[em Web Service] (Lázaro, 2018).
      .row.justify-content-center(titulo="WSDL - <em>Web Services Description Language</em>")
        .col-md-11
          p WSDL es un lenguaje basado en XML para describir los servicios web y cómo acceder a ellos. Es el formato estándar para describir un #[em Web Service], y fue diseñado por #[em Microsoft] e IBM. WSDL es una parte integral del estándar UDDI y es el lenguaje que este utiliza (Lázaro, 2018).
      .row.justify-content-center(titulo="UDDI - <em>Universal Description, Discovery and Integration</em>")
        .col-md-11
          p UDDI es un estándar XML para describir, publicar y encontrar servicios web. Es un directorio donde las compañías pueden registrar y buscar servicios web. Es un directorio de interfaces de servicios web descritos en WSDL que se comunican mediante SOAP (Lázaro, 2018).




</template>

<script>
export default {
  name: 'Tema7',
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
