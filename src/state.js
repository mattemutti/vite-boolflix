import { reactive } from 'vue'

export const state = reactive({
	message: 'Search',


	searchTitle() {
		console.log('funzione richiamata');
		// qui richiamo la funzione che ricerca il titolo inserito dall'utente nel input, nel database di db movie
	}



})