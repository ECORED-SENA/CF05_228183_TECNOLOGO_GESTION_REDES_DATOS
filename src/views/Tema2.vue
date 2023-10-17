<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión y monitoreo
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/1.jpg', alt='')
      .col-lg-8(data-aos="fade-left")
        p Estos dos conceptos a tratar son totalmente diferentes y se definirán a continuación.
          br
          br
          |La #[b gestión] se refiere al control de los recursos en la red para evitar fallas en su funcionamiento y degradación de los servicios que presta, mientras que el #[b monitoreo] abarca el proceso continuo de recolección y análisis de datos que permitan anticipar inconvenientes en la red.
          br
          br
          |En general, un sistema de gestión y monitoreo de redes permite controlar los recursos #[em software] y #[em hardware] en la red por medio del monitoreo constante a dichos recursos. También permite observar la red completa como una arquitectura única asignando a cada punto las direcciones y etiquetas, con propiedades concretas para cada componente y enlace del sistema conocido.
          br
          br
          |Los elementos básicos de un sistema de gestión y monitoreo de redes se presentan a continuación:
    .row.justify-content-center.mb-3
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color:#CCBCFE ")
          img(src='@/assets/curso/temas/tema2/2.svg', alt='' style="width: 80px").mb-3
          h6 Gestor o estación de gestión
          p Llamado también NMS (#[em Network Monitoring System] - Sistema de Monitoreo de Red) actúa como como interfaz entre el sistema de gestión de red y el administrador de red posee una base de datos de información para gestión de red sacada de las bases de datos de todas las entidades a gestionar en la red. Ejecutan aplicaciones que supervisan, permanentemente, todos los dispositivos.
      .col-lg-6(data-aos="fade-right")
        .tarjeta.p-4.h-100(style="background-color:#CCBCFE ")
          img(src='@/assets/curso/temas/tema2/3.svg', alt='' style="width: 80px").mb-3
          h6 Agente
          p Poseen bases de datos local de información de administración. Es un elemento activo encargado de responder a las solicitudes de acción iniciadas en la estación de gestión y de manera asíncrona, proporciona información importante y no solicitada a la estación de gestión. Se trata de un módulo del #[em software] de gestión de red implantado en los dispositivos a gestionar. Los recursos de red a ser gestionados aparecen como objetos que hacen parte de la MIB (#[em Management Information Base] – Base de Información de Gestión).
    .tarjeta.p-4.h-100(style="background-color:#CCBCFE " data-aos="fade-right").mb-5
      .row.align-items-center
        .col-xl-1.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/tema2/4.svg', alt='' style="width: 80px").mb-2
        .col-xl-10
          h6 Dispositivos administrativos 
          p Recogen y almacenan información de control y monitoreo.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
        p El protocolo SNMP (#[em Simple Network Management Protocol] - Protocolo de gestión de red simple) es el encargado de comunicar la estación de gestión y el agente; dicho protocolo cuenta con las siguientes capacidades clave:
        ul.lista-ul--color
          li.mb-0
            i.fa-solid.fa-diagram-project
            | #[em #[b Get:]] obtener valores específicos del agente por parte de la estación de gestión.

          li.mb-0
            i.fa-solid.fa-diagram-project
            | #[em #[b Set:]] se establecen valores específicos en el agente desde la estación de gestión.

          li.mb-0
            i.fa-solid.fa-diagram-project
            | #[em #[b Notify:]] notificación de eventos significativos desde el agente hacia la estación.
        p A continuación se presentan las áreas funcionales de la gestión de servicio.
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/4.jpg', alt='')
    .m-n.p-5.mb-5(style="background-color: #FEE0E7 ")
      //todo! MAQUETAR LA FIGURA 1 
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 2. 
        span Áreas funcionales de la gestión de servicio
    p.mb-5 Para el monitoreo de la red existen dos esquemas para gestionarla, esto de acuerdo con su tamaño, que se pueden nombrar como: centralizado y descentralizado.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta(style="background-color: #DDE6FE" data-aos="zoom-in").p-5
          h5 Centralizado
          p Existe solo una estación de gestión para el control de los recursos de la red, es utilizado especialmente en las redes de Área Local LAN (#[em Local Area Network]).
          .row.justify-content-center
            .col-lg-8: img(src='@/assets/curso/temas/tema2/5.svg', alt='Representación de una interfaz LAN para un monitoreo de ed centralizada.')
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta(style="background-color: #DDE6FE" data-aos="zoom-in").p-5
          h5 Descentralizado
          p Existen varias estaciones de gestión de alto nivel denominadas servidores de gestión, cada cual puede gestionar directamente una parte de los agentes. Se utiliza especialmente para las redes de Área Amplia WAN (#[em Wide Area Network]).
          .row.justify-content-center
            .col-lg-10: img(src='@/assets/curso/temas/tema2/6.svg', alt='Representación de varias estaciones. Cada una gestiona directamente dispositivos específicos. Lo anterior representa un monitoreo de red descentralizado.')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Gestión de fallas
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/7.jpg', alt='')
      .col-lg-8(data-aos="fade-left")
        p Mantener la conectividad, las aplicaciones y los servicios de una red funcionando a un nivel óptimo es algo imprescindible en la gestión de redes. La gestión de fallas de red ayuda a identificar, evitar y resolver los problemas que pueden dificultar el rendimiento de una red de transmisión digital.
          br
          br
          |Los gastos que pueden acarrear una mala gestión de la red pueden llegar a ser importantes, además de conllevar pérdida de tiempo y rendimiento.
          br
          br
          |La gestión de fallas de la red se hace necesaria, pues mantener y garantizar la continuidad y el funcionamiento de la red se ha vuelto crucial. Una buena gestión de los fallos ofrece vertientes muy positivas, pues permite mantener un rendimiento de red óptimo garantizando la disponibilidad, la minimización de los tiempos de inactividad y la detección temprana de los fallos.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4(style="background-color: #A6EAFE")
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-0 Se pueden definir las fallas o eventos de una red como aquellos sucesos que interfieren en el correcto funcionamiento de la red, y por consiguiente disminuyen significativamente su rendimiento. Los ejemplos de fallos más comunes incluyen fallos en el #[em hardware], en el cableado, interferencia inalámbrica, así como un cambio en el estado del puerto, saturación de ancho de banda o, lo que es peor, la pérdida de conectividad.
            .col-lg-4.col-8
              img(src='@/assets/curso/temas/tema2/8.svg', alt='' style="margin: -50px 0").d-lg-block.d-none
              img(src='@/assets/curso/temas/tema2/8.svg', alt='' ).d-block.d-lg-none
    p.mb-5(data-aos='fade-right') El proceso de gestión de fallas puede verse modificado en cuestión de la plataforma utilizada para ello, pero comúnmente se siguen los siguientes pasos:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--rojo")
      div(titulo="Detectar la localización del fallo")
        p La continua monitorización de la red permite detectar anomalías en el rendimiento de la red o la interrupción del funcionamiento de esta, para ello normalmente se aplica la gestión de fallas activa y/o pasiva de red.
          br
          br
          |Por un lado, la gestión de fallas activa realiza continuas consultas a diferentes elementos de la red en busca de los dispositivos de la red y de su estado. Es decir, la gestión activa está solicitando, constantemente, información para detectar cualquier fallo. Por otro lado, la gestión de fallas pasiva monitorea los entornos de la red para detectar eventos que suceden y que ellos mismos muestran que se ha producido una falla, sin necesidad de recurrir a las continuas consultas que vimos en la gestión activa.
          br
          br
          |En definitiva, la gestión activa pregunta por las fallas a los diferentes elementos de una red. Por el contrario, la gestión pasiva se limita a escuchar, es decir, detectar eventos que indican claramente que se ha producido un fallo. 
      div(titulo="Análisis y aislamiento")
        p Identificar el tipo de evento o falla sucedido en la red que ha producido un impacto y conocer su causa raíz son procesos de los más importantes. Una vez comprendido el problema, el fallo se ha de aislar de la red con el fin de que la red continúe en funcionamiento con normalidad, garantizando de este modo la continuidad en el servicio.
      div(titulo="Informar")
        p Una de las partes muy importantes es la notificación del fallo. Puesto que permite avisar de los problemas a los técnicos de asistencia técnica, a los administradores mediante correo electrónico o SMS, y de forma visual a los administradores de NOC.
      div(titulo="Resolver")
        p  Se evalúa el origen del problema, y en su caso se subsana o se reemplaza. Es importante contar con un buen NMS (#[em Network Management System]) que permita resolver los problemas de forma sencilla y ágil, de forma automática e incluso poder aplicar el mantenimiento preventivo.
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3 Plataformas de administración de redes
    p.mb-5(data-aos='fade-right') Una plataforma para gestionar la red se puede considerar como una aplicación #[em software]  con funcionalidades básicas de gestión para los dispositivos que la conforman.
    .contenido(style="background-color: #E3EEFC; margin-top: 100px" data-aos="zoom-in").p-4.h-100.mb-5
      .contenido-up(style="margin-top: -100px").p-3
        .row.justify-content-center.mb-5
          .col-lg-5.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/tema2/9.svg', alt='' style="width: 295px ").m-auto
            .tarjeta.p-4(style="background-color: #CCBCFE; min-height: 400px")
              p La plataforma debe suministrar funciones básicas entre las cuales se tienen:
              ul.lista-ul--color
                li.mb-0
                  i.fa-solid.fa-diagram-project
                  | Interfaz gráfica de usuario (GUI).

                li.mb-0
                  i.fa-solid.fa-diagram-project
                  | Mapa de red.

                li.mb-0
                  i.fa-solid.fa-diagram-project
                  | Sistema gestor de base de datos (DBMS).
                li.mb-0
                  i.fa-solid.fa-diagram-project
                  | Método estándar de consulta de dispositivos (protocolo).

                li.mb-0
                  i.fa-solid.fa-diagram-project
                  | Menús configurables del sistema.

                li.mb-0
                  i.fa-solid.fa-diagram-project
                  | Registro de eventos (Event Log).
          .col-lg-5.mb-lg-0.mb-3
            .contenido.h-100
              img(src='@/assets/curso/temas/tema2/10.svg', alt='' style="width: 295px ").m-auto
              .tarjeta.p-4(style="background-color: #CCBCFE; min-height: 400px")
                p Igualmente, debe mostrar estas características adicionales:

                ul.lista-ul--color
                  li.mb-0
                    i.fa-solid.fa-diagram-project
                    | Herramienta para gráficos.
                  li.mb-0
                    i.fa-solid.fa-diagram-project
                    | Seguridad del sistema.
    p.mb-5(data-aos='fade-right') En la actualidad existen diferentes plataformas de gestión de redes y estas depende de cada uno de los fabricantes de los componentes o dispositivos de red; de acuerdo con lo anterior, se pueden nombrar las siguientes:
    .row.justify-content-center.align-items-center.mb-lg-3
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.color-primario.p-3.rounded-3
          p.text-center.text-white.mb-0 Air OS Redes inalámbricas Ubiquiti.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.color-primario.p-3.rounded-3
          p.text-center.text-white.mb-0 CiscoView por medio web WWW fabricante Cisco.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.color-primario.p-3.rounded-3
          p.text-center.text-white.mb-0 Netview for AIX (Tivoli) proveedor IBM.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-lg-0.mb-3 
        .tarjeta.color-primario.p-3.rounded-3
          p.text-center.text-white.mb-0 OpenView de HP.
      .col-lg-4.mb-lg-0.mb-3 
        .tarjeta.color-primario.p-3.rounded-3
          p.text-center.text-white.mb-0 Spectrum de Cabletron.
      .col-lg-4.mb-lg-0.mb-3 
        .tarjeta.color-primario.p-3.rounded-3
          p.text-center.text-white.mb-0 SunNet Manager (Solstice), fabricante Sun.
    p.mb-5(data-aos='fade-right') A continuación, se puede visualizar la interfaz gráfica principal donde se visualiza el rendimiento para un radioenlace con equipos Rocket M5 de Ubiquiti, visualizando desde la estación o receptor.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color: #FEE0E7" data-aos="zoom-in")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3. 
            span Interfaz gráfica Rocket M5
          img(src='@/assets/curso/temas/tema2/11.jpg', alt='Captura de pantalla en la que se muestra el rendimiento del fabricante Ubiquiti Networks.')
          figcaption Nota. Tomado de Ubitiqui Networks, Inc. (2006-2013)
    p.mb-5(data-aos='fade-right') De otro lado, se puede observar también para este caso los datos del punto de acceso a la red o transmisor con todas las características del mismo.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color: #FEE0E7" data-aos="zoom-in")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 4. 
            span Resumen información del punto de acceso
          img(src='@/assets/curso/temas/tema2/12.jpg', alt='Captura de pantalla en la que se muestra el resumen de información del punto de acceso de Ubiquiti Networks.')
          figcaption Nota. Tomado de Ubitiqui Networks, Inc. (2006-2013)
    p.mb-5(data-aos='fade-right') A continuación, se muestra en un video los menús de gestión y administración en el sistema Air OS de un radioenlace específico entre dos puntos, realizado con equipos Rocket M5 de Ubiquiti Networks.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video 
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3 Infraestructura de resolución de problemas
    .row.justify-content-center.mb-5
      .col-lg-2.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/13.svg', alt='')
      .col-lg-10
        p La resolución de problemas es el proceso de identificar, hallar y corregir problemas. Los individuos con experiencia suelen seguir su instinto para resolver los problemas; no obstante, existen técnicas estructuradas que se pueden usar para determinar la causa más probable y la solución correspondiente.
          br
          br
          |El siguiente diagrama muestra los procedimientos generales para la resolución de problemas incluyendo las etapas básicas.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color: #FEE0E7" data-aos="zoom-in")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 5. 
            span Resolución de problemas
          img(src='@/assets/curso/temas/tema2/14.svg', alt='Diagrama de flujo para resolución de problemas.')
    p.mb-5(data-aos='fade-right') Al resolver problemas debe completarse la documentación correspondiente y esta documentación debe incluir toda la información posible sobre lo siguiente:
    .row.justify-content-center.mb-5
      .col-xl-4.mb-xl-0.mb-3
        .tarjeta.color-primario.overflow-hidden.d-flex.align-items-center
          img(src='@/assets/curso/temas/tema2/15.svg', alt='' style="width: 100px")
          p.mb-0.mx-3.text-white El problema encontrado.
      .col-xl-4.mb-xl-0.mb-3
        .tarjeta.color-primario.overflow-hidden.d-flex.align-items-center
          img(src='@/assets/curso/temas/tema2/16.svg', alt='' style="width: 100px")
          p.mb-0.mx-3.text-white Los pasos dados para determinar la causa del problema.
      .col-xl-4.mb-xl-0.mb-3
        .tarjeta.color-primario.overflow-hidden.d-flex.align-items-center
          img(src='@/assets/curso/temas/tema2/17.svg', alt='' style="width: 100px")
          p.mb-0.mx-3.text-white  Los pasos para corregir el problema y asegurarse de que no vuelva a ocurrir.
    p.mb-5(data-aos='fade-right') Cuando se informe un problema, se debe verificar y determinar el alcance; una vez confirmado el problema, el primer paso para resolverlo es recopilar información.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4(style="background-color: #A6EAFE")
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-0 #[b Recopilación de información:] recopilar información directamente de los afectados es un buen punto de partida. En las preguntas se pueden incluir los siguientes temas: experiencias del usuario final, síntomas observados, mensajes de error e información sobre cambios recientes de configuración en dispositivos o aplicaciones.
            .col-lg-4.col-8
              img(src='@/assets/curso/temas/tema2/18.svg', alt='' style="margin: -20px 0").d-lg-block.d-none
              img(src='@/assets/curso/temas/tema2/18.svg', alt='' ).d-block.d-lg-none
    p.mb-5(data-aos='fade-right') Hay varias técnicas para resolver problemas, entre ellas:
    .m-n.p-5.mb-5(style="background-color: #fee0e7; margin-top: 200px")
      .contenido(style="margin-top: -200px")
        .row.justify-content-center.mb-5
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta.p-4.d-flex.flex-column.h-100(style="background-color: #b0c5fd; px").w-100
              img(src='@/assets/curso/temas/tema2/19.svg' alt='' style="width: 60px").mb-4
              .texts
                p.mb-0 #[b Descendente:] inicia con la capa de aplicación y sigue hacia abajo. Analiza el problema desde el punto de vista del usuario y de la aplicación.
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta.p-4.d-flex.flex-column.h-100(style="background-color: #b0c5fd; px").w-100
              img(src='@/assets/curso/temas/tema2/20.svg' alt='' style="width: 60px").mb-4
              .texts
                p.mb-0 #[b Ascendente:] empieza con la capa física y sigue hacia arriba. La capa física tiene que ver con el hardware y las conexiones de cables.
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta.p-4.d-flex.flex-column.h-100(style="background-color: #b0c5fd; px").w-100
              img(src='@/assets/curso/temas/tema2/21.svg' alt='' style="width: 60px").mb-4
              .texts
                p.mb-0 #[b Divide y vencerás:] suele comenzar en una de las capas del medio para luego seguir hacia arriba o hacia abajo.
    p.mb-5(data-aos='fade-right') Sumado a lo anterior, también se deben tener en cuenta estos aspectos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
        p #[span.color-morado ¿En qué consiste la técnica "ensayo y error"?]
          br
          |Se basa en el conocimiento individual para determinar la causa más probable del problema. El encargado de resolver problemas supone cuál puede ser la solución más probable según su experiencia previa y sus conocimientos de la estructura de la red. Tras implementar la solución, si no funciona, emplea esta información a fin de determinar la segunda causa más probable; este proceso se repite hasta aislar y solucionar el problema.

          br
          br
          |#[span.color-morado ¿En qué consiste el llamado problema físico?]
          br
          |A continuación, se amplía sobre esta temática y algunos comandos que se usan para la resolución de problemas:
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/22.jpg', alt='').d-lg-block.d-none
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3 Detección de fallas y notificaciones
    .row.justify-content-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/23.jpg', alt='')
      .col-lg-10(data-aos="fade-left")
        p Los procesos actuales, por su complejidad, exigen sistemas de seguridad cada vez más confiables. El mal funcionamiento de los equipos puede provocar pérdidas económicas, peligro para los operarios e inconvenientes para los usuarios, entre otros.
          br
          br
          |La supervisión de procesos es el conjunto de acciones orientadas a asegurar un correcto funcionamiento, incluso en situaciones de riesgo. Un sistema de supervisión debe cumplir tres etapas fundamentales: la detección de fallas, su diagnóstico y el restablecimiento de las condiciones de operación de acuerdo con las especificaciones.
          br
          br
          |De acuerdo con Hurtado et al. (2016), una falla es un cambio en el comportamiento de alguno de los componentes de un sistema, de manera que este ya no puede cumplir con la función para la cual fue diseñado. Los sistemas de detección y diagnóstico de fallas se presentan como una solución que permite determinar el estado de operación del proceso, así como identificar la naturaleza de las fallas presentadas, su localización y riesgo.
          br
          br
          |La figura a continuación muestra un esquema general de un sistema de detección y diagnóstico de fallas.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color: #FEE0E7" data-aos="zoom-in")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 6. 
            span Sistema de detección y diagnóstico de fallas
          img(src='@/assets/curso/temas/tema2/24.svg', alt='Diagrama en el que se muestra el proceso de detección y diagnóstico de fallas para su reconfiguración y control.')
    p.mb-5(data-aos='fade-right') En este esquema, las entradas y salidas del bloque proceso-controlador alimentan un sistema de supervisión encargado de detectar la presencia de fallas y diagnosticar su naturaleza. Con esta información es posible corregir los parámetros del controlador de forma manual o automatizada o intervenir en el proceso para corregir los problemas detectados.
      br
      br
      |Se han propuesto múltiples enfoques para realizar la detección y el diagnóstico de fallas, de los cuales se puede hacer la siguiente clasificación:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
        AcordionA.mb-5.ac(tipo="a" clase-tarjeta="tarjeta tarjeta--morado")
          div(titulo="Métodos basados en modelos matemáticos del proceso")
            p Son estrategias que hacen uso de un modelo formulado a partir del conocimiento de las dinámicas involucradas en el proceso. Se fundamentan en la obtención de una diferencia entre las salidas del proceso y de un modelo del proceso, de donde se infiere la presencia de una falla. Este enfoque representa un costo computacional muy bajo y únicamente puede ser aplicado a procesos donde es posible obtener dicho modelo de forma analítica, lo que limita su aplicación en sistemas no lineales. La obtención de los parámetros del proceso también representa una gran dificultad, la cual puede ser abordada por técnicas de identificación de sistemas.
          div(titulo="Métodos a partir de modelos obtenidos de datos históricos del proceso")
            p Para sistemas donde es posible recolectar numerosos datos representativos de su operación, tanto en condiciones normales como anormales, es posible construir un modelo mediante técnicas como redes neuronales o modelos difusos del tipo Takagi-Sugeno. Estos enfoques son, generalmente, costosos computacionalmente y requieren de grandes volúmenes de datos representativos, los cuales en algunas ocasiones no están disponibles; resultan muy útiles para obtener modelos de sistemas dinámicos no lineales.
          div(titulo="Métodos a partir de datos del proceso")
            p Parten igualmente de grandes volúmenes de datos históricos, pero desde una perspectiva diferente en la que no se busca obtener un modelo del proceso, sino resolver un problema de clasificación. Para este propósito se ha propuesto el uso de clasificadores difusos, análisis de componentes principales, redes neuronales artificiales, máquinas con vectores de soporte, funciones de base radial, entre otras. El principal inconveniente de estas técnicas radica en el costo computacional y en que generalmente operan como un sistema de “caja negra”, incapaz de brindar información adicional sobre la falla.
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/25.jpg', alt='')
    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1(data-aos="fade-right").mb-4
      h3.text-white.mb-0.mx-3 Monitoreo y notificación proactiva de fallas
    p.mb-5(data-aos='fade-right') El monitoreo de red consiste en realizar periódicamente o en tiempo real mediciones del comportamiento de la red, esto mediante el uso de un software para la facilidad y precisión de los informes de estado. Un sistema de monitorización de red busca problemas causados por la sobrecarga y/o fallas en los servidores, como también problemas de la infraestructura de red u otros dispositivos.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4(style="background-color: #A6EAFE")
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-0 Cuando se monitoriza el servidor, y sus servicios en general, es vital para la infraestructura anticiparse ante cualquier inconveniente. Durante este proceso se verifican también los códigos HTTP enviados del servidor, que suelen ser la forma más rápida de verificar el funcionamiento de estos. Así, pues, se envían notificaciones después del proceso anticipado del monitoreo, para que se puedan resolver las fallas en el sistema.
            .col-lg-4
              img(src='@/assets/curso/temas/tema2/26.svg', alt='' style="margin: -20px 0")
    p.mb-5(data-aos='fade-right') La notificación proactiva de fallas consiste en generar notificaciones cuando los valores supervisados se acercan a los umbrales de fallas conocidos y no esperar a que el sistema avise que ya falló o, lo que es peor, descubrir por los clientes que la aplicación o el servicio se encuentran inactivos. Con este enfoque, se puede identificar y resolver problemas antes de que sean graves o comiencen a afectar a los usuarios. Con la 2014 DevOps #[em Research and Assessment] - DORA (Investigación y evaluación de DevOps de 2014 – DORA, (PDF), se demostró que la supervisión proactiva es un predictor importante del rendimiento de la entrega de #[em software]. Según la investigación de DORA, los equipos que usan notificaciones proactivas pueden diagnosticar y resolver problemas con rapidez. Cuando las fallas se informan mediante una fuente externa al equipo de operaciones, como el centro de operaciones de red (NOC) o, peor aún, por parte de los clientes y no mediante la supervisión interna, el rendimiento se ve afectado (Google Cloud, 2020).
    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Administración de configuración
    .row.justify-content-center.mb-5
      .col-lg-2.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/27.svg', alt='')
      .col-lg-10
        p Proceso en el cual se preparan los dispositivos y es en la configuración donde se determina el comportamiento de los datos en la red. La administración enmarca las siguientes funciones: inicializar, desconectar o desactivar de forma ordenada la red o parte de ella, mantenimiento y adición de componentes, reconfigurar, definir o cambiar parámetros de configuración, denominar elementos de la red, conocer qué dispositivos tiene la red y configurar #[em hardware] y #[em software] de dichos dispositivos.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color: #FEE0E7" data-aos="zoom-in")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 7. 
            span Administración de configuración
          img(src='@/assets/curso/temas/tema2/28.svg', alt='Esquema en el que se muestra la administración y monitoreo de redes.')
    p.mb-5(data-aos='fade-right') Para la administración de configuración se tienen las tareas siguientes:
    .row.justify-content-center.mb-lg-3
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-primario.p-3.rounded-3.h-100
          .row.justify-content-center.align-items-center
            .col-2.mb-lg-0.mb-3 
              .tarjeta.rounded-3(style="background-color: #B0C5FD; width: 30px; height: 30px ")
                p.mb-0.text-center 1.
            .col-lg-10
              p.text-white.mb-0 Actualizar el #[em software.]
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-primario.p-3.rounded-3.h-100
          .row.justify-content-center.align-items-center
            .col-2.mb-lg-0.mb-3 
              .tarjeta.rounded-3(style="background-color: #B0C5FD; width: 30px; height: 30px  ").p-1
                p.mb-0.text-center 2.
            .col-lg-10
              p.text-white.mb-0 Controlar versiones de #[em software.]
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-primario.p-3.rounded-3.h-100
          .row.justify-content-center.align-items-center
            .col-2.mb-lg-0.mb-3 
              .tarjeta.rounded-3(style="background-color: #B0C5FD; width: 30px; height: 30px  ").p-1
                p.mb-0.text-center 3.
            .col-lg-10
              p.text-white.mb-0 Definir información de configuración de recursos.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-primario.p-3.rounded-3.h-100
          .row.justify-content-center.align-items-center
            .col-2.mb-lg-0.mb-3 
              .tarjeta.rounded-3(style="background-color: #B0C5FD; width: 30px; height: 30px  ").p-1
                p.mb-0.text-center 4.
            .col-lg-10
              p.text-white.mb-0 Establecer los usuarios que pueden utilizar recursos específicos.
    .row.justify-content-center.mb-lg-3
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-primario.p-3.rounded-3.h-100
          .row.justify-content-center.align-items-center
            .col-2.mb-lg-0.mb-3 
              .tarjeta.rounded-3(style="background-color: #B0C5FD; width: 30px; height: 30px  ").p-1
                p.mb-0.text-center 5.
            .col-lg-10
              p.text-white.mb-0 Inicializar y finalizar los servicios de red
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-primario.p-3.rounded-3.h-100
          .row.justify-content-center.align-items-center
            .col-2.mb-lg-0.mb-3 
              .tarjeta.rounded-3(style="background-color: #B0C5FD; width: 30px; height: 30px  ").p-1
                p.mb-0.text-center 6.
            .col-lg-10
              p.text-white.mb-0 Comprobar la información de configuración en el momento de un ataque, para asegurar que continúa en estado correcto.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-primario.p-3.rounded-3.h-100
          .row.justify-content-center.align-items-center
            .col-2.mb-lg-0.mb-3 
              .tarjeta.rounded-3(style="background-color: #B0C5FD; width: 30px; height: 30px  ").p-1
                p.mb-0.text-center 7.
            .col-lg-10
              p.text-white.mb-0 Modificar propiedades de recursos e informar al usuario de los cambios.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-primario.p-3.rounded-3.h-100
          .row.justify-content-center.align-items-center
            .col-2.mb-lg-0.mb-3 
              .tarjeta.rounded-3(style="background-color: #B0C5FD; width: 30px; height: 30px  ").p-1
                p.mb-0.text-center 8.
            .col-lg-10
              p.text-white.mb-0 Realizar el arranque y parada de componentes específicos de forma remota.
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-4
        .rounded-2(style="background-color: #A6EAFE").h-100
          .tarjeta.color-acento-contenido.p-2.rounded-2
            h4.mb-0.text-white Estándares de configuración
          .p-4
            img(src='@/assets/curso/temas/tema2/29.svg', alt='' style="width: 295px").m-auto
            p.mt-3 En la administración existen herramientas básicas como: monitorear la red para verificar elementos activos, con qué características obtener la información, de qué modo están conectados entre sí los diferentes elementos, esta información se mantiene para ayudar a otras funciones de administración.
      .col-lg-6(data-aos="fade-right").mb-lg-0.mb-3
        .rounded-2(style="background-color: #A6EAFE").h-100
          .tarjeta.color-acento-contenido.p-2.rounded-2
            h4.mb-0.text-white Administración de archivos de configuración
          .p-4
            img(src='@/assets/curso/temas/tema2/30.svg', alt='' style="width: 295px").m-auto
            p.mt-3 Se establece la configuración de los dispositivos activos cambiando la configuración por defecto con la nueva configuración, teniendo esto como la configuración original del dispositivo. Es importante guardar la configuración antes de reiniciar el equipo debido a que se puede perder la configuración en caso contrario.
    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Gestión de inventario
    p.mb-5(data-aos='fade-right') Para la empresa y el administrador de la red es muy valioso conocer el inventario de dispositivos activos de TI o de red que componen la red. Es importante realizar este proceso acompañado de un #[em software] de gestión de inventarios, para conocer de primera mano las altas y bajas de la infraestructura.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-4.rounded-2(style="background-color: #A6EAFE ")
          p Los siguientes se consideran software para gestión de inventario de redes:
          ul.lista-ul--color
            li.mb-0
              i.fa-solid.fa-diagram-project
              | #[b Network Inventory Advisor.]
            li.mb-0
              i.fa-solid.fa-diagram-project
              | #[b Spicework.]

            li.mb-0
              i.fa-solid.fa-diagram-project
              | #[b Lansweeper.]

            li.mb-0
              i.fa-solid.fa-diagram-project
              | #[b Total Network Inventory.]

            li.mb-0
              i.fa-solid.fa-diagram-project
              | #[b Open Audit.]

            li.mb-0
              i.fa-solid.fa-diagram-project
              | #[b EMCO Network Inventory.]
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/31.jpg', alt='')
    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Gestión de software
    .row.justify-content-center.mb-5
      .col-lg-2.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/32.svg', alt='')
      .col-lg-10
        p Al igual que la administración del #[em hardware], es importante conocer el #[em software] que se tiene instalado en la empresa y gestionar las licencias de estos para evitar infracciones legales por #[em software] no licenciado; esta acción ayuda a disminuir el porcentaje de probabilidad de ataques informáticos, robo y/o pérdida de información.













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
