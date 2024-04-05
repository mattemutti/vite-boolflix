import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
	searchText: '',
	createListMovies: false,
	createListSerieTv: false,
	movies: [],
	serieTv: [],
	starMovie: '',
	starSerieTv: '',
	api_url_movies: 'https://api.themoviedb.org/3/search/movie?api_key=80957307a07de1c274de94c5be154b47&query=',
	api_url_tv: 'https://api.themoviedb.org/3/search/tv?api_key=80957307a07de1c274de94c5be154b47&query=',
	url_Image: 'https://image.tmdb.org/t/p/w342',

	searchTitle() {
		//console.log('funzione richiamata');
		// qui richiamo la funzione che ricerca il titolo inserito dall'utente nel input, nel database di db movie
		axios
			.get(this.api_url_movies + this.searchText)
			.then(resp => {
				//console.log(resp);
				this.movies = resp.data.results;
				//console.log(this.searchText);
				this.createListMovies = true;
				//console.log(this.createListMovies);
				console.log(this.movies);
			});
		// chiamata per le serie tv
		axios
			.get(this.api_url_tv + this.searchText)
			.then(resp => {
				//console.log('ricerca serie tv');
				this.serieTv = resp.data.results;
				console.log(this.serieTv);
				this.createListSerieTv = true;
			});
	},
})