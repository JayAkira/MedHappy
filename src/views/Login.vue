<template>
	<v-card>
		<v-row>
			<v-col>
				<div class="text-h4">Hello!</div>
				<div class="text-h5">Let's sign in...</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<v-form @submit.prevent="submitHandler" ref="form">
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
					<v-btn block color="primary" @click="submitHandler"> login </v-btn>
				</v-form>
				<div class="my-6 text-center">
					Don't have an account?
					<v-btn small rounded color="primary" to="/register">Sign up</v-btn>
				</div>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
import {authActions} from '../store/auth'

export default {
	name: "App",
	data: () => ({
		loading: false,
		snackbar: false,
		passwordShow: false,
		email: "",
		emailRules: [
			(v) => !!v || "E-mail is required",
			(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
		],
		password: "",
		passwordRules: [
			(v) => !!v || "Password is required",
			(v) => (v && v.length >= 6) || "Password must be 6  characters or more!",
		],
	}),
	methods: {
		submitHandler() {
			if (this.$refs.form.validate()) {
				authActions.login()
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
