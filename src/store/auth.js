import Vue from "vue";
// import { mutations } from "./user";
import router from "../router";

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
	login() {
		// let medicineList = api call from db getting medicine list (should be array)
		// mutations.setMedicineList(medicineList);
		// let profileInfo = api call from db getting user profile info (should be object)
		// mutations.setProfileInfo(profileInfo);
		authMutations.setIsAuthenticated(true);
        router.replace("/home");
	},
	register() {
		// let data = {
		//     name: fullname,
		//     age: "",
		//     dob: "",
		//     insurance_company: "",
		//     insurance_id: "",
		//     bin: "",
		//     pcn: "",
		// }
		// mutations.setProfileInfo(data)
		// authMutations.setIsAuthenticated(true);
        router.replace("/home");
	},
	logout() {
		router.replace("/");
		// authMutations.setIsAuthenticated(false);
		// mutations.setMedicineList([]);
		// mutations.setProfileInfo({});
	},
};
