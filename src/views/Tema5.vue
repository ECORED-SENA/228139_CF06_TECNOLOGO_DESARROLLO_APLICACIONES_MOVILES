<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Sistemas gestores de bases de datos no relacionales (NoSQL)

    p(data-aos="fade") Una base de datos no relacional (NoSQL) no requiere de estructuras de datos fijas, como tablas, ni garantiza completamente las características ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad); las bases de datos no relacionales son utilizadas en ambientes distribuidos que deben estar siempre disponibles y activos, gestionando un enorme flujo de información.

    figure.mb-5(data-aos="fade-down")
      img(src="@/assets/curso/temas/tema5/1.svg")

    .cajon.color-primario.p-4.mb-5(style="background-color: #DBFBFF;")(data-aos="fade")
      p.mb-0 Para administrar este tipo de arquitectura de bases de datos, existen también unos gestores que facilitan el trabajo a los desarrolladores y administradores; los principales sistemas (SGBD NoSQL) que se puede encontrar son, a saber:

    TabsA.color-acento-botones.mt-5(data-aos="fade-down")
      .tarjeta.color-primario.p-4(titulo="MongoDB" style="background-color:rgb(124 197 255 / 15%)")
        h4 MongoDB
        p.mt-4 Mongo es el gestor de datos más utilizado para la creación y administración de base de datos no relacionales. Está enfocado en el manejo de ficheros que permiten almacenar la información en estructuras BSON, con un esquema dinámico que facilita el proceso de integración.
        h5.mt-4 Características
        p.mt-3 Algunas de sus características principales es que permite la indexación y réplica de los datos, realiza un balanceo de carga, todo el almacenamiento se realiza sobre ficheros que permiten realizar las consultas #[em ad hoc], es de uso libre y presenta una completa plataforma de administración. Es importante resaltar que grandes empresas, como Google, Facebook, eBay, Cisco o Adobe, utilizan este gestor como su principal herramienta para administrar sus bases de datos; ello indica que su soporte es bien robusto y permite el manejo de grandes volúmenes de datos y grandes flujos de información.

      .tarjeta.color-primario.p-4(titulo="Redis" style="background-color:rgb(124 197 255 / 15%)")
        h4 Redis
        p.mt-4 Se basa en el método de almacenamiento clave-valor. Se podría comparar con el manejo de un vector o vectores que almacenan todos los datos, sin importar su tipo o formato. Se pueden almacenar cadenas, listas, enteros, #[em float], etc. El principal uso de este SGBD es el almacenamiento en memoria caché y la administración de sesiones. Sus características más relevantes son la atomicidad y persistencia, su gran velocidad en tiempo de respuesta y la simplicidad en sus procesos.

      .tarjeta.color-primario.p-4(titulo="Cassandra" style="background-color:rgb(124 197 255 / 15%)")
        h4 Cassandra
        p.mt-4 Este SGBD utiliza el método clave-valor para el almacenamiento. Trabaja sobre el modelo NoSQL distribuido y masivamente escalable. Una de sus principales características es que es multiplataforma, cuenta con su propio lenguaje de consultas, (CQL) #[em Cassandra Query Languaje]. Utiliza una arquitectura #[em peer-to-peer], algunas de las plataformas o compañías que lo utilizan son Facebook, Twitter, Instagram, Spotify o Netflix, entre otras 

      .tarjeta.color-primario.p-4(titulo="Existen algunos otros SGBD" style="background-color:rgb(124 197 255 / 15%)")
        h4 Existen algunos otros SGBD
        p.mt-4 Para elegir el SGBD adecuado, se debe empezar principalmente definiendo qué tipo de datos se almacenarán y cómo se van a administrar. Entre los sistemas gestores de base de datos mencionados es posible encontrar el que mejor se adapte a las necesidades y a la capacidad de inversión a realizar, volumen de información a almacenar, tipo de consultas a realizar, flujo y tamaño de información a procesar.
        ul.lista-ul
          li
            i.fas.fa-check(style="color: #FFA726;")
            | Azure Cosmos DB.
          li
            i.fas.fa-check(style="color: #FFA726;")
            | RavenDB.
          li
            i.fas.fa-check(style="color: #FFA726;")
            | ObjectDB.
          li
            i.fas.fa-check(style="color: #FFA726;")
            | Apache CouchDB.
          li
            i.fas.fa-check(style="color: #FFA726;")
            | Neo4j.
          li
            i.fas.fa-check(style="color: #FFA726;")
            | Google BigTable.
          li
            i.fas.fa-check(style="color: #FFA726;")
            | Apache Hbase.
          li
            i.fas.fa-check(style="color: #FFA726;")
            | Amazon DynamoDB.




</template>

<script>
export default {
  name: 'Tema5',
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
