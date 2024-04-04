<script>

import { state } from '../state';

export default {

	name: 'AppHeader',

	data() {
		return {
			state,


		}
	},
	methods: {

	}
}
</script>
<template>

	<input type="text" placeholder="search" v-model="state.searchText" @keyup.enter="state.searchTitle">
	<button @click="state.searchTitle">{{ state.nameButton }}</button>

</template>
<style></style>