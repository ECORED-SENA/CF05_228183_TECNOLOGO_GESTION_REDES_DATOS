<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Análisis y planeación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/1.jpg', alt='')
      .col-lg-8 
        p Si no existe una política de seguridad, la disponibilidad de la red puede verse comprometida. Por ello, se debe iniciar por evaluar los riesgos que tenga la red y pensar en crear un equipo de respuesta; luego, se realizará la implementación de la administración de la seguridad y supervisión de la red para detectar violaciones de seguridad; finalmente, con la revisión o supervisión, se deben realizar las modificaciones a que haya lugar y adaptarla a las exigencias de los posibles ataques que se puedan presentar.
          br
          br
          |Durante el análisis y planeación de las políticas de seguridad se enmarcan tres fases globales que son: #[b preparación, prevención y restauración.]
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Preparación
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4(style="background-color: #a6eafe")
          .row.justify-content-center
            .col-lg-7.mb-lg-0.mb-3.mb-lg-0.mb-3
              p Según el informe oficial de mejores prácticas para políticas de seguridad de la red de Cisco (2005), para implementar una política de seguridad previamente se debe hacer lo siguiente:
              ul.lista-ul--color
                li.mb-0
                  i.fa-solid.fa-diagram-project
                  b Crear las declaraciones de política de uso.
                li.mb-0
                  i.fa-solid.fa-diagram-project
                  b Realizar un análisis de riesgo.
                li.mb-0
                  i.fa-solid.fa-diagram-project
                  b Establecer una estructura de equipo de seguridad.
            .col-lg-4.col-8: img(src='@/assets/curso/temas/tema1/2.svg', alt='' style="margin-bottom: -400px").d-lg-block.d-none
            .col-lg-4.col-8: img(src='@/assets/curso/temas/tema1/2.svg', alt='' ).d-block.d-lg-none
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3 Declaración de políticas de uso
    p.mb-5(data-aos='fade-right') Documento donde se detallan los roles y responsabilidades de usuarios referente a la seguridad. A continuación se describe el proceso de esta práctica.
    .tarjeta-fondo-slyder.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-lg-6.mb-4.mb-md-0
            p Se inicia con una política general que incluye todo el sistema de red y datos al interior de la empresa o institución; suministra a los usuarios los elementos básicos de la política de seguridad, su propósito, las guías de consulta para mejores prácticas de seguridad y la definición de las responsabilidades en cuanto a la seguridad.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/3.svg', alt='text alt')
        .row
          .col-lg-6.mb-4.mb-md-0
            p Luego, se crea una declaración de uso aceptable que provea a las personas las nociones básicas de información útil y disponible de la misma. Debe explicar, claramente, cualquier acto específico que se haya identificado como ataques a la seguridad y las acciones punitivas que serán tomados si se detecta un ataque a la seguridad (Cisco, 2005).
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/4.svg', alt='text alt')
        .row
          .col-lg-6.mb-4.mb-md-0
            p Por último, se establece la declaración de uso admisible del administrador que ayude a explicar los procedimientos para la administración de cuentas de usuario, aplicación de políticas y revisión de privilegios. La empresa debe presentar claramente las políticas específicas relativas a las contraseñas de usuario o al manejo posterior de datos adquiridos por dichos usuarios (Cisco, 2005)
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/5.svg', alt='text alt')
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3 Análisis de riesgos
    p.mb-5(data-aos='fade-right') En Cisco (2005), se menciona que el análisis de riesgos debe identificar los riesgos en la red, junto con los recursos de red, los datos, y sus partes, asignar una calificación de amenaza para cada parte, y aplicar un nivel adecuado de seguridad, lo cual permitirá mantener un equilibrio viable entre la seguridad y el acceso necesario a la red.
      br
      br
      |Para ello, se tiene en cuenta la asignación de los niveles de riesgo por recurso de red, los cuales pueden ser: bajo, medio y alto. Luego, con esta información se realizará una matriz de seguridad. A continuación se amplía cada uno de los niveles de riesgo.
    .m-n.p-5.mb-5(style="background-color: #fee0e7; margin-top: 400px")
      .contenido(style="margin-top: -400px")
        .row.justify-content-center.mb-5
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta.p-4.d-flex.flex-column.h-100.align-items-center(style="background-color: #b0c5fd; margin-top: 30px").w-100
              img(src='@/assets/curso/temas/tema1/6.svg' alt='' style="width: 273px; margin-top: -70px").mb-4
              .texts
                h5 Bajo riesgo
                p Datos que de verse comprometidos (datos observados por el personal no autorizado, datos corruptos o datos perdidos), no se interrumpiría el servicio ni causaría problemas económicos y legales. En este caso la información, el dispositivo o los datos se pueden recuperar fácilmente y no permite el acceso adicional de otros sistemas.
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta.p-4.d-flex.flex-column.h-100.align-items-center(style="background-color: #b0c5fd; margin-top: 30px").w-100
              img(src='@/assets/curso/temas/tema1/7.svg' alt='' style="width: 273px; margin-top: -70px").mb-4
              .texts
                h5 Riesgo medio
                p Los datos que sí estuvieron comprometidos (los datos vistos por el personal no autorizado, los datos corrompidos o los datos perdidos) causarían una interrupción leve en el servicio, problemas legales y económicos de menor importancia, o proporcionan el acceso adicional a otros sistemas. El dispositivo o los datos requieren un esfuerzo leve para restaurarse o el proceso de restauración perturba el sistema.
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta.p-4.d-flex.flex-column.h-100.align-items-center(style="background-color: #b0c5fd; margin-top: 30px").w-100
              img(src='@/assets/curso/temas/tema1/8.svg' alt='' style="width: 273px; margin-top: -70px").mb-4
              .texts
                h5 Riesgo alto
                p Datos que de verse comprometidos (datos observados por el personal no autorizado, datos corruptos o datos perdidos), pueden causar interrupción extrema en el servicio y originarían problemas económicos o legales importantes, o amenazaría la integridad o la seguridad de una persona. El proceso de restauración requiere demasiado esfuerzo y ocasiona perturbaciones en el sistema.
    p.mb-5(data-aos='fade-right')  Tan pronto se haya asignado el nivel de riesgo, es importante identificar los tipos de usuarios del sistema, entre los más comunes y que se pueden diferenciar son:
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        .h-100(style="background-color: #1E5AF9; border-radius: 0px 0px 10px 10px ")
          img(src='@/assets/curso/temas/tema1/9.jpg', alt='')
          .p-4
            p.text-white.mb-0 #[b Usuarios internos:] usuario administrador responsable de los recursos de red, usuario privilegiado con mayor acceso o usuario con acceso general.
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        .h-100(style="background-color: #1E5AF9; border-radius: 0px 0px 10px 10px ")
          img(src='@/assets/curso/temas/tema1/10.jpg', alt='')
          .p-4
            p.text-white.mb-0 #[b Usuarios externos:] usuarios con acceso a algunos recursos, otros usuarios externos o clientes.
    p.mb-5(data-aos='fade-right') Luego, al identificar tanto el nivel de riesgo como el tipo de acceso necesario de cada sistema de red, es importante construir la matriz de seguridad, la cual proporciona una referencia rápida para cada sistema y es el punto de partida para otras medidas de seguridad, como crear la estrategia adecuada para restringir el acceso a los recursos de red.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1. 
          span Matriz de seguridad
        .tabla-a.color-acento-botones.mb-5
          table
            thead(style="border-top: 0")
              tr(style="background-color: #E9E2FF")
                th Sistema
                th Descripción
                th Nivel de riesgo
                th Tipos de usuario
            tbody
              tr
                td #[em Switches] ATM
                td Dispositivo del núcleo de red
                td Alto
                td Administrador para configurar el dispositivo (solo equipo de soporte técnico); los demás para usar como transporte
              tr
                td #[em Routers] de la red
                td Dispositivo de distribución de red
                td Alto
                td Administrador para configurar el dispositivo (solo equipo de soporte técnico); los demás para usar como transporte
              tr
                td #[em Firewall]
                td Dispositivo de red de acceso
                td Alto
                td Administrador para configurar el dispositivo (solo equipo de soporte técnico); los demás para usar como transporte
              tr
                td Bases de datos Oracle
                td Aplicación de red
                td Alto o moderado
                td Administrador para administrar el sistema; usuarios con privilegios para actualización de datos; usuarios generales para acceso de datos; los demás para acceso a datos parciales
              tr
                td #[em Switches] en #[em rack]
                td Dispositivo de red de acceso
                td Medio
                td Administrador para configurar el dispositivo (solo equipo de soporte técnico); los demás para usar como transporte.
              tr
                td ISDN o servidores de marcación rápida
                td Dispositivo de red de acceso
                td Medio
                td Administrador para configurar el dispositivo (solo equipo de soporte técnico); usuarios con privilegios para acceso especial.
              tr
                td Servidor interno de correo electrónico
                td Aplicación de red
                td Medio
                td Administrador para configuración; los demás usuarios para uso interno.
              tr
                td DN y servidores DHC
                td Aplicaciones de red
                td Medio
                td Administradores para configuración; usuarios con privilegios y generales para uso de los servidores.
              tr
                td Servidor externo de correo electrónico
                td Aplicación de red
                td Bajo
                td Administrador para configuración; los demás para transporte de correo entre Internet y el servidor de correo interno
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3 Establecer una estructura de equipo de seguridad
    p.mb-5(data-aos='fade-right') Se debe crear un equipo de seguridad funcional, liderado por un administrador de seguridad, en el que participen cada una de las áreas operativas de la empresa. Los representantes en el equipo deben conocer la política de seguridad y los aspectos técnicos del diseño y de la implementación de seguridad y se requiere, entonces, capacitación adicional para los miembros del equipo. La siguiente figura presenta una estructura del equipo de seguridad de acuerdo a su función.
    .m-n.p-5.mb-5(style="background-color: #FEE0E7")
      .row.justify-content-center
        .col-lg-10
          img(src='@/assets/curso/temas/tema1/11.svg', alt='')
    p.mb-5(data-aos='fade-right') Sumado a esto, el equipo de seguridad posee tres áreas de responsabilidad: elaboración de políticas, práctica y respuesta.
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right").mb-lg-0.mb-3
        .h-100(style="background-color: #1E5AF9; border-radius: 0px 0px 10px 10px ")
          img(src='@/assets/curso/temas/tema1/12.png', alt='')
          p.text-white.mb-0.p-4 #[b Elaboración de políticas:] está centrada en establecer y revisar las políticas de seguridad para la compañía, es necesario revisar brevemente el análisis de riesgos y la política de seguridad anualmente.
      .col-lg-4(data-aos="fade-right").mb-lg-0.mb-3.h-100
        .h-100(style="background-color: #1E5AF9; border-radius: 0px 0px 10px 10px ")
          img(src='@/assets/curso/temas/tema1/13.png', alt='')
          p.text-white.mb-0.p-4 #[b Práctica:] es la etapa en la que el equipo de seguridad realiza el análisis de riesgos, aprueba las solicitudes de cambio de seguridad, revisa las alertas de seguridad de los proveedores y la lista de correo CERT (#[em Critical Emergency Response Team]). También debe convertir los requisitos de la política de seguridad en implementaciones técnicas específicas con lenguaje sencillo.
      .col-lg-4(data-aos="fade-right").mb-lg-0.mb-3.h-100
        .h-100(style="background-color: #1E5AF9; border-radius: 0px 0px 10px 10px ")
          img(src='@/assets/curso/temas/tema1/14.png', alt='')
          p.text-white.mb-0.p-4 #[b Respuesta:] mientras que la supervisión de red identifica las violaciones de seguridad, es al equipo de seguridad quien le corresponde realizar la solución de problemas y la corrección de dichas violaciones. Cada uno de los miembros del equipo de seguridad debe conocer detalladamente las funciones de seguridad proporcionadas por el equipo en su área operativa.
    p.mb-5(data-aos='fade-right') Una vez definidas las responsabilidades de equipo, se deben establecer las funciones individuales y responsabilidades de cada uno de los miembros del equipo de seguridad.
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Prevención
    p.mb-4(data-aos='fade-right') La prevención se puede dividir en dos partes: cambios en la seguridad y vigilar la seguridad de red.
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3 Cambios en la seguridad
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/15.jpg', alt='')
      .col-lg-8
        p Están definidos como los cambios al equipo de red que impliquen un posible impacto en la seguridad general de la red. La política de seguridad debe identificar requisitos de configuración de seguridad específicos, en términos no técnicos. Es decir, en lugar de definir un requisito como “Ninguna conexión al FTP de las fuentes externas se permitirá a través del #[em firewall”], se debe definir el requisito como “Las conexiones externas no deben extraer archivos de la red interna” (Cisco, 2005).
          br
          br
          |El equipo debe definir un conjunto único de requisitos para la organización, entre los cuales está el de revisar la lista de requisitos de lenguaje sencillo para identificar la configuración de red o los problemas de diseño específicos que cumplan los requisitos. Una vez creados estos cambios en las configuraciones de la red requerida para implementar la política de seguridad, se pueden aplicar a cualquier cambio de configuración posterior.
          br
          br
          |El equipo de seguridad debe revisar los siguientes cambios y cumplir con las siguientes guías de consulta.
    .m-n.p-5.mb-5(style="background-color: #fee0e7; margin-top: 400px")
      .contenido(style="margin-top: -400px")
        .row.justify-content-center.mb-5
          .col-lg-6.mb-lg-0.mb-3
            .tarjeta.p-4.h-100(style="background-color: #b0c5fd; margin-top: 30px").w-100
              .d-flex.justify-content-center
                img(src='@/assets/curso/temas/tema1/16.svg' alt='' style="width: 273px; margin-top: -70px").mb-4
              .texts
                h6 Cambios de prevención
                ul.lista-ul--color
                  li.mb-0
                    i.fa-solid.fa-diagram-project
                    | Cambios la configuración #[em firewall.]

                  li.mb-0
                    i.fa-solid.fa-diagram-project
                    | Cambio en las listas de control de acceso (ACL).
                  li.mb-0
                    i.fa-solid.fa-diagram-project
                    | Cambios en la configuración del #[em Simple Network Management Protocol (SNMP).]
                  li.mb-0
                    i.fa-solid.fa-diagram-project
                    | Cambio o actualización en el #[em software] que sea diferente al del listado de nivel de revisión de #[em software] aprobado.
          .col-lg-6.mb-lg-0.mb-3
            .tarjeta.p-4.h-100(style="background-color: #b0c5fd; margin-top: 30px").w-100
              .d-flex.justify-content-center
                img(src='@/assets/curso/temas/tema1/17.svg' alt='' style="width: 273px; margin-top: -70px").mb-4
              .texts
                h6 Guías de consulta 
                ul.lista-ul--color
                  li.mb-0
                    i.fa-solid.fa-diagram-project
                    | Cambiar habitualmente las contraseñas de los dispositivos de red.
                  li.mb-0
                    i.fa-solid.fa-diagram-project
                    | Restringir el acceso a los dispositivos de red a una lista aprobada de personas.

                  li.mb-0
                    i.fa-solid.fa-diagram-project
                    | Asegurar que los niveles de revisión del #[em software] actual del equipo de red y de los entornos de servidor cumplan con los requisitos de configuración de seguridad.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-4
          .row.justify-content-center
            .col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/18.svg', alt='' style="width: 110px").m-auto
            .col-lg-10
              p.text-white.fw-bold Además de lo mencionado anteriormente, sería importante incluir a un representante del equipo de seguridad en la junta de aprobación de administración de cambios, para que supervise los cambios que revisa la junta. El representante del equipo de seguridad tiene la potestad para negar cualquier cambio que se considere cambio de seguridad hasta que haya sido aprobado por el equipo de seguridad.
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3 Vigilar la seguridad de red
    .row.justify-content-center.mb-5
      .col-lg-2.col-5: img(src='@/assets/curso/temas/tema1/19.svg', alt='')
      .col-lg-10 
        p #[b “La supervisión de seguridad es similar a la supervisión de red, a menos que se centre en la detección de los cambios en la red que indican una violación de seguridad”] (Cisco, 2005). Con la supervisión de la seguridad se puede determinar cuál es la violación y, al realizar el análisis de riesgo, es posible identificar el nivel de supervisión necesario en términos de la amenaza para el sistema; de otra parte, al aprobar los cambios de seguridad se identifican las amenazas concretas para la red y todos estos parámetros permiten desarrollar con claridad lo que se necesita supervisar y con qué frecuencia.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4(style="background-color: #CCBCFE")
          .row.justify-content-center.align-items-center
            .col-lg-4
              img(src='@/assets/curso/temas/tema1/20.png', alt='' style="margin: -50px 0")
            .col-lg-8
              p.mb-0 En la matriz del análisis de riesgos, el #[em firewall] se considera un dispositivo de red de riesgo elevado, esto indica que debe supervisar en tiempo real. La sección aprobación de los cambios de seguridad específica que debe supervisar cualquier cambio al #[em firewall]. Esto significa que el agente de la consulta SNMP debe supervisar intentos fallidos de ingreso al sistema, tráfico inusual, cambios al #[em firewall], acceso concedido al #[em firewall], y configuración de conexiones a través del #[em firewall] (Cisco, 2005).
    p.mb-5(data-aos='fade-right') Con el ejemplo anterior, se asegura la posibilidad de crear una política de monitorización para cada área identificada en el análisis de riesgos. Es recomendable supervisar, cada semana, el equipo de bajo riesgo; a diario, el equipo de riesgo moderado; y cada hora, el equipo de riesgo elevado. Si por cualquier eventualidad se requiere una detección más rápida, se debe supervisar en intervalos más cortos de tiempo.
      br
      br
      |Como última recomendación, la política de seguridad debe poder notificar al equipo de seguridad sobre las violaciones de seguridad. Normalmente, el #[em software] de supervisión de red es quien, en primera instancia, detecta la violación con acciones de notificación al centro de operaciones y al equipo de seguridad, y si se necesita hacer uso de un localizador.
    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Respuestas
    p.mb-5(data-aos='fade-right') Para abordar la temática de respuesta se puede enmarcar en tres aspectos: violaciones de seguridad, restauración y revisión.
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3 Violaciones de seguridad
    p.mb-5(data-aos='fade-right') Al detectar una violación se hace necesario tomar decisiones de forma muy rápida que permitan proteger el equipo de red, determinar el fragmento de intrusión, recuperar las operaciones normales del sistema y la respuesta a una intrusión sea más viable. El primer paso a realizar después de detectada una intrusión es notificar al equipo de seguridad. Por lo tanto, debe existir un procedimiento adecuado en la política de seguridad que aplique la respuesta adecuada y que, además, esté disponible las 24 horas del día, los siete días de la semana.
      br
      br
      |El nivel de autoridad dado al equipo de seguridad debe estar definido de tal manera que se pueda realizar los cambios, indicando el orden de los mismos, estas acciones correctivas son:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/21.svg' alt='')
          .tarjeta.color-primario.w-100
            .p-4
              p.text-white.fw-bold Aislar, desconectar y apagar los sistemas que han sido violados o la fuente de la violación.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/22.svg' alt='')
          .tarjeta.color-primario.w-100
            .p-4
              p.text-white.fw-bold Establecer contacto con el portador o el ISP en un intento de localizar el ataque.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/23.svg' alt='')
          .tarjeta.color-primario.w-100
            .p-4
              p.text-white.fw-bold Implementar cambios para prevenir accesos adicionales a la violación.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/24.svg' alt='')
          .tarjeta.color-primario.w-100
            .p-4
              p.text-white.fw-bold Notificar al personal del área legal administrativa interna.
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/25.svg' alt='')
          .tarjeta.color-primario.w-100
            .p-4
              p.text-white.fw-bold Restaurar los sistemas según la lista de prioridades.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/26.svg' alt='')
          .tarjeta.color-primario.w-100
            .p-4
              p.text-white.fw-bold Tener comunicación directa con la policía, y otros organismos gubernamentales.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/27.svg' alt='')
          .tarjeta.color-primario.w-100
            .p-4
              p.text-white.fw-bold Utilizar dispositivos de grabación para obtener pruebas.
    p.mb-5(data-aos='fade-right') Es importante detallar cualquier cambio que se haya realizado sin la aprobación administrativa en la política de seguridad, de tal forma que se pueda determinar el grado en que se vio comprometido el sistema por el ataque a la seguridad, y procesar también las violaciones externas.
      br
      br
      |A continuación, se relacionan algunos aspectos a tener en cuenta para determinar el grado de violación.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color: #A6EAFE ")
          ul.lista-ul--color
            li.mb-0
              i.fa-solid.fa-diagram-project
              | Registrar el evento al obtener los rastros del espía de la red, los archivos del registro, los usuarios activos, y las conexiones de red.
      
            li.mb-0
              i.fa-solid.fa-diagram-project
              | Inhabilitar las cuentas, desconectar de la red y de internet para limitar cualquier compromiso adicional.

      
            li.mb-0
              i.fa-solid.fa-diagram-project
              | Realizar una copia de seguridad del sistema implicado, ayudando a analizar, detalladamente, el daño y el método de ataque.

      
            li.mb-0
              i.fa-solid.fa-diagram-project
              | Buscar qué otros sistemas o cuentas fueron comprometidos en el ataque.

      
            li.mb-0
              i.fa-solid.fa-diagram-project
              |  Conservar y revisar, constantemente, los archivos de registro de dispositivos de seguridad y de supervisión de red pues son de gran ayuda al proporcionar pistas sobre el método de ataque.
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3  Restauración
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4(style="background-color: #CCBCFE")
          .row.justify-content-center.align-items-center
            .col-lg-4
              img(src='@/assets/curso/temas/tema1/28.png', alt='' style="margin:  -50px 0")
            .col-lg-8
              p.mb-0 Restaurar el funcionamiento normal de la red es el objetivo final de la respuesta a una violación de seguridad; en la política de seguridad se debe definir cómo realizar y conservar las copias de seguridad disponibles, detallar para cada sistema las condiciones de seguridad que requiere la restauración de estas copias y si se necesita aprobación previa, se debe incluir el proceso para obtener la aprobación.
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3 Revisión
    p.mb-5(data-aos='fade-right') El proceso de revisión es el esfuerzo final para crear y mantener una política de seguridad. Hay tres aspectos que se deben revisar:
    .m-n.p-5.mb-5(style="background-color: #fee0e7; margin-top: 400px")
      .contenido(style="margin-top: -400px")
        .row.justify-content-center.mb-5
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta.p-4.d-flex.flex-column.h-100.align-items-center(style="background-color: #b0c5fd; margin-top: 30px").w-100
              img(src='@/assets/curso/temas/tema1/29.svg' alt='' style="width: 273px; margin-top: -70px").mb-4
              .texts
                h5 Política
                p Debe ser dinámica y adaptativa a un entorno evolutivo. Para mantener la red actualizada es importante revisar la política existente contra las mejores prácticas conocidas. Controlar el sitio web permitirá saber si hay consejos útiles, prácticas, mejoras de la seguridad y alertas que se puedan incorporar a la política de seguridad.
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta.p-4.d-flex.flex-column.h-100.align-items-center(style="background-color: #b0c5fd; margin-top: 30px").w-100
              img(src='@/assets/curso/temas/tema1/30.svg' alt='' style="width: 273px; margin-top: -70px").mb-4
              .texts
                h5 Postura
                p Los datos que sí estuvieron comprometidos (los También se debe comparar la postura de la red con la postura de seguridad deseada, pues en cualquier momento, un ente externo especialista en seguridad puede intentar penetrar en la red y probar la postura de la red y la respuesta de seguridad de la organización. Es recomendable para las redes de alta disponibilidad, realizar esta prueba cada año.
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta.p-4.d-flex.flex-column.h-100.align-items-center(style="background-color: #b0c5fd; margin-top: 30px").w-100
              img(src='@/assets/curso/temas/tema1/31.svg' alt='' style="width: 273px; margin-top: -70px").mb-4
              .texts
                h5 Práctica
                p Se especifica como una prueba o ejercicio del equipo de soporte técnico, con esto se podría asegurar que poseen los conocimientos necesarios durante una violación de seguridad. No es requisito notificar este ejercicio por parte de la administración y se puede realizar en conjunto con la prueba de postura de la red. Aquí se identifican los tiempos en los procedimientos y la capacidad del personal para tomar acciones correctivas.
































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
