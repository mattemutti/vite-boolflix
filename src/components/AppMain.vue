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
		<h2>Film</h2>
		<ul v-for="movie in state.movies">
			<li>Titolo:{{ movie.title }}</li>
			<li>Titolo Originale: {{ movie.original_title }}</li>
			<li v-if="movie.original_language === 'en'">Lingua: <img class="w_flag" src="../assets/img/flag/gb.svg"
					alt=""></li>
			<li v-else-if="movie.original_language === 'it'">Lingua: <img class="w_flag" src="../assets/img/flag/it.svg"
					alt=""></li>
			<li v-else-if="movie.original_language === 'es'">Lingua: <img class="w_flag" src="../assets/img/flag/es.svg"
					alt=""></li>
			<li v-else-if="movie.original_language === 'fr'">Lingua: <img class="w_flag" src="../assets/img/flag/fr.svg"
					alt=""></li>
			<li v-else-if="movie.original_language === 'ja'">Lingua: <img class="w_flag" src="../assets/img/flag/jp.svg"
					alt=""></li>
			<li v-else>Lingua: {{ movie.original_language }}</li>
			<li>Voto: {{ movie.vote_average }}</li>
		</ul>
	</div>

	<div v-if="state.createListSerieTv === true">
		<h2>Serie Tv</h2>
		<ul v-for="serie in state.serieTv">
			<li>Titolo:{{ serie.name }}</li>
			<li>Titolo Originale: {{ serie.original_name }}</li>
			<li v-if="serie.original_language === 'en'">Lingua: <img class="w_flag" src="../assets/img/flag/gb.svg"
					alt=""></li>
			<li v-else-if="serie.original_language === 'it'">Lingua: <img class="w_flag" src="../assets/img/flag/it.svg"
					alt=""></li>
			<li v-else-if="serie.original_language === 'es'">Lingua: <img class="w_flag" src="../assets/img/flag/es.svg"
					alt=""></li>
			<li v-else-if="serie.original_language === 'fr'">Lingua: <img class="w_flag" src="../assets/img/flag/fr.svg"
					alt=""></li>
			<li v-else-if="serie.original_language === 'ja'">Lingua: <img class="w_flag" src="../assets/img/flag/jp.svg"
					alt=""></li>
			<li v-else>Lingua: {{ serie.original_language }}</li>
			<li>Voto: {{ serie.vote_average }}</li>
		</ul>
	</div>

</template>
<style>
.w_flag {
	width: 20px;
}
</style>