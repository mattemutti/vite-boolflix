<script>
import { state } from '../state'
export default {
	name: 'AppMain',		//nome del componente che serve per esportarlo
	data() {
		return {
			state,


		}
	}
}
</script>
<template>

	<div v-if="state.createListMovies === true">

		<div v-for="movie in state.movies">
			Titolo:{{ movie.results }}

		</div>
	</div>

</template>
<style></style>