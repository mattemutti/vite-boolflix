<script>

import { state } from './state'

export default {

  name: 'App', 	// nome del componente

  data() {
    return {
      state,
      message: 'By'
    }
  },
  methods: {
    // qui le funzioni
  },
  mounted() {
    // qui i log nell hook mounted
  }
}
</script>
<template>

  {{ state.message }}

</template>
<style></style>