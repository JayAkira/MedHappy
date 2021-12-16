<template>
	<v-bottom-navigation
		v-if="$route.name != 'Login' && $route.name != 'Register' && $route.name != 'Landing'"
		v-model="value"
		:value="active"
		color="indigo"
		grow
		app
		bottom
		fixed
	>
		<v-btn to="/home">
			<span>Home</span>

			<v-icon>mdi-home-outline</v-icon>
		</v-btn>

		<v-btn to="/medicine">
			<span>Medicine</span>

			<v-icon>mdi-pill</v-icon>
		</v-btn>

		<v-btn to="/profile">
			<span>Profile</span>

			<v-icon>mdi-information-outline</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>

<script>
export default {
	data() {
		return {
			value: 0,
			active: true,
		};
	},
};
</script>
