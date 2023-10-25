<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .m-n.p-5(style="background-color: #dde6fe; margin-bottom: 300px")
      .row.justify-content-center.mb-5
        .col-lg-1.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/intro/intro1.svg', alt='')
        .col-lg-11: p La gestión y mantenimiento de una red es un proceso que requiere conocimiento técnico, metodológico y conceptual; en este componente se abordarán temas sobre estándares, políticas, análisis de riesgos y fallas, entre otros, que implican la contextualización de lo aprendido. El siguiente video presenta de manera genérica e introductoria en qué consiste la administración de una infraestructura tecnológica de red.
      figure(style="margin-bottom: -300px")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/n_OeoUlLoRI?si=L9eQgpC0y7NaMg-5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Administrar infraestructura tecnológica de red
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
