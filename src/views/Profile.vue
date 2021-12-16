<template>
	<v-card>
		<v-row>
			<v-col>
				<!-- Change name to variable that comes from saved fullname at time of register -->
				<div class="text-h5" >Name</div>
				<v-form v-model="valid" :disabled="isEditable === false">
					<!-- <v-text-field v-model="name" label="Name"></v-text-field> -->
					<v-text-field v-model="email" label="Age"></v-text-field>
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
					<v-icon left dark>mdi-logout</v-icon>
					log out
				</v-btn>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		isEditable: false,
		name: "",
		age: "",
		dob: "",
		insurance_company: "",
		isurance_id: "",
		bin: "",
		pcn: "",
	}),
	methods: {
		toggleIsEditable() {
			this.isEditable = !this.isEditable;
		},
		logout() {
			// handle logout logic
			this.$router.replace("/");
		},
	},
};
</script>
