<template>
    <div class="pdfview" ref="pdfHolder"></div>
</template>

<script>
  import pdfObj from '../lib/pdfobject.min.js'

  export default {
    name: 'pdfview',
    props: ['pdfSrc'],

    data: () => ({
      pdf: pdfObj,
    }),

    methods: {},
    mounted () { this.pdf.embed(this.pdfSrc, this.$refs.pdfHolder) },
  }
</script>

<style></style>