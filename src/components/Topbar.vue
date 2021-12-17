<template>
	<v-app-bar
		app
		color="primary"
		v-if="
			$route.name != 'Login' &&
			$route.name != 'Register' &&
			$route.name != 'Landing'
		"
		dark
	>
		<v-toolbar-title>{{ $route.name }}</v-toolbar-title>
		<v-spacer></v-spacer>
		<AddItemDialog />
	</v-app-bar>
</template>

<script>
import AddItemDialog from "./AddItemDialog.vue";

export default {
	components: { AddItemDialog },
};
</script>
