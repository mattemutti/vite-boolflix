<script>
import { toHandlers } from 'vue';
import { state } from '../state';
import axios from 'axios'

export default {

	name: 'AppHeader',

	data() {
		return {
			state,
			movies: [],
			searchText: '',


		}
	},
	methods: {

		searchTitle() {
			axios
				.get('https://api.themoviedb.org/3/search/movie?api_key=80957307a07de1c274de94c5be154b47&query=' + this.searchText)
				.then(resp => {
					console.log(resp);
					this.movies = resp
					console.log(this.searchText);
				})
		}
	}
}
</script>
<template>

	<input type="text" placeholder="digit" v-model="searchText">
	<button @click="searchTitle">{{ state.message }}</button>

</template>
<style></style>