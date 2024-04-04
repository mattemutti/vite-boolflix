<script>
import { state } from '../state'
export default {
	name: 'AppMain',		//nome del componente che serve per esportarlo
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

	<div v-if="state.createListMovies === true">
		<h2>Film</h2>
		<ul v-for="movie in  state.movies ">
			<img :src="state.url_Image + movie.poster_path" alt="">

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

			<li v-if="((movie.vote_average / 2).toFixed(0)) == 0">Voto: <i class="fa-regular fa-star"></i><i
					class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
					class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i> {{ (movie.vote_average /
		2).toFixed(0) }}
			</li>
			<li v-else-if="((movie.vote_average / 2).toFixed(0)) == 1">Voto: <i class="fa-solid fa-star"></i><i
					class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
					class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>{{ (movie.vote_average /
		2).toFixed(0) }}
			</li>
			<li v-else-if="((movie.vote_average / 2).toFixed(0)) == 2">Voto: <i class="fa-solid fa-star"></i><i
					class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
					class="fa-regular fa-star"></i>{{ (movie.vote_average /
		2).toFixed(0) }}
			</li>
			<li v-else-if="((movie.vote_average / 2).toFixed(0)) == 3">Voto: <i class="fa-solid fa-star"></i><i
					class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i
					class="fa-regular fa-star"></i>{{ (movie.vote_average /
		2).toFixed(0) }}
			</li>
			<li v-else-if="((movie.vote_average / 2).toFixed(0)) == 4">Voto: <i class="fa-solid fa-star"></i><i
					class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
					class="fa-regular fa-star"></i>{{ (movie.vote_average /
		2).toFixed(0) }}
			</li>
			<li v-else="((movie.vote_average / 2 ).toFixed(0)) == 5">Voto: <i class="fa-solid fa-star"></i><i
					class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
					class="fa-solid fa-star"></i>{{ (movie.vote_average /
		2).toFixed(0) }}
			</li>
		</ul>
	</div>

	<div v-if="state.createListSerieTv === true">
		<h2>Serie Tv</h2>
		<ul v-for=" serie  in  state.serieTv ">
			<img :src="state.url_Image + serie.poster_path" alt="">
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
			<li v-if="(serie.vote_average / 2).toFixed(0) == 0">Voto: <i class="fa-regular fa-star"></i><i
					class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
					class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i> {{ (serie.vote_average /
		2).toFixed(0) }}
			</li>
			<li v-else-if="(serie.vote_average / 2).toFixed(0) == 1">Voto: <i class="fa-solid fa-star"></i><i
					class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
					class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i> {{ (serie.vote_average /
		2).toFixed(0) }}
			</li>
			<li v-else-if="(serie.vote_average / 2).toFixed(0) == 2">Voto: <i class="fa-solid fa-star"></i><i
					class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
					class="fa-regular fa-star"></i>{{ (serie.vote_average / 2).toFixed(0) }}
			</li>
			<li v-else-if="(serie.vote_average / 2).toFixed(0) == 3">Voto: <i class="fa-solid fa-star"></i><i
					class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i
					class="fa-regular fa-star"></i>{{ (serie.vote_average / 2).toFixed(0) }}
			</li>
			<li v-else-if="(serie.vote_average / 2).toFixed(0) == 4">Voto: <i class="fa-solid fa-star"></i><i
					class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
					class="fa-regular fa-star"></i>{{ (serie.vote_average / 2).toFixed(0) }}
			</li>
			<li v-else="(serie.vote_average /2).toFixed(0) == 5">Voto: <i class="fa-solid fa-star"></i><i
					class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
					class="fa-solid fa-star"></i>{{ (serie.vote_average / 2).toFixed(0) }}
			</li>
		</ul>
	</div>


</template>
<style>
.w_flag {
	width: 20px;
}
</style>