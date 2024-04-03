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
			<div>
				Titolo:{{ movie.title }}
				Titolo Originale: {{ movie.original_title }}
				Lingua: {{ movie.original_language }}
				Voto: {{ movie.vote_average }}
			</div>
		</div>
	</div>

</template>
<style></style>