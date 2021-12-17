<template>
	<v-row dense>
		<v-col>
			<div class="text-h4">Reminder</div>
			<div class="text-h5">{{ getCurrentDate() }}</div>
		</v-col>
		<v-col v-for="(item, i) in medicineList" :key="i" cols="12">
			<Card :data="item" />
		</v-col>
	</v-row>
</template>

<script>
import Card from "../components/Card.vue";
import { getters } from "../store/user";

export default {
	components: { Card },
	computed: {
		...getters,
	},
	methods: {
		getCurrentDate() {
			return new Date().toLocaleString("en-us", {
				weekday: "long",
				month: "short",
				day: "numeric",
			});
		},
	},
};
</script>
