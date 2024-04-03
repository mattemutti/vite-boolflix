<script>
import { state } from '../state'
export default {
	name: 'AppMain',		//nome del componente che serve per esportarlo
	data() {
		state
	}
}
</script>
<template>

	{{ state.message }}

</template>
<style></style>