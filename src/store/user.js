import Vue from "vue";

const initialState = {
	medicineList: [
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
			isCloseDisabled: false,
			frequency: "Every other day",
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
	profile: {
		name: "Jane Doe",
		age: "18",
		dob: "12/12/12",
		insurance_company: "Medic Now",
		insurance_id: "1234",
		bin: "4321",
		pcn: "1423",
	},
};

const store = Vue.observable(initialState);

export const getters = {
	medicineList: () => store.medicineList,
	profile: () => store.profile,
};

export const mutations = {
	setMedicineList: (value) => (store.medicineList = value),
	setProfileInfo: (value) => (store.profile = value),
};

export const actions = {
	// Medicine list actions
	addItem(item) {
		let newArray = getters.medicineList();
		newArray.push(item);
		mutations.setMedicineList(newArray);
	},
	updateItem(item) {
		let newArray = [...getters.medicineList()];

		const elementsIndex = newArray.findIndex(
			(element) => element.title == item.title
		);

		newArray[elementsIndex] = {
			...newArray[elementsIndex],
			item,
		};

		mutations.setMedicineList(newArray);
	},
	deleteItem(title) {
		let newArray = [...getters.medicineList()];

		newArray = newArray.filter((item) => item.title != title);
		mutations.setMedicineList(newArray);
	},

	// User profile actions
	updateProfile(item) {
		mutations.setProfileInfo(item);
	},
};
