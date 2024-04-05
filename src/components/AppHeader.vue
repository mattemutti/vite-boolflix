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

	<div class="bg_color">
		<div class="container">
			<div class="d-flex justify-content-between align-items-cente py-4 text-aligne-center">

				<h1 class="text-danger">Boolflix</h1>
				<div>
					<input class="border-danger rounded text-bg-dark m-1 text-danger" type="text" placeholder="search"
						v-model="state.searchText" @keyup.enter="state.searchTitle">
					<button class="btn btn-outline-danger" @click="state.searchTitle"><i
							class="fa-solid fa-magnifying-glass"></i></button>
				</div>

			</div>
		</div>
	</div>

</template>
<style>
.bg_color {
	background-color: black;
}
</style>