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
      h2 1.1. Preparación
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
            .col-lg-4.col-8: img(src='@/assets/curso/temas/tema1/2.svg', alt='' style="margin-bottom: -400px")
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
              img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop' style="width: 273px; margin-top: -70px").mb-4
              .texts
                h5 Bajo riesgo
                p Datos que de verse comprometidos (datos observados por el personal no autorizado, datos corruptos o datos perdidos), no se interrumpiría el servicio ni causaría problemas económicos y legales. En este caso la información, el dispositivo o los datos se pueden recuperar fácilmente y no permite el acceso adicional de otros sistemas.
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta.p-4.d-flex.flex-column.h-100.align-items-center(style="background-color: #b0c5fd; margin-top: 30px").w-100
              img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop' style="width: 273px; margin-top: -70px").mb-4
              .texts
                h5 Riesgo medio
                p Los datos que sí estuvieron comprometidos (los datos vistos por el personal no autorizado, los datos corrompidos o los datos perdidos) causarían una interrupción leve en el servicio, problemas legales y económicos de menor importancia, o proporcionan el acceso adicional a otros sistemas. El dispositivo o los datos requieren un esfuerzo leve para restaurarse o el proceso de restauración perturba el sistema.
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta.p-4.d-flex.flex-column.h-100.align-items-center(style="background-color: #b0c5fd; margin-top: 30px").w-100
              img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop' style="width: 273px; margin-top: -70px").mb-4
              .texts
                h5 Riesgo alto
                p Datos que de verse comprometidos (datos observados por el personal no autorizado, datos corruptos o datos perdidos), pueden causar interrupción extrema en el servicio y originarían problemas económicos o legales importantes, o amenazaría la integridad o la seguridad de una persona. El proceso de restauración requiere demasiado esfuerzo y ocasiona perturbaciones en el sistema.
    p.mb-5(data-aos='fade-right')  Tan pronto se haya asignado el nivel de riesgo, es importante identificar los tipos de usuarios del sistema, entre los más comunes y que se pueden diferenciar son:








































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
