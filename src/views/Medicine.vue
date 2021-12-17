<template>
	<v-row dense>
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
	data: () => ({
		dialog: false,
	}),
	computed: { ...getters },
};
</script>
