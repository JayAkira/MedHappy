<template>
	<v-card>
		<v-row>
			<v-col class="my-6 ">
				<!-- Place holder MedHappy text for logo -->
				<!-- <div class="text-center">
					<div class="pa-4">
						<div class="text-h4">MedHappy</div>
					</div>
				</div> -->
				<v-img class="mx-auto my-6" src="../assets/logo.png" max-width="200"> </v-img>
				<div class="d-flex justify-center">
					<v-icon>mdi-format-quote-open</v-icon>
					<div class="text-h5 my-6 ">Stay healthy, stay happy</div>
					<v-icon>mdi-format-quote-close</v-icon>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-btn class="my-6" block color="primary" to="/login"> login </v-btn>
				<v-btn class="my-6" block color="primary" to="/register">
					sign up
				</v-btn>
			</v-col>
		</v-row>
	</v-card>
</template>
