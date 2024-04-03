import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
	message: 'Search',
	searchText: '',


	searchTitle() {
		console.log('funzione richiamata');
		// qui richiamo la funzione che ricerca il titolo inserito dall'utente nel input, nel database di db movie
		axios
			.get('https://api.themoviedb.org/3/search/movie?api_key=80957307a07de1c274de94c5be154b47&query=' + this.searchText)
			.then(resp => {
				console.log(resp);
				this.movies = resp
				console.log(this.searchText);
			})

	}



})