<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión del rendimiento
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema3/1.jpg', alt='')
      .col-lg-8
        p El activo más importante de la infraestructura de tecnologías de la información de toda organización es la red y en gran medida dependen de internet y sus aplicaciones. Es muy importante monitorear y mejorar el rendimiento de la red para que los usuarios finales no se vean afectados por los inconvenientes que haya en esta, y mantener en óptimo funcionamiento los sistemas, garantizando también que se mantengan los acuerdos de nivel de servicio (SLA) y que se presten de forma oportuna soluciones empresariales críticas.
          br
          br
          |Las redes están expuestas a muchos errores que afectan su rendimiento, es necesario entonces supervisar de forma proactiva para detectar problemas y evitar contratiempos, garantizando así un buen funcionamiento de las aplicaciones críticas. El monitoreo proactivo involucra diagnosticar y solucionar problemas de red antes de que sean notorios para el usuario final y eliminar las amenazas.
          br
          br
          |A continuación se exponen algunos aspectos en la gestión del rendimiento.
    .card-icon.mb-3(data-aos="fade-right")
      .card-icon__icon: img(src='@/assets/curso/temas/tema3/2.svg', alt='')
      .card-icon__content
        h5 Acuerdo de nivel de servicio
        p Es un contrato pactado entre el proveedor de servicios y los clientes internos o externos donde se mencionan los servicios adquiridos y/o prestados por el proveedor, además define los estándares que el proveedor va a implementar en sus servicios.
    .card-icon.mb-3(data-aos="fade-right")
      .card-icon__icon: img(src='@/assets/curso/temas/tema3/3.svg', alt='')
      .card-icon__content
        h5 Gestión de la seguridad
        p La seguridad en los elementos #[em hardware] o físicos existentes y en los elementos #[em software] existentes en la red, son dos puntos clave que se deben tratar o emplear, debido a que el mundo está repleto de sistemas, y cada día se implementan muchos más, dejando a la sociedad más expuesta a ataques, pérdidas de información, violación de sus datos financieros, suplantación de datos para fines no legales, entre infinidad de opciones de inseguridad informática.
    .card-icon.mb-3(data-aos="fade-right")
      .card-icon__icon: img(src='@/assets/curso/temas/tema3/4.svg', alt='')
      .card-icon__content
        h5 Autenticación

        p Es el proceso que se encarga de validar la existencia de un usuario dentro de un sistema, se puede llevar a cabo mediante la implementación de usuario y contraseña; este usuario puede ser el número de documento del usuario, #[em email], #[em nickname] (o nombre de usuario).
          br
          br
          |Otro mecanismo de autenticación puede ser biométrico, por huella dactilar, lector del iris, detección del rostro entre otros, este tipo de autenticación está siendo utilizado por los grandes fabricantes de dispositivos móviles, quienes a menudo se preocupan por la seguridad de los sistemas y también por la velocidad de respuesta de estos mecanismos.
    .card-icon.mb-5(data-aos="fade-right")
      .card-icon__icon: img(src='@/assets/curso/temas/tema3/5.svg', alt='')
      .card-icon__content
        h5 Autorización
        p Es el proceso que se lleva a cabo después de la autenticación en un sistema informático, la autorización es la encargada de permitir o prohibir el acceso de los usuarios a diferentes módulos.
    p.mb-5(data-aos='fade-right') En la gestión de la seguridad, de acuerdo con Alonso et al. (2014), se deben tener en cuenta dos categorías: tipos de ataques y tipos de defensas.
      br
      br
      |Al igual que en el cuerpo humano, los sistemas sufren ataques (enfermedades) y el sistema (cuerpo) debe estar listo ante uno o muchos, es lógico mencionar que no se puede evitar dicho ataque al 100% mediante medidas (medicamentos) pero sí sufrir el menor porcentaje de daño posible o lograr un punto tolerable en el sistema, entre los ataques más comunes y las defensas están:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.color-primario.overflow-hidden.h-100
          img(src='@/assets/curso/temas/tema3/6.jpg', alt='').mb-4
          .p-4.text-white 
            h5 Ataques más comunes
            ul.lista-ul
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Ataque para obtener información.
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Ataque de acceso no autorizado.
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Ataque con revelación de información.
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Ataque de denegación de servicio.
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.color-primario.overflow-hidden
          img(src='@/assets/curso/temas/tema3/7.jpg', alt='').mb-4
          .p-4.text-white 
            h5 Defensas para estas amenazas
            ul.lista-ul
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Esquema de seguridad de sistemas operativos.
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Identificación o autenticación seguras.
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Cortafuegos (#[em firewalls]).
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Criptografía.
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Antivirus.
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Análisis de vulnerabilidades.
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Sistema de detección de intrusos.
              li.mb-0
                i.fas.fa-circle.fa-xs
                | Estándares para sistemas de gestión de seguridad.


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
