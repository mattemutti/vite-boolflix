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
		<ul v-for="movie in state.movies">
			<li>Titolo:{{ movie.title }}</li>
			<li>Titolo Originale: {{ movie.original_title }}</li>
			<li>Lingua: {{ movie.original_language }}</li>
			<li>Voto: {{ movie.vote_average }}</li>
		</ul>
	</div>

</template>
<style></style>