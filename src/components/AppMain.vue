<script>
import { state } from '../state'
export default {
	name: 'AppMain',
	data() {
		return {
			state,
			showInfo: false,

		}
	},
	methods: {
		showOnInfoCard(index) {
			this.showInfo = true;
			console.log(this.showInfo, index);
		},
		showOff(index) {
			this.showInfo = false;
			console.log(this.showInfo, index);
		}
	}
}
</script>
<template>

	<div v-if="state.createListMovies === true">
		<div class="container">
			<div class="row">
				<h2 class="text-center text-uppercase text-danger p-2">Film</h2>
				<div class="col-xl-3 col-lg-4 col-md-6 col-12 p-1 imageCard rounded" v-for="movie in  state.movies ">
					<img v-if="movie.poster_path != null" class="rounded text-center"
						:src="state.url_Image + movie.poster_path" alt="">
					<img v-else class="rounded" src="../../public/noimage.png" alt="">
					<div class="infoCard p-2">
						<h5>Titolo: {{ movie.title }}</h5>
						<h6>Titolo Originale: {{ movie.original_title }}</h6>
						<div>
							<div v-if="movie.original_language === 'en'">Lingua: <img class="w_flag"
									src="../../public/gb.svg" alt=""></div>
							<div v-else-if="movie.original_language === 'it'">Lingua: <img class="w_flag"
									src="../../public/it.svg" alt=""></div>
							<div v-else-if="movie.original_language === 'es'">Lingua: <img class="w_flag"
									src="../../public/es.svg" alt=""></div>
							<div v-else-if="movie.original_language === 'fr'">Lingua: <img class="w_flag"
									src="../../public/fr.svg" alt=""></div>
							<div v-else-if="movie.original_language === 'ja'">Lingua: <img class="w_flag"
									src="../../public/jp.svg" alt=""></div>
							<div v-else>Lingua: {{ movie.original_language }}</div>
						</div>
						<!-- logica bandiera in base alla lingua -->
						<div>
							<span>Voto: </span>
							<span class="text-warning" v-if="((movie.vote_average / 2).toFixed(0)) == 0"> <i
									class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i> {{ (movie.vote_average / 2).toFixed(0) }}
							</span>
							<span class="text-warning" v-else-if="((movie.vote_average / 2).toFixed(0)) == 1"> <i
									class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i>{{ (movie.vote_average / 2).toFixed(0) }}
							</span>
							<span class="text-warning" v-else-if="((movie.vote_average / 2).toFixed(0)) == 2"> <i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i>{{ (movie.vote_average / 2).toFixed(0) }}
							</span>
							<span class="text-warning" v-else-if="((movie.vote_average / 2).toFixed(0)) == 3"> <i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i>{{ (movie.vote_average / 2).toFixed(0) }}
							</span>
							<span class="text-warning" v-else-if="((movie.vote_average / 2).toFixed(0)) == 4"> <i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-regular fa-star"></i>{{ (movie.vote_average / 2).toFixed(0) }}
							</span>
							<span class="text-warning" v-else="((movie.vote_average / 2 ).toFixed(0)) == 5"> <i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-solid fa-star"></i>{{ (movie.vote_average / 2).toFixed(0) }}
							</span>
						</div>
						<!-- logica stelle in base al voto -->
						<div>Overview: {{ movie.overview }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- movie -->

	<div v-if="state.createListSerieTv === true">
		<div class="container">
			<div class="row">
				<h2 class="text-center text-uppercase text-danger p-4">Serie Tv</h2>
				<div class="col-xl-3 col-lg-4 col-md-6 col-12 p-1 imageCard" v-for=" serie  in  state.serieTv ">
					<img v-if="serie.poster_path != null" class=" text-center"
						:src="state.url_Image + serie.poster_path" alt="">
					<img v-else src="../../public/noimage.png" alt="">
					<div class="infoCard p-2">
						<h5>Titolo:{{ serie.name }}</h5>
						<h6>Titolo Originale: {{ serie.original_name }}</h6>
						<div>
							<div v-if="serie.original_language === 'en'">Lingua: <img class="w_flag"
									src="../../public/gb.svg" alt=""></div>
							<div v-else-if="serie.original_language === 'it'">Lingua: <img class="w_flag"
									src="../../public/it.svg" alt=""></div>
							<div v-else-if="serie.original_language === 'es'">Lingua: <img class="w_flag"
									src="../../public/es.svg" alt=""></div>
							<div v-else-if="serie.original_language === 'fr'">Lingua: <img class="w_flag"
									src="../../public/fr.svg" alt=""></div>
							<div v-else-if="serie.original_language === 'ja'">Lingua: <img class="w_flag"
									src="../../public/jp.svg" alt=""></div>
							<div v-else>Lingua: {{ serie.original_language }}</div>
						</div>
						<!-- logica bandiera in base alla lingua -->
						<div>
							<span>Voto: </span>
							<span class="text-warning" v-if="(serie.vote_average / 2).toFixed(0) == 0">Voto: <i
									class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i> {{ (serie.vote_average / 2).toFixed(0) }}
							</span>
							<span class="text-warning" v-else-if="(serie.vote_average / 2).toFixed(0) == 1">Voto: <i
									class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i> {{ (serie.vote_average / 2).toFixed(0) }}
							</span>
							<span class="text-warning" v-else-if="(serie.vote_average / 2).toFixed(0) == 2">Voto: <i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i>{{ (serie.vote_average / 2).toFixed(0) }}
							</span>
							<span class="text-warning" v-else-if="(serie.vote_average / 2).toFixed(0) == 3">Voto: <i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i
									class="fa-regular fa-star"></i>{{ (serie.vote_average / 2).toFixed(0) }}
							</span>
							<span class="text-warning" v-else-if="(serie.vote_average / 2).toFixed(0) == 4">Voto: <i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-regular fa-star"></i>{{ (serie.vote_average / 2).toFixed(0) }}
							</span>
							<span class="text-warning" v-else="(serie.vote_average /2).toFixed(0) == 5">Voto: <i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
									class="fa-solid fa-star"></i>{{ (serie.vote_average / 2).toFixed(0) }}
							</span>
						</div>
						<!-- logica stelle in base al voto -->
						<div>Overview: {{ serie.overview }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- show -->

</template>
<style lang="scss">
body {

	.w_flag {
		width: 20px;
	}

	.imageCard {
		position: relative;
		overflow: hidden;
		background-size: cover;
		text-align: center;

	}

	.infoCard {
		position: absolute;
		top: 30px;
		left: 30px;
		visibility: hidden;
		text-align: left;
	}

	.imageCard:hover {
		>img {
			opacity: 20%;
		}

		.infoCard {
			visibility: visible;
		}
	}
}
</style>