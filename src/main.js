import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

Vue.config.productionTip = false;

const store = Vue.observable({
	items: [
		{
			title: "Vitamins",
			description: "Take vitamins",
			isCheckDisabled: false,
			isCloseDisabled: false,
			frequency: "Daily",
			time: "9:00",
			doseAmount: 100,
			doseType: "ml",
		},
		{
			title: "Iron",
			description: "Take pills",
			isCheckDisabled: false,
			frequency: "Every other day",
			isCloseDisabled: false,
			time: "10:00",
			doseAmount: 200,
			doseType: "ml",
		},
		{
			title: "Omega 3",
			description: "Take pills",
			isCheckDisabled: false,
			isCloseDisabled: false,
			time: "11:00",
			frequency: "Weekly",
			doseAmount: 50,
			doseType: "mg",
		},
	],
	addItem(item) {
		store.items.push(item);
	},
	updateItem(item) {
		const elementsIndex = store.items.findIndex(
			(element) => element.title == item.title
		);

		let newArray = [...store.items];

		newArray[elementsIndex] = {
			...newArray[elementsIndex],
			item,
		};

		store.items = newArray;
	},
	deleteItem(title) {
		const newArray = store.items.filter((element) => element.title != title);
		// console.log(title)

		// let newArray = [...store.items];

		// newArray[elementsIndex] = {
		//     ...newArray[elementsIndex],
		//     item
		// };

		store.items = newArray;
	},
});

Vue.prototype.$store = store;

new Vue({
	vuetify,
	router,
	render: (h) => h(App),
}).$mount("#app");
