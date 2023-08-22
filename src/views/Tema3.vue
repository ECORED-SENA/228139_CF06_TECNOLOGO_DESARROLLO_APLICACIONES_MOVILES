<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestores de bases de datos para apps móviles y relacionales

    p(data-aos="fade") Los gestores de bases de datos se dividen según la manera en que se administran los datos. En la actualidad existen dos modelos: las relacionales (SQL) y las no relacionales (NoSQL). En este punto, se enfocará la mirada hacia los gestores de bases de datos relacionales (SQL). Este modelo se caracteriza por establecer vínculos y relaciones entre los datos, utilizando una tabla integradora por cada relación existente con sus propios registros y atributos.
    p.mb-4(data-aos="fade") En la figura 2 se muestra un ejemplo de arquitectura del modelo relacional.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 2.] Ejemplo de arquitectura utilizando Azure y PostgreSQL
        figure(data-aos="fade-down")
          img(src="@/assets/curso/temas/tema3/1.svg" alt="El modelo relacional Inicia en el buscador o aplicación móvil, pasa al Azure Traffic Manager, luego al Azure App services y finalmente al Azure Database de PostgreSQL.")
        figcaption.mt-2(data-aos="fade") Nota. Tomada de Microsoft (2021).

    p.mb-4(data-aos="fade") A continuación, se indican algunos de los sistemas de administración de bases de datos más utilizados del modelo relacional.

    AcordionA(data-aos="fade-down" tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="MySQL")
        .col-md-11
          p.mb-0 Es un SGBD multihilo y multiusuario, de uso libre, siendo el más utilizado en el desarrollo de páginas web y aplicaciones móviles. Se entrega bajo la licencia GNU GPL.
      .row.justify-content-center(titulo="MariaDB")
        .col-md-11
          p.mb-0 Es una consecuencia de MySQL. Está compuesto por varias extensiones su entorno gráfico de desarrollo, es amigable. Se deriva a partir de la compra de MySQL por Oracle para seguir la filosofía del #[em open source], es totalmente compatible con MySQL. Algunas de sus principales características son el aumento de motores de almacenamiento, la gran escalabilidad y la buena seguridad y rapidez en transacciones. Cuenta con las nuevas extensiones que permiten el trabajo y desarrollo de aplicación para bases de datos NoSQL.
      .row.justify-content-center(titulo="SQLite")
        .col-md-11
          p.mb-0 SQLite es una biblioteca escrita en C que implementa un SGBD y que permite transacciones sin necesidad de un servidor ni configuraciones; es muy utilizada en la creación y gestión de pequeñas bases de datos locales; además, es útil para las aplicaciones móviles que no requieren conexión a servidores remotos y maneja un pequeño flujo de datos local.
      .row.justify-content-center(titulo="Principales características")
        .col-md-11
          p.mb-0 Una de sus principales características es su tamaño reducido; al tratarse de una biblioteca no requiere de muchos recursos como sí lo hace un SGBD, a pesar de su tamaño reducido es de gran estabilidad pues está diseñado sobre los principios de ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad), su desventaja es que no soporta bases de datos muy grandes. 
      .row.justify-content-center(titulo="Microsoft SQL Server")
        .col-md-11
          p.mb-0 Es un gestor de base de datos relacionales que utiliza el lenguaje Transact-SQL. Una de sus grandes características es que brinda la posibilidad de manejar gran cantidad de información y usuarios, generando un flujo fuerte y constante, que soporta sin inconvenientes. Está soportado, solamente, por Microsoft. Presenta una excelente seguridad, estabilidad y escalabilidad. Cuenta con la opción de realizar la cancelación de consultas y también con un excelente entorno gráfico que facilita su administración. Utiliza y se centra sobre los comandos DDL y DML. Como todos los productos de Microsoft cuenta con una versión #[em Express], pero presenta grandes limitantes. Si se requiere una versión completa se debe pagar un alto precio por su uso completo #[em Standard, Developer, Enterprise] o SQL Azure, la versión de SQL Server en la nube.
      .row.justify-content-center(titulo="Oracle")
        .col-md-11
          p.mb-0 Oracle es el SGBD más utilizado en el ámbito empresarial y su recorrido y evolución le posicionan como uno de los mejores en el mercado; se destaca por su gran soporte de transacciones, su estabilidad y escalabilidad, su soporte multiplataforma. Su gran inconveniente o desventaja es que cuenta con una versión gratuita: #[em Edition Express], que proporciona ciertas características, pero muchas limitaciones.
      .row.justify-content-center(titulo="PostgreSQL")
        .col-md-11
          p.mb-0 Es, en la actualidad, uno de los gestores de base de datos relacional más usados en el mercado, tiene licencia BSD y es de uso libre; además, presenta grandes ventajas para los desarrolladores de aplicaciones móviles y administradores de bases de datos. Presenta un control de concurrencias multiversión (MVCC) y flexibilidad en cuanto a lenguajes de programación y ofrece una excelente estabilidad, robustez y eficiencia en todos los procesos principales con bases de datos robustas. Su principal falencia es, aunque no parezca lógico, la lentitud para realizar la administración de bases de datos pequeñas: este gestor no se debe tener en cuenta, o tomar como una opción, cuando la aplicación desarrollada utiliza una base de datos con poca información y bajo flujo de datos; se subutilizará la herramienta y no se tendrán buenos resultados. Dispone de una herramienta de administración muy fácil e intuitiva para la gestión de las bases de datos.



    

</template>

<script>
export default {
  name: 'Tema3',
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
