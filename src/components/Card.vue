<template>
	<v-card class="d-flex flex-no-wrap justify-space-between my-1">
		<div>
			<v-card-title class="text-h6" v-text="data.title"></v-card-title>
			<v-card-subtitle v-text="data.description"></v-card-subtitle>
		</div>
		<v-card-actions>
			<EditItemDialog :data="data" />
			<v-btn
				text
				:disabled="data.isCheckDisabled"
				v-if="$route.name == 'Home'"
				@click="toggleCloseState(data.isCheckDisabled)"
			>
				<v-icon color="green" large>mdi-check-circle</v-icon></v-btn
			>
			<v-btn
				text
				:disabled="data.isCloseDisabled"
				v-if="$route.name == 'Home'"
				@click="toggleCheckState(data.isCloseDisabled)"
			>
				<v-icon color="red" large>mdi-close-circle</v-icon></v-btn
			>
		</v-card-actions>
	</v-card>
</template>

<script>
import EditItemDialog from "../components/EditItemDialog.vue";
import { getters, mutations } from "../store/user";

export default {
	props: ["data"],
	components: { EditItemDialog },
	computed: { ...getters },
	methods: {
		toggleCloseState(isToggled) {
			let newArray = [...this.medicineList];

			const elementsIndex = newArray.findIndex(
				(element) => element.title == this.data.title
			);

			newArray[elementsIndex] = {
				...newArray[elementsIndex],
				isCloseDisabled: !isToggled,
			};

			mutations.setMedicineList(newArray);
		},
		toggleCheckState(isToggled) {
			let newArray = [...this.medicineList];

			const elementsIndex = newArray.findIndex(
				(element) => element.title == this.data.title
			);

			newArray[elementsIndex] = {
				...newArray[elementsIndex],
				isCheckDisabled: !isToggled,
			};

			mutations.setMedicineList(newArray);
		},
	},
};
</script>
