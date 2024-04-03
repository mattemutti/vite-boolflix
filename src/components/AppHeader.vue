<script>
import { state } from '../state';

export default {

	name: 'AppHeader',

	data() {
		state
	}
}
</script>
<template>

	<input type="text" placeholder="digit">
	<button>{{ state.message }}</button>

</template>
<style></style>