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


		}
	},
	methods: {

		searchTitle() {
			axios
				.get('https://api.themoviedb.org/3/search/movie?api_key=80957307a07de1c274de94c5be154b47&query=matrix')
				.then(resp => {
					console.log(resp);
					this.movies = resp
				})
		}
	}
}
</script>
<template>

	<input type="text" placeholder="digit">
	<button @click="searchTitle">{{ state.message }}</button>

</template>
<style></style>