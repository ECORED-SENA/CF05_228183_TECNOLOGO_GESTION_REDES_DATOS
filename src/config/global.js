export default {
  global: {
    componenteFormativo: 'Administrar infraestructura tecnológica de red',
    descripcionCurso:
      'Este componente busca facilitar la apropiación de los conocimientos para gestionar la infraestructura tecnológica de red según modelos de referencia y procedimientos técnicos, implementando sistemas de monitoreo según estándares, políticas y recursos de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.png'),
      },
    ],
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
        titulo: 'Análisis y planeación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Preparación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Prevención',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Respuestas',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión y monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Gestión de fallas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Administración de configuración',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Gestión de inventario',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Gestión de <em>software</em>',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión del rendimiento',
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
      tema: '1.1.2 Análisis de Riesgos',
      referencia:
        'Cisco. (2020). CCNA: <em>Switching, Routing, and Wireless Essentials.</em> Cisco Networking Academy.',
      tipo: 'Sitio web',
      link:
        'https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials',
    },
    {
      tema: '2. Gestión y monitoreo',
      referencia:
        'SJteam. (2020). <em>Monitorea tu red sin ser experto en seguridad informática.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Oseq3wh2J4c&ab_channel=SJteam',
    },
    {
      tema: '3. Gestión del rendimiento',
      referencia:
        'Díaz, G., Alzórriz, I., Sancristóbal, E., y Alonso M. (2014). <em>Procesos y herramientas para la seguridad de redes.</em> UNED',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?hl=en&lr=&id=dG4lAwAAQBAJ&oi=fnd&pg=PP1&dq=gesti%C3%B3n+de+la+seguridad+en+redes&ots=N7ZStUK8Eb&sig=cAvWdpzsHjtY4Zvs3VQidyQjkJE&redir_esc=y#v=onepage&q=gesti%C3%B3n%20de%20la%20seguridad%20en%20redes&f=false',
    },
  ],
  glosario: [
    {
      termino: 'Biométrico',
      significado:
        'sistema que utiliza rasgos humanos únicos como medio de seguridad.',
    },
    {
      termino: '<em>Bug</em>',
      significado: 'propiedad no deseada de un sistema.',
    },
    {
      termino: 'DevOps',
      significado:
        'metodología de desarrollo de <em>software</em> que integra las capas de desarrollo, pruebas, implementación, calidad y gestión.',
    },
  ],
  referencias: [
    {
      referencia:
        'Díaz, G., Alzórriz, I., Sancristóbal, E., y Alonso M. (2014). Procesos y herramientas para la seguridad de redes. UNED.',
      link: '',
    },
    {
      referencia:
        'Cisco. (2005). Política de seguridad de la red: informe oficial de mejores prácticas.',
      link:
        'https://www.cisco.com/c/es_mx/support/docs/availability/high-availability/13601-secpol.html',
    },
    {
      referencia:
        'Google Cloud. (2020). Medición de DevOps: notificación proactiva de fallas.',
      link:
        'https://cloud.google.com/solutions/devops/devops-measurement-proactive-failure-notification/?hl=es',
    },
    {
      referencia:
        'Hurtado, C., L., Villarreal-López, E., y Villarreal-López, L. (2016). Detección y diagnóstico de fallas mediante técnicas de inteligencia artificial, un estado del arte. DYNA, 83(199).',
      link: 'https://www.redalyc.org/journal/496/49648868002/html/',
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
          nombre: 'Jorge Eliécer Loaiza Muño',
          cargo: 'Instructor',
          centro:
            'Centros de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Instructor',
          centro:
            'Centros de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Claudia López Arboleda',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Deivis Eduard Ramírez Martíne',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Bogotá D.C.',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de gestión industrial - Regional distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional distrito Capital',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
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
