<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistema gestor de base de datos (SGBD)

    p(data-aos="fade") Toda la información que circula en la red, la recibida y la que se envía, sale o se aloja en una base de datos. Internet no sería lo que se conoce sin las bases de datos que proporcionan la posibilidad de guardar la información.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bloque.svg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Para lograr la creación, gestión y administración, de tan grande cantidad de información, se utilizan los denominados sistemas gestores de base de datos (SGBD), que evolucionan a medida que lo requiere la tecnología. Los SGBD definen la estructura para el almacenamiento y búsqueda de información, de la manera más eficiente posible.


    Separador 

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="fade")
      h2#t_2_1 2.1 Data management system DNMS

    p.mb-4(data-aos="fade") Este se puede definir como un #[em software] que estructura y organiza la información, bajo un modelo de almacenamiento que cuenta con ciertas características particulares, al momento de almacenar configurar, administrar y utilizar la información.

    figure.mb-5.col-md-8.m-auto(data-aos="fade-down")
      img(src="@/assets/curso/temas/tema2/2.svg")

    p.mb-4(data-aos="fade") Los siguientes cuatro elementos, engloban los requisitos más importantes de un sistema de administración de bases de datos (SGBD):

    .row.m-auto.col-md-10
      .col-lg-6(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imagen_flotante_animada(src='@/assets/curso/temas/tema2/3.svg' alt='')
          .tarjeta.caja_flotante(style="background-color:#FFCA28;min-height:250px;")
            .p-4
              h4 Lectura y escritura
              p.mt-3.mb-0 El sistema de gestión de la base de datos define permisos de lectura y escritura.

      .col-lg-6(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imagen_flotante_animada(src='@/assets/curso/temas/tema2/4.svg' alt='')
          .tarjeta.caja_flotante_azul(style="background-color:#4DD0E1;min-height:250px;")
            .p-4
              h4 Interfaces y lenguaje
              p.mt-3.mb-0 Estos procesos se definen por medio de las interfaces específicas de la aplicación y están determinados por el lenguaje de definición de datos correspondiente.

      .col-lg-6(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imagen_flotante_animada(src='@/assets/curso/temas/tema2/5.svg' alt='')
          .tarjeta.caja_flotante_azul(style="background-color:#4DD0E1;min-height:250px;")
            .p-4
              h4 Lenguaje SQL
              p.mt-3.mb-0 El más conocido usado y trabajado de estos lenguajes es SQL (#[em Structured Query Language]), que se define como un lenguaje de consulta estructurado.

      .col-lg-6(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imagen_flotante_animada(src='@/assets/curso/temas/tema2/6.svg' alt='')
          .tarjeta.caja_flotante(style="background-color:#FFCA28;min-height:250px;")
            .p-4
              h4 Funciones y propiedades
              p.mt-3.mb-0 Las funciones y propiedades de las transacciones de un DBMS (sistema administrador de bases de datos) son: Atomicidad (#[em atomicity]), consistencia (#[em consistency]), aislamiento (#[em isolation]) y permanencia (#[em durability]).

    
    Separador 

    .titulo-segundo.color-acento-contenido.mt-5
      h2#t_2_2 2.2 Componentes de un SGBD

    .cajon.color-primario.p-5.caja_flotante_azul.mb-4(style="background-color: #DBFBFF;" data-aos="fade")
      p(data-aos="fade") Un sistema de gestión de base de datos consta de varios componentes, todos los cuales contribuyen al buen funcionamiento del #[em software]. Los elementos básicos que lo conforman son tres: #[strong 1) el diccionario de datos, 2) el lenguaje de definición de datos y 3) el lenguaje de manipulación de datos.]

    figure.mb-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/tema2/7.svg")

    p.mb-4(data-aos="fade") En la tabla 1 se muestran los componentes que necesita manejar una base de datos para una aplicación móvil; se sigue la misma estructura que se utiliza en las páginas web.

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Tabla 1.] Componentes de un SGBD

    .tabla-a.color-acento-botones(data-aos="fade-down")
      table.tabla__1
        thead(style="border-top:0px;")
          tr
            th.h5(style="border-right: 1px #bababa solid;background-color:#FFCA28") Componentes
            th.h5(style="background-color:#FFCA28") Manejo
        tbody
          tr(style="background-color:#F6F6F6")
            td(style="border-right: 1px #bababa solid;") Diccionario de datos
            td El diccionario de datos suministra las características y toda la información importante sobre los datos almacenados. Sin importar su diversidad, también notifica los permisos de uso de cada registro.
          tr
            td(style="border-right: 1px #bababa solid;") Lenguaje de definición de datos
            td Utiliza un DDL (#[em Data Definition Language]) que estructura el contenido de la base de datos; por medio de este lenguaje se puede crear, modificar y eliminar. 
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") Lenguaje de manipulación de datos
            td Utiliza un DML (#[em Data Manipulation Language]), que permite registrar, eliminar, modificar, comprimir y extraer datos.
    

    Separador

    .titulo-segundo.color-acento-contenido.mt-5
      h2#t_2_3 2.3. Propiedad de un SGBD

    p(data-aos="fade") Por lo general, todas las aplicaciones móviles cuentan con una base de datos que puede ser pequeña y simple o muy grande y robusta; pero, por más pequeña que esta sea, debe contar con ciertas tareas, funciones y propiedades que harán de la base de datos un elemento aportante al buen desempeño de la aplicación (Silberschatz, Korth y Sudarshan, 2006).
    p.mb-4(data-aos="fade") En la tabla 2 se indican tales propiedades y la manera como estas logran cualificar el sistema de administración de bases de datos.

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Tabla 2.] Propiedades de un SGBD

    .tabla-a.color-acento-botones(data-aos="fade")
      table.tabla__1
        thead(style="border-top:0px;")
          tr
            th.h5(style="border-right: 1px #bababa solid;background-color:#FFCA28") Propiedades
            th.h5(style="background-color:#FFCA28") Tareas y funciones
        tbody
          tr(style="background-color:#F6F6F6")
            td(style="border-right: 1px #bababa solid;") Almacenamiento de datos
            td Se debe permitir el almacenamiento de datos en varios formatos como texto, documentos, contraseñas, imágenes, estos también se deben poder consultar.
          tr
            td(style="border-right: 1px #bababa solid;") Edición de datos
            td Los elementos almacenados se deben poder modificar y editar directamente. 
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") Eliminación de datos
            td Se pueden eliminar los datos almacenados y editados solo por los perfiles de usuario que permiten esta actividad.
          tr
            td(style="border-right: 1px #bababa solid;") Administración de metadatos
            td Crear, leer, actualizar y borrar datos. Realizar el CRUD organizando, facilitando la función de búsqueda.
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") Seguridad de los datos
            td Evitar el acceso a los datos de individuos no autorizadas y mantener la seguridad de los datos, implementando un método de cifrado eficaz para evitar que los datos se pierdan o sean manipulados.
          tr
            td(style="border-right: 1px #bababa solid;") Integridad de los datos
            td En las bases de datos relacionales se utilizan cuatro conceptos para mantener la integridad y coherencia de los datos: integridad de dominio, integridad de entidad, integridad referencial y coherencia lógica.
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") Modo multiusuario
            td Permitir el ingreso de varios o muchos usuarios a la vez y lograr mantener la seguridad de los datos, la coherencia y no afectar el rendimiento de la aplicación.
          tr
            td(style="border-right: 1px #bababa solid;") Optimización de consulta
            td La lógica y la estructura de la base de datos deben garantizar el buen funcionamiento y la optimización de recursos. 
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") #[em Triggers y Stored procedures]
            td Son procedimientos que se encargan de activar automáticamente (#[em trigger]) como respuesta a algunas acciones.

    
    Separador 

    .titulo-segundo.color-acento-contenido.mt-5
      h2#t_2_4 2.4 Tipos de SGBD utilizados en apps móviles

    p(data-aos="fade") El principal objetivo de la instalación de un sistema gestor de base de datos es desarrollar y administrar la información de la base de datos, de la mejor manera posible. Existen diferentes modelos que se diferencian, fundamentalmente, en la manera en la cual está almacenada y es consultada la información. Por lo tanto, decidirse por un DBMS ha de estar más ligado al tipo de aplicación que se quiere desarrollar y la manera en que se deban almacenar y consultar los datos dentro de la aplicación; para ello, conocer los modelos de datos y sus características, permitirá saber, de forma sencilla, cuál es la opción más adecuada para implementar. 

    p.mb-4(data-aos="fade") #[strong A continuación, se muestran los tipos de sistemas de administración de bases de datos más utilizados y sus principales características y funcionalidades.]

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Tabla 3.] Tipos de SGBD

    .tabla-a.color-acento-botones(data-aos="fade")
      table.tabla__1
        thead(style="border-top:0px;")
          tr
            th.h5(style="border-right: 1px #bababa solid;background-color:#FFCA28") Tipo de SGBD
            th.h5(style="background-color:#FFCA28;border-right: 1px #bababa solid;") Características y funcionalidades
            th.h5(style="background-color:#FFCA28") Ejemplos

        tbody
          tr(style="background-color:#F6F6F6")
            td(style="border-right: 1px #bababa solid;") Relacional
            td(style="border-right: 1px #bababa solid;") El más común y popular. #[br] Los datos se estructuran en filas de tabla. #[br] La posibilidad de crear diferentes relaciones entre las filas y presentarlas en columnas.#[br] Una tabla puede tener muchos registros y cada registro puede tener muchos campos.#[br] Utiliza el lenguaje SQL.#[br] SQL se utiliza en, prácticamente, todas las bases de datos relacionales. #[br] Esto permite una mayor seguridad e integración con otras bases de datos.
            td Microsoft Access. #[br] Microsoft SQL Server.#[br] MySQL.#[br] Db2 de IBM.#[br] Oracle Database.#[br] IBM Informix.#[br] MariaDB.#[br] Sybase ASE.#[br] Firebird.
          tr
            td(style="border-right: 1px #bababa solid;") Jerárquica
            td(style="border-right: 1px #bababa solid;") Es similar a la estructura de un árbol y muy parecida a la estructura de Microsoft Windows que organiza las carpetas y archivos. #[br] El enlace es anidado conservando los datos organizados en un orden particular en un mismo nivel de lista. #[br] Esto reduce el requerimiento de memoria y también aumenta la eficiencia.
            td IMS de IBM.
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") De red
            td(style="border-right: 1px #bababa solid;") En un modelo de red, la característica determinante es que almacena un registro con un enlace a otros registros formando una red.#[br] Los componentes de una base de datos de red pueden tener varias relaciones padre-hijo. #[br] Dado que siempre hay un vínculo entre un padre y un hijo, se mantiene la integridad de los datos.
            td PostgreSQL. #[br] InterSystems Caché. #[br] InterSystems IRIS.
          tr
            td(style="border-right: 1px #bababa solid;") Orientada a objetos
            td(style="border-right: 1px #bababa solid;") Utiliza el concepto de la herencia: esto representa que los objetos pueden transferir algunos de sus atributos a otros objetos, lo que se regula a través del SGBD.
            td PostgreSQL. #[br] InterSystems Caché (combina relacional y orientado a objetos). #[br] InterSystems IRIS (combina relacional y orientado a objetos).
          tr(style="background-color:#F6F6F6") 
            td(style="border-right: 1px #bababa solid;") Orientada a documentos
            td(style="border-right: 1px #bababa solid;") Almacena los registros de datos en diferentes documentos.
            td OrientDB. #[br] CouchDB. #[br] MongoDB.
          tr
            td(style="border-right: 1px #bababa solid;") El modelo de base de datos plana
            td(style="border-right: 1px #bababa solid;") En un modelo de base de datos plano, hay dos dimensiones. #[br] Todos los registros se almacenan en un solo lugar.  #[br] Funciona bien para bases de datos pequeñas y tiene requisitos mínimos de #[em software] y #[em hardware].
            td Excel.




</template>

<script>
export default {
  name: 'Tema2',
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
