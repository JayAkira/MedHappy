<template>
	<v-row dense>
		<v-col v-for="(item, i) in $store.items" :key="i" cols="12">
			<Card :data="item" />
		</v-col>
	</v-row>
</template>

<script>
import Card from "../components/Card.vue";
export default {
	components: { Card },
	data: () => ({
		dialog: false,
	}),
};
</script>
