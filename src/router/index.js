import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Medicine from "../views/Medicine.vue";
import Profile from "../views/Profile.vue";

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
	},
	{
		path: "/medicine",
		name: "Medicine",
		component: Medicine,
	},
	{
		path: "/profile",
		name: "Profile",
		component: Profile,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
