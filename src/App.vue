<script>

import { state } from './state';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {

  name: 'App',

  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      state,
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

  <AppHeader />
  <AppMain />

</template>
<style></style>