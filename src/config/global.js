export default {
  global: {
    componenteFormativo: 'Base de datos para aplicaciones móviles híbridas',
    descripcionCurso:
      'El estudio del componente favorecerá afianzarse en el diseño e implementación de bases de datos dentro del desarrollo de aplicaciones móviles. Además, reconocer diferentes herramientas vigentes para realizar tal proceso y definir la opción ideal según la naturaleza del proyecto por realizar; supliendo necesidades de rendimiento, seguridad, adaptabilidad y compatibilidad necesarias, para el correcto funcionamiento de la app.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diseño de bases de datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema gestor de base de datos (SGBD)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Data Management System DBMS',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Componentes de un SGBD',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Propiedad de un SGBD',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tipos de SGBD utilizados en apps móviles',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestores de bases de datos para apps móviles y relacionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Creación de base de datos PostgreSQL',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sistemas gestores de bases de datos no relacionales (NoSQL)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: '¿Por qué no utilizar conexión directa a base de datos?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Beneficios de un servicio web',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Configuración de Firebase a una app móvil híbrida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Vinculación de Firebase a la aplicación móvil',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'SQLite para aplicaciones livianas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Diseño de bases de datos',
      referencia:
        'Casas, J. (s.f.). <em>Diseño conceptual de bases de datos</em>. UOC.',
      tipo: 'Página web',
      link:
        'http://cv.uoc.edu/annotation/cb826b689abc472d8fb5b2519840058b/699689/PID_00213704/PID_00213704.html',
    },
    {
      tema: '3. Gestores de bases de datos para apps móviles y relacionales',
      referencia:
        'Hdeleon.net (2019). <em>¿Cómo hacer una base de datos para una app tipo Uber?</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1yAC3m7f5Pk',
    },
    {
      tema: '8. Configuración de Firebase a una app móvil híbrida',
      referencia:
        'Cano, J. (2017). <em>Nativescript, login con firebase</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WKfgnzl0p3E',
    },
    {
      tema: '10. SQLite para aplicaciones livianas',
      referencia:
        'Henao, C. (2017). 50. <em>Cómo crear una Base de Datos SQLite en Android</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9WiyqIcffe0',
    },
  ],
  glosario: [
    {
      termino: '<em>Peer-to-peer</em>',
      significado:
        'conexión con una arquitectura destinada a la comunicación entre aplicaciones. Esto permite a las personas o a los ordenadores compartir información y archivos, de uno a otro, sin necesidad de intermediarios.',
    },
    {
      termino: '<em>Sandbox</em>',
      significado:
        'plataforma aislada para ejecutar programas con seguridad y de manera separada. Se utiliza para ejecutar código nuevo o de dudosa procedencia.',
    },
    {
      termino: 'SDK',
      significado:
        'recopilación de un grupo de herramientas de desarrollo de <em>software</em> que complementa o facilita la comunicación e interacción con otra plataforma o con otro <em>software<em>.',
    },
    {
      termino: 'Sistema Gestor de Base de Datos (SGBD)',
      significado:
        'servicio principal para almacenar, procesar y proteger los datos. El SGBD proporciona acceso controlado y procesamiento de transacciones rápido, para cumplir con los requisitos de las aplicaciones consumidoras de datos más exigentes de una empresa.',
    },
    {
      termino: '<em>Web Service</em>',
      significado:
        'tecnología que utiliza un conjunto de protocolos y estándares que sirven para intercambiar datos entre aplicaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Lázaro, D. (2018). <em>Introducción a los web services</em>. ',
      link: 'https://diego.com.es/introduccion-a-los-web-services',
    },
    {
      referencia:
        'Microsoft.com. (2021). <em>Aplicaciones web y móviles escalables mediante Azure Database for PostgreSQ</em>. ',
      link:
        'https://docs.microsoft.com/es-es/azure/architecture/solution-ideas/articles/scalable-web-and-mobile-applications-using-azure-database-for-postgresql',
    },
    {
      referencia:
        'Rodríguez, N., Martín, A., Valenzuela, A. y Chávez, S. (2009). <em>Consumo de web service desde dispositivos móviles heterogéneos</em>. ',
      link:
        'http://sedici.unlp.edu.ar/bitstream/handle/10915/19809/Documento_completo.pdf%3Fsequence%3D1',
    },
    {
      referencia:
        'Rómmel, F. (s.f.). <em>SQLite: la base de datos embebida</em>. ',
      link: 'https://sg.com.mx/revista/17/sqlite-la-base-datos-embebida',
    },
    {
      referencia:
        'Silberschatz, A., Korth., H., y Sudarshan, S. (2006). <em>Fundamentos de bases de datos</em>. McGraw-Hill.',
    },
    {
      referencia:
        'Yu, W. & Sharma, S. (2007). <em>A Mobile Database Design Methodology for Mobile Software Solutions</em> [Figure 6. Mobile database issues and solutions]. Semantic Scholar. ',
      link:
        'https://www.semanticscholar.org/paper/A-Mobile-Database-Design-Methodology-for-Mobile-Yu-Sharma/41e3949c8aca76725184c740d782e79ca28efddc',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' Wilson Andrés Cuervo Nieto',
          cargo: ' Experto temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro: 'Centro agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
