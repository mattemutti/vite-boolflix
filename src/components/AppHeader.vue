<script>

import { state } from '../state';

export default {

	name: 'AppHeader',

	data() {
		return {
			state,
			movies: [],

		}
	},
	methods: {

	}
}
</script>
<template>

	<input type="text" placeholder="digit" v-model="state.searchText">
	<button @click="state.searchTitle">{{ state.message }}</button>

</template>
<style></style>