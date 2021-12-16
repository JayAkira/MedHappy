<template>
	<v-card>
		<v-row>
			<v-col>
				<div class="text-h4">Hello!</div>
				<div class="text-h5">Let's create an account...</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-form @submit.prevent="submitHandler" ref="form">
					<v-text-field
						v-model="name"
						type="name"
						label="Full Name"
						placeholder="ex. Jane Doe"
						prepend-inner-icon="mdi-account"
						required
					/>
					<v-text-field
						v-model="email"
						:rules="emailRules"
						type="email"
						label="Email"
						placeholder="ex. janedoe@yahoo.com"
						prepend-inner-icon="mdi-account"
						required
					/>
					<v-text-field
						v-model="password"
						:rules="passwordRules"
						:type="passwordShow ? 'text' : 'password'"
						label="Password"
						placeholder="Password"
						prepend-inner-icon="mdi-key"
						:append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="passwordShow = !passwordShow"
						required
					/>
					<v-btn block color="primary" @click="submitHandler"> Sign Up </v-btn>
				</v-form>
				<div class="my-6 text-center">
					Already have an account?
					<v-btn small rounded color="primary" to="/login">Login</v-btn>
				</div></v-col
			>
		</v-row>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			show1: false,
			passwordShow: false,
			email: "",
			emailRules: [
				(v) => !!v || "E-mail is required",
				(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
			],
			password: "",
			passwordRules: [
				(v) => !!v || "Password is required",
				(v) =>
					(v && v.length >= 6) || "Password must be 6  characters or more!",
			],
		};
	},
	methods: {
		submitHandler() {
			if (this.$refs.form.validate()) {
				console.log("passed");
				// this.loading = true;
				// setTimeout(() => {
				// 	this.loading = false;
				// 	this.snackbar = true;
				// }, 3000);
			}
			// this.$router.push("/home");
		},
	},
};
</script>
