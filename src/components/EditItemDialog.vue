<template>
	<v-dialog
		v-model="dialog"
		persistent
		max-width="425px"
		v-if="$route.name == 'Medicine'"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-btn v-bind="attrs" v-on="on" icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<span class="text-h5">Medicine Info</span>
			</v-card-title>
			<v-card-text>
				<v-container>
					<v-row>
						<v-col cols="12">
							<v-text-field v-model="data.title" label="Title"></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								v-model="data.description"
								label="Description"
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-autocomplete
								v-model="data.frequency"
								:items="frequencyItems"
								label="Frequency"
							></v-autocomplete>
						</v-col>
						<v-col cols="12">
							<v-menu
								ref="menu"
								v-model="menu2"
								:close-on-content-click="false"
								:nudge-right="40"
								:return-value.sync="time"
								transition="scale-transition"
								offset-y
								max-width="290px"
								min-width="290px"
							>
								<template v-slot:activator="{ on, attrs }">
									<v-text-field
										v-model="data.time"
										label="Time"
										readonly
										v-bind="attrs"
										v-on="on"
									></v-text-field>
								</template>
								<v-time-picker
									ampm-in-title
									format="ampm"
									full-width
									v-if="menu2"
									v-model="time"
									@click:minute="$refs.menu.save(time)"
								></v-time-picker>
							</v-menu>
						</v-col>
						<v-col cols="6">
							<v-text-field
								v-model="data.doseAmount"
								label="Amount"
								placeholder="Ex: 100"
							></v-text-field>
						</v-col>
						<v-col cols="6">
							<v-autocomplete
								v-model="data.doseType"
								:items="doseItems"
								label="mg/ml"
							>
							</v-autocomplete>
						</v-col>
						<v-col cols="12"
							><v-btn color="error" @click="deleteItem">
								Delete Reminder
							</v-btn></v-col
						>
					</v-row>
				</v-container>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="normal" @click="dialog = false"> Close </v-btn>
				<v-btn color="primary" @click="handleSave"> Save </v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import { actions } from "../store/user";

export default {
	props: ["data"],
	data: () => ({
		time: null,
		menu2: false,
		dialog: false,
		frequencyItems: ["Daily", "Every other day", "Weekly", "Bi-weekly"],
		doseItems: ["mg", "ml"],
	}),
	methods: {
		handleSave() {
			const data = {
				title: this.data.title,
				description: this.data.description,
				isCheckDisabled: this.data.isCheckDisabled,
				isCloseDisabled: this.data.isCloseDisabled,
				frequency: this.data.frequency,
				time: this.data.time,
				doseAmount: this.data.doseAmount,
				doseType: this.data.doseType,
			};
			actions.updateItem(data);
			this.dialog = false;
		},
		deleteItem() {
			actions.deleteItem(this.data.title);
			this.dialog = false;
		},
	},
};
</script>
