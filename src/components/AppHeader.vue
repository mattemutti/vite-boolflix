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
	<div class="container">
		<div class="d-flex justify-content-between align-items-cente p-4 text-aligne-center">

			<h1 class="text-danger">Boolflix</h1>
			<div>
				<input type="text" placeholder="search" v-model="state.searchText" @keyup.enter="state.searchTitle">
				<button @click="state.searchTitle">{{ state.nameButton }}</button>
			</div>

		</div>
	</div>

</template>
<style></style>