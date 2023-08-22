<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Creación de base de datos PostgreSQL

    p(data-aos="fade") Este gestor de base de datos relacional, fundamentado sobre el modelo orientado a objetos, es de uso libre y cuenta con un excelente soporte para crear y administrar bases de datos de diferente tamaño y servicios. En este punto del componente, se visualizarán los pasos de la creación de una base de datos y su alojamiento sobre un servidor que provee la plataforma, monitoreando todas las actividades y el flujo de información que se genera, en tiempo real, sobre la aplicación móvil.
    p.mb-4(data-aos="fade") #[strong A continuación, se muestran los pasos y orientaciones de creación de base de datos, en PostgreSQL. Se recomienda aplicar cada uno de ellos, abriendo las diapositivas que los contienen. ¡Adelante!]

    //TabsA.color-acento-botones.mt-5(data-aos="fade-down")
      .tarjeta.color-primario.p-4(titulo="1. Crear y administrar una base de datos PostgreSQL" style="background-color:rgb(124 197 255 / 15%)")
        h3 1. Crear y administrar una base de datos PostgreSQL
        p Para crear y administrar una base de datos PostgreSQL con un entorno gráfico amigable, se puede utilizar la herramienta pgAdmin. Para trabajar con este entorno, se puede ingresar en el sitio oficial de la herramienta #[a(href="https://www.pgadmin.org/" style="color: steelblue;" target="_blank") https://www.pgadmin.org/] donde se encuentra el escenario que se muestra en la figura 3. Allí hay la posibilidad de realizar una demostración del funcionamiento SGBD en línea; también, es posible descargar la aplicación o crear un usuario y trabajar sobre la plataforma web.
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 3.] Página de inicio para la creación de base de datos PostgreSQL
        figure
          img(src="@/assets/curso/temas/tema4/1.svg" alt="Captura de pantalla de ejercicios audiovisuales para la creación de bases de datos PostgreSQL.")
          figcaption.mt-1 Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org
      .tarjeta.color-primario.p-4(titulo="2. Entorno web de administración" style="background-color:rgb(124 197 255 / 15%)")
        h3 2. Entorno web de administración
        p Esta herramienta cuenta con un #[em sandbox] en el cual se puede realizar una práctica básica guiada, familiarizándose con el entorno de trabajo pgAdmin. 
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 4.] Bienvenida al entorno web de administración
        figure
          img(src="@/assets/curso/temas/tema4/2.svg" alt="Captura de pantalla del entorno de bienvenida.")
          figcaption.mt-1 Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org
      .tarjeta.color-primario.p-4(titulo="3. Entorno en línea y registro en plataforma" style="background-color:rgb(124 197 255 / 15%)")
        h3 3. Entorno en línea y registro en plataforma
        p El siguiente procedimiento permite crear y trabajar una base de datos utilizando el entorno en línea, realizando un registro en la plataforma por medio de un usuario y una contraseña.
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 5.] Ingreso en la plataforma
        figure
          img(src="@/assets/curso/temas/tema4/3.svg" alt="Captura de pantalla del ingreso y/o registro a la plataforma en el que se ingresa usuario y contraseña.")
          figcaption.mt-1 Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org
      .tarjeta.color-primario.p-4(titulo="4. Entorno de trabajo PGAdmin" style="background-color:rgb(124 197 255 / 15%)")
        h3 4. Entorno de trabajo PGAdmin
        p Este es el entorno de administración proporcionado PGAdmin. Se puede realizar el trabajo de administrar un nuevo servidor, realizar la configuración del entorno de trabajo; también es posible ingresar, directamente, a la página web de PGAdmin. Así mismo, se puede encontrar e ingresar a la comunidad y acceder a toda la documentación de soporte de PostgreSQL
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 6.] Entorno de trabajo de PGAdmin
        figure
          img(src="@/assets/curso/temas/tema4/4.svg" alt="Captura de pantalla del entorno de trabajo de PGAdmin.")
          figcaption.mt-1 Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org
      .tarjeta.color-primario.p-4(titulo="5. Creación de un servido" style="background-color:rgb(124 197 255 / 15%)")
        h3 5. Creación de un servidor
        p PGAdmin permite realizar la creación de un servidor de base de datos sobre el cual se creará la base de datos que, posteriormente, será vinculada a la aplicación o al programa que se realice; también, posibilita realizar una configuración básica de administración y soporte.
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 7.] Creación de un servidor
        figure
          img(src="@/assets/curso/temas/tema4/5.svg" alt="Captura de pantalla del espacio de trabajo para crear un servidor.")
          figcaption.mt-1 Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org
      .tarjeta.color-primario.p-4(titulo="6. Seguridad e ingreso" style="background-color:rgb(124 197 255 / 15%)")
        h3 6. Seguridad e ingreso
        p Para realizar la configuración y creación de la base de datos es importante la seguridad; por tal razón, siempre pedirá la contraseña para realizar cualquier cambio importante sobre el servidor. 
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 8.] Contraseña de ingreso
        figure
          img(src="@/assets/curso/temas/tema4/6.svg" alt="Captura de pantalla del espacio de trabajo en el que se muestra la solicitud de la contraseña ante un cambio.")
          figcaption.mt-1 Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org 
      .tarjeta.color-primario.p-4(titulo="7. Base de datos creada y monitoreada" style="background-color:rgb(124 197 255 / 15%)")
        h3 7. Base de datos creada y monitoreada
        p Después de la vinculación de la base de datos al servidor y a la aplicación, es posible realizar la administración y el seguimiento de todos los procesos, actividades y rendimiento de la base de datos. 
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 9.] #[em Base de datos creada y monitoreada]
        figure
          img(src="@/assets/curso/temas/tema4/7.svg" alt="Captura de pantalla del espacio de trabajo en el que se muestra cómo se puede realizar el monitoreo y rendimiento de forma gráfica.")
          figcaption.mt-1 Nota. Tomada de ejercicio práctico de instalación del autor en pgadmin.org 

    PasosA.color-secundario.mb-4(tipo="n")
      .row.align-items-center
        .col-lg-10.mb-4.mb-md-0
          h5 Página de inicio para la creación de base de datos PostgreSQL
          p Para crear y administrar una base de datos PostgreSQL con un entorno gráfico amigable, se puede utilizar la herramienta pgAdmin. Para trabajar con este entorno, se puede ingresar en el sitio oficial de la herramienta #[a(href="https://www.pgadmin.org/" style="color: steelblue;" target="_blank") https://www.pgadmin.org/]. Allí hay la posibilidad de realizar una demostración del funcionamiento SGBD en línea; también, es posible descargar la aplicación o crear un usuario y trabajar sobre la plataforma web.
        .col-lg-2
          img.px-lg-3(src="@/assets/curso/temas/tema4/paso1.svg")
      .row.align-items-center
        .col-lg-2.mb-4.mb-md-0
          img.px-lg-3(src="@/assets/curso/temas/tema4/paso2.svg")
        .col-lg-10
          h5 Bienvenida al entorno web de administración
          p Esta herramienta cuenta con un #[em sandbox] en el cual se puede realizar una práctica básica guiada, familiarizándose con el entorno de trabajo pgAdmin.
        
      .row.align-items-center
        .col-lg-10.mb-4.mb-md-0
          h5 Ingreso en la plataforma
          p El siguiente procedimiento permite crear y trabajar una base de datos utilizando el entorno en línea, realizando un registro en la plataforma por medio de un usuario y una contraseña.
        .col-lg-2
          img.px-lg-3(src="@/assets/curso/temas/tema4/paso3.svg")
      .row.align-items-center
        .col-lg-2.mb-4.mb-md-0
          img.px-lg-3(src="@/assets/curso/temas/tema4/paso4.svg")
        .col-lg-10
          h5 Entorno de trabajo de PGAdmin 
          p Este es el entorno de administración proporcionado PGAdmin. Se puede realizar el trabajo de administrar un nuevo servidor, realizar la configuración del entorno de trabajo; también es posible ingresar, directamente, a la página web de PGAdmin. Así mismo, se puede encontrar e ingresar a la comunidad y acceder a toda la documentación de soporte de PostgreSQL.

      .row.align-items-center
        .col-lg-10.mb-4.mb-md-0
          h5 Creación de un servidor
          p PGAdmin permite realizar la creación de un servidor de base de datos sobre el cual se creará la base de datos que, posteriormente, será vinculada a la aplicación o al programa que se realice; también, posibilita realizar una configuración básica de administración y soporte.
        .col-lg-2
          img.px-lg-3(src="@/assets/curso/temas/tema4/paso5.svg")
      .row.align-items-center
        .col-lg-2.mb-4.mb-md-0
          img.px-lg-3(src="@/assets/curso/temas/tema4/paso6.svg")
        .col-lg-10
          h5 Contraseña de ingreso
          p Para realizar la configuración y creación de la base de datos es importante la seguridad; por tal razón, siempre pedirá la contraseña para realizar cualquier cambio importante sobre el servidor.

      .row.align-items-center
        .col-lg-10.mb-4.mb-md-0
          h5 Base de datos creada y monitoreada
          p Después de la vinculación de la base de datos al servidor y a la aplicación, es posible realizar la administración y el seguimiento de todos los procesos, actividades y rendimiento de la base de datos.
        .col-lg-2
          img.px-lg-3(src="@/assets/curso/temas/tema4/paso7.svg")


    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-0 Para profundizar en la creación de bases de datos PostgreSQL, se sugiere revisar los vídeos ubicados en la material complementario.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
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
