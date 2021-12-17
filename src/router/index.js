import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Medicine from "../views/Medicine.vue";
import Profile from "../views/Profile.vue";
import {authActions, authGetters} from '../store/auth'

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Landing",
		component: Landing,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/medicine",
		name: "Medicine",
		component: Medicine,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/profile",
		name: "Profile",
		component: Profile,
		meta: {
			requiresAuth: true,
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
	let routerAuthCheck = authGetters.isAuthenticated();
	
	if (requiresAuth) {
		if (routerAuthCheck) {
			next();
		} else {
			authActions.logout();
		}
	}
	next();
});

export default router;
