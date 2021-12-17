<template>
	<v-card>
		<v-row>
			<v-col>
				<div class="text-h5">{{ name }}</div>
				<v-form :disabled="isEditable === false">
					<v-text-field v-model="age" label="Age"></v-text-field>
					<v-text-field v-model="dob" label="Date of Birth"></v-text-field>
					<v-text-field
						v-model="insurance_company"
						label="Insurance Company"
					></v-text-field>
					<v-text-field
						v-model="insurance_id"
						label="Insurance ID"
					></v-text-field>
					<v-text-field v-model="bin" label="BIN"></v-text-field>
					<v-text-field v-model="pcn" label="PCN"></v-text-field>
				</v-form>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-btn block color="primary" @click="toggleIsEditable">
					<v-icon left>{{ !isEditable ? "mdi-pencil" : "mdi-check" }}</v-icon>
					{{ !isEditable ? "edit profile" : "save profile" }}
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-btn block color="primary" @click="logout">
					<v-icon left >mdi-logout</v-icon>
					log out
				</v-btn>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
import { getters, actions } from "../store/user";
// import {authActions} from '../store/auth'

export default {
	computed: { ...getters },
	data: () => ({
		isEditable: false,
		name: getters.profile().name,
		age: getters.profile().age,
		dob: getters.profile().dob,
		insurance_company: getters.profile().insurance_company,
		insurance_id: getters.profile().insurance_id,
		bin: getters.profile().bin,
		pcn: getters.profile().pcn,
	}),
	methods: {
		toggleIsEditable() {
			this.isEditable = !this.isEditable;
			if (this.isEditable == false) this.updateProfile();
		},
		updateProfile() {
			const data = {
				name: this.name,
				age: this.age,
				dob: this.dob,
				insurance_company: this.insurance_company,
				insurance_id: this.insurance_id,
				bin: this.bin,
				pcn: this.pcn,
			};
			actions.updateProfile(data);
		},
		logout() {
			// handle logout logic
			// authActions.logout();
			this.$router.replace("/");
		},
	},
};
</script>
