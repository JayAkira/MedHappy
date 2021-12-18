import Vue from "vue";
import router from "../router";

const baseLoginURL =
 	"https://la2xxfmc7f.execute-api.us-west-1.amazonaws.com/default/login_verification/";

 const baseRegisterURL =
 	"https://a02jhri2r8.execute-api.us-west-1.amazonaws.com/default/add_user/";

const initialState = {
	isAuthenticated: false,
};

const store = Vue.observable(initialState);

export const authGetters = {
	isAuthenticated: () => store.isAuthenticated,
};

export const authMutations = {
	setIsAuthenticated: (value) => (store.isAuthenticated = value),
};

export const authActions = {
	async login(email, password) {
		await fetch(
			baseLoginURL + "?user_email=" + email + "&password=" + password,
			{  mode: "no-cors" }
		)
			.then((res) => console.log(res.json()))
			.catch((err) => console.log(err));
		// authMutations.setIsAuthenticated(true);
        // router.replace("/home");
	},
	async register(name, email, password) {
		await fetch(
			baseRegisterURL + "user_name=" + name + "&password=" + password,
			"&user_email=" + email, { mode: "no-cors" }
		)
			.then((res) => console.log(res.json()))
			.catch((err) => console.log(err));	

        // router.replace("/home");
	},
	logout() {
		router.replace("/");
		// authMutations.setIsAuthenticated(false);
		// mutations.setMedicineList([]);
		// mutations.setProfileInfo({});
	},
};
