<template>
	<div id="app">
		<v-app>
			<Topbar />
			<v-main>
				<v-container :fill-height="$route.name == 'Login' || $route.name == 'Register' || $route.name == 'Landing'">
					<v-responsive max-width="425" class="mx-auto">
						<router-view />
					</v-responsive>
				</v-container>
			</v-main>
			<BottomNav />
		</v-app>
	</div>
</template>

<script>
import Topbar from "./components/Topbar.vue";
import BottomNav from "./components/BottomNav.vue";
export default {
	components: {
		Topbar,
		BottomNav,
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
