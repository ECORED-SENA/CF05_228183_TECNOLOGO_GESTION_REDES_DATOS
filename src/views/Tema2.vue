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
      .col-lg-8
        p Estos dos conceptos a tratar son totalmente diferentes y se definirán a continuación.
          br
          br
          |La #[b gestión] se refiere al control de los recursos en la red para evitar fallas en su funcionamiento y degradación de los servicios que presta, mientras que el monitoreo abarca el proceso continuo de recolección y análisis de datos que permitan anticipar inconvenientes en la red.
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
          img(src='@/assets/curso/temas/tema2/2.svg', alt='' style="width: 80px").mb-3
          h6 Agente
          p Poseen bases de datos local de información de administración. Es un elemento activo encargado de responder a las solicitudes de acción iniciadas en la estación de gestión y de manera asíncrona, proporciona información importante y no solicitada a la estación de gestión. Se trata de un módulo del #[em software] de gestión de red implantado en los dispositivos a gestionar. Los recursos de red a ser gestionados aparecen como objetos que hacen parte de la MIB (#[em Management Information Base] – Base de Información de Gestión).
    .tarjeta.p-4.h-100(style="background-color:#CCBCFE ")
      .row.justify-content-center.align-items-center
        .col-1.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/tema2/2.svg', alt='' style="width: 80px")
        .col-lg-10
          h6 Gestor o estación de gestión
          p Llamado también NMS (#[em Network Monitoring System] - Sistema de Monitoreo de Red) actúa como como interfaz entre el sistema de gestión de red y el administrador de red posee una base de datos de información para gestión de red sacada de las bases de datos de todas las entidades a gestionar en la red. Ejecutan aplicaciones que supervisan, permanentemente, todos los dispositivos.

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
